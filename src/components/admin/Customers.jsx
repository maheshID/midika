import React, { useEffect } from 'react'
import {NavLink} from 'react-router-dom'

import Loader from './include/Loader';
import Menu from './include/Menu';
import Footer from './include/Footer';


function Customers() {

    useEffect(() => {
        document.getElementById('page-loader').style.display = 'none';
  
        var element = document.getElementById("page-container");
        element.classList.add("show");
    }, []);

    return (
        <>
            
            <Loader />

            <div id="page-container" className="fade page-sidebar-fixed page-header-fixed">
            
            <Menu />


            <div id="content" className="content">
            <ol className="breadcrumb float-xl-right">
               <li className="breadcrumb-item"><NavLink to="/dashboard">Dashboard</NavLink></li>
               <li className="breadcrumb-item active">Customers</li>
            </ol>
            <h1 className="page-header">Customers </h1>
            <div className="row">
               
            </div>
            
         </div>

            
            <Footer />
         
      </div>

        </>
    )
}

export default Customers
