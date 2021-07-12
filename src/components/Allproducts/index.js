import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./Product";

const Allproducts = () => {
  return (
    <div className="min-h-screen w-full">
        <Router>
          <div class="bg-gray-300">All product section</div>
          <div class='flex'> 
          <Product />
          <Product />
          </div>
          
        </Router>
    </div>
  );
  
};

export default Allproducts;
  