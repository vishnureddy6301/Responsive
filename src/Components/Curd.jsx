import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { IoIosPersonAdd } from "react-icons/io";

const Curd = () => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState('');
  const [brand, setBrand] = useState('');
  const [editId, setEditID] = useState(-1);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(res => setProducts(res.data.products))
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editId === -1) {
      const id = products.length + 1;
      axios.post('https://dummyjson.com/products/add', { id, title, brand })
        .then(res => {
          setProducts([...products, { id, title, brand }]);
          setTitle('');
          setBrand('');
          alert('Product added successfully!');
        })
        .catch(err => console.log(err));
    } else {
      axios.put('https://dummyjson.com/products/' + editId, { title, brand })
        .then(res => {
          setProducts(products.map(product =>
            product.id === editId ? { ...product, title, brand } : product
          ));
          setEditID(-1);
          setTitle('');
          setBrand('');
          alert('Product updated successfully!');
         
        })
        .catch(err => console.log(err));
    }
  };

  const handleEdit = (id) => {
    const product = products.find(p => p.id === id);
    setTitle(product.title);
    setBrand(product.brand);
    setEditID(id);
  };

  const handleDelete = (id) => {
    axios.delete('https://dummyjson.com/products/' + id)
      .then(res => {
        setProducts(products.filter(product => product.id !== id));
        alert('Product deleted successfully!');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='container'>
      <div className='form-div'>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Enter Title' value={title} onChange={e => setTitle(e.target.value)} />
          <input type='text' placeholder='Enter Brand' value={brand} onChange={e => setBrand(e.target.value)} />
          <button type='submit' >{editId === 0 ? 'Add' : 'Update'}</button>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Brand</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.brand}</td>
              <td>
              {/* <button><IoIosPersonAdd /></button> */}
                <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => handleEdit(product.id)}>Edit</button>
                <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Curd;