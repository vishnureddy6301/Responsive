import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, InfoCircleOutlined, BarChartOutlined, AppstoreOutlined, SettingOutlined, DashboardOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}

function Analytics() {
  return <div>Analytics</div>;
}

function Product() {
  return <div>Product</div>;
}

function Services() {
  return <div>Services</div>;
}

function Dashboard() {
  return <div>Dashboard</div>;
}

export default function Dash() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header className='bg:white'>
          <div className='bg:black text-white '>My Dashboard</div>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu mode="inline" style={{ height: '100%', borderRight: 0 }}>
              <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="about" icon={<InfoCircleOutlined />}>
                <Link to="/about">About</Link>
              </Menu.Item>
              <Menu.Item key="analytics" icon={<BarChartOutlined />}>
                <Link to="/analytics">Analytics</Link>
              </Menu.Item>
              <Menu.Item key="product" icon={<AppstoreOutlined />}>
                <Link to="/product">Product</Link>
              </Menu.Item>
              <Menu.Item key="services" icon={<SettingOutlined />}>
                <Link to="/services">Services</Link>
              </Menu.Item>
              <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
                <Link to="/dashboard">Dashboard</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '24px' }}>
            <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/product" element={<Product />} />
                <Route path="/services" element={<Services />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
}