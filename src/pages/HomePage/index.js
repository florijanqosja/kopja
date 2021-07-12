import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Allproducts } from "../../components/";


const Index = () => {
  return (
    <div className="min-h-screen w-full ">
        <Router>
          <div>Homepage section</div>
         
          <Allproducts />
          
          
          
          
        </Router>
    </div>
  );
  
};

export default Index;
