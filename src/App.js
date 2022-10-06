import React from 'react';
import './App.css';
import PublicRoutes from './app/Routes/PublicRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './layout/Layout';
import Home from './features/home/Home';
import ProductInfo from './features/components/ProductInfo';
import { Switch, Route, Router, Routes } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      ></Route>
      <Route
        path="/products/:productId"
        element={
          <Layout>
            <ProductInfo />
            <ToastContainer />
          </Layout>
        }
      ></Route>
    </Routes>
  );
}

export default App;
