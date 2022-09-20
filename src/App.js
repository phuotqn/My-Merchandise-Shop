import React from 'react';
import './App.css';
import PublicRoutes from './app/Routes/PublicRoute';
import Layout from './layout/Layout';
import Home from './features/home/Home';
import ProductInfo from './features/home/components/ProductInfo';
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
        path="/products"
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
