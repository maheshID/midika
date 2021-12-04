import React, { useEffect } from 'react'
import {NavLink} from 'react-router-dom'

import Loader from './include/Loader';
import Menu from './include/Menu';
import Footer from './include/Footer';

function Dashboard() {
   
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
               <li className="breadcrumb-item"><a href="javascript:;">Home</a></li>
               <li className="breadcrumb-item active">Dashboard</li>
            </ol>
            <h1 className="page-header">Dashboard </h1>
            <div className="row">
               <div className="col-xl-3 col-md-6">
                  <div className="widget widget-stats bg-blue">
                     <div className="stats-icon"><i className="fa fa-building"></i></div>
                     <div className="stats-info">
                        <h4>Total Restaurants</h4>
                        <p>1200</p>
                     </div>
                     <div className="stats-link">
                        <NavLink to="/restaurants">View Detail <i className="fa fa-arrow-alt-circle-right"></i></NavLink>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-md-6">
                  <div className="widget widget-stats bg-info">
                     <div className="stats-icon"><i className="fa fa-users"></i></div>
                     <div className="stats-info">
                        <h4>Total Customers</h4>
                        <p>20000</p>
                     </div>
                     <div className="stats-link">
                        <NavLink to="/customers">View Detail <i className="fa fa-arrow-alt-circle-right"></i></NavLink>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-md-6">
                  <div className="widget widget-stats bg-orange">
                     <div className="stats-icon"><i className="fa fa-dollar-sign"></i></div>
                     <div className="stats-info">
                        <h4>Total Revenue</h4>
                        <p>1,291,922</p>
                     </div>
                     <div className="stats-link">
                        <a href="javascript:;">View Detail <i className="fa fa-arrow-alt-circle-right"></i></a>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-md-6">
                  <div className="widget widget-stats bg-red">
                     <div className="stats-icon"><i className="fa fa-shopping-cart"></i></div>
                     <div className="stats-info">
                        <h4>Total Orders</h4>
                        <p>150</p>
                     </div>
                     <div className="stats-link">
                        <a href="javascript:;">View Detail <i className="fa fa-arrow-alt-circle-right"></i></a>
                     </div>
                  </div>
               </div>
            </div>
            
         </div>

            <Footer />
         
      </div>
        </>
    )
}

export default Dashboard
