import React from 'react';
import './App.css';

import 'react-toastify/dist/ReactToastify.css';
import Layout from './layout/Layout';
import Home from './features/home/Home';
import ProductInfo from './features/components/ProductInfo';
import { Route, Routes } from 'react-router-dom';
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
          </Layout>
        }
      ></Route>
    </Routes>
  );
}

export default App;
