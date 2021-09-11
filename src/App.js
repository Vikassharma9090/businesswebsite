import React  from 'react';
import Home from "./Components/Home";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { Redirect, Route, Switch } from 'react-router';

// import "./index.css";


;
const App=()=>{
     
    return(
        <>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/contact" component={Contact} /> 
           

            <Redirect/>
           
        </Switch>
        <br/>
       <Footer/>

        </>
    );
};
export default App;




