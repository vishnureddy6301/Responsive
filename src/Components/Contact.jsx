
//import { Form } from 'antd';
import React from 'react';
import logo from './image.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Contact = () => {
    return (
        <div className=" flex flex-col bg-gray-100 min-h-screen">
      
            <header className="bg-white shadow">
                <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <img className="rounded-full object-left-top mx-24  left-0 top-2 w-12 h-12" src={logo} /> 
                    <nav className=" hidden md:flex space-x-4">
                        <a href="#" className="text-gray-800 hover:text-purple-600 ">Home</a>
                        <a href="#" className="text-gray-800 hover:text-purple-600 ">About Us</a>
                        <a href="#" className="text-gray-800 hover:text-purple-600 ">Services</a>
                        <a href="#" className="text-gray-800 hover:text-purple-600 ">Projects</a>
                        <a href="#" className="text-gray-800 hover:text-purple-600 ">Careers</a>
                    </nav>
                    <a href="#" className="text-white bg-[#1C1258]	 hover:bg-gray-700 px-4 py-2 rounded lg ">Contact Us</a>

                </div>
            </header>


            <section className="bg-gradient-to-b from-[#1C1258] to-[#FFB0B0] text-white py-16 px-6 md:px-0">
                <h1 className="text-4xl md:text-4xl font-bold mb-4 text-center">Contact Us</h1>
            </section>
           
            <main className="container mx-auto px-6 py-8 ">
                <p className="mb-8 font-Rubik text-center text-gray-700">
                We're excited to hear about your idea, whether it's straightforward or complex. At NewDefines, we 
                thrive on meeting new challenges and connecting with new faces. If you’re unsure where to start, 
                share more about your company and how you think we can help. Team NewDefines is here to listen, adjust, and execute changes tailored to your business needs. It's that simple.</p>
                <div className="max-w-xl mx-auto  bg-gradient-to-b from-[#F3F1FF] to-[#FFD6BD]	 p-8 rounded-lg shadow-lg text-gray-800">
                    <form>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <div className="mb-4">
                                <label   htmlFor="name" className="text-gray-700 mb-1" >Name</label>
                                <input 
                                 id="name" 
                                type="text" 
                                placeholder="name" 
                                className="w-full px-3 py-2 border placeholder-pink-500 rounded-lg focus:outline-none  focus:border-gray-600" />
                            </div>
                            <div className="mb-4">
                                <label  htmlFor="email" className="block text-gray-700 mb-1" >Email</label>
                                <input
                                id="email" 
                                 type="email" 
                                 placeholder="email" 
                                 className="w-full px-3 py-2 border   rounded-lg focus:outline-none focus:border-gray-600" />
                            </div>
                            <div className="mb-4">
                                <label  htmlFor="number" className="block text-gray-700 mb-1" >Number</label>
                                <input
                                id="number"  
                                type="text" 
                                placeholder="number" 
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none  focus:border-gray-600" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="subject"  className="block text-gray-700 mb-1" >Subject</label>
                                <input 
                                id="subject"
                                type="text"  
                                placeholder="subject" 
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none  focus:border-gray-600" />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 mb-1" >Message</label>
                            <textarea 
                            id="message" 
                            name="message" 
                            rows="5"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none  focus:border-gray-600" ></textarea>
                        </div>
                        <div className='flex justify-center'>
                            <button 
                            type="submit"
                            className=" bg-[#1C1258] text-white px-4 py-2 rounded-lg hover:bg-gray-700 focus:outline-none  focus:border-white-900"
                            >
                            Send Message
                            </button>

                        </div>
                    </form>
                </div>
            </main>

            <footer className="bg-[#1C1258] text-white py-6">
                <div className="container mx-auto text-center">
                    <h6 className="mb-8 cursor-pointer" >Links</h6>
                    <nav className="mb-4">
                        <a href="#" className="text-white hover:text-purple-400 px-4  ">About</a>
                        <a href="#" className="text-white hover:text-purple-400 px-4 ">Services</a>
                        <a href="#" className="text-white hover:text-purple-400 px-4 ">Careers</a>
                        <a href="#" className="text-white hover:text-purple-400 px-4 ">Free Consultation</a>
                        <a href="#" className="text-white hover:text-purple-400 px-4 ">Contact Us</a>
                    </nav>
                    <h6 className="mb-2 cursor-pointer ">Follow Us</h6>

                    <ul class="flex justify-center mt-5 space-x-5">
                     <li>
      
        <div className="text-red-500 cursor-pointer flex">
            
                    <FaFacebook size={40}/>
           
        </div>
    </li>
    <li>
          
        <div className="text-red-500 cursor-pointer">
            
            <FaTwitter size={40}/>
        </div>
    </li>
     <li>
           
        <div className="text-red-500 cursor-pointer">
           
            <FaInstagram size={40}/>
        </div>
        
      </li>
   </ul>
                </div>
            </footer>
        </div>
    );
};

export default Contact;