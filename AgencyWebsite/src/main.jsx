import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Layout from './Layout.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Product from './components/Product.jsx';
import Newsletter from './components/Newsletter.jsx';
import Blog from './components/Blog.jsx';

const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='service' element={<Services />} />
    <Route path='product' element={<Product />} />
    <Route path='testimonal' element={<Newsletter />} />
    {/* <Route path='blog' element={<Blog />} /> */}
  </Route>
    <Route path='blog' element={<Blog />} />
    </>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
