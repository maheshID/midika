import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'

function Menu() {

  
    var dashboardClass = window.location.pathname.match(/^\/dashboard/) ? "active" : "";
    var addRestaurantsClass = window.location.pathname.match(/^\/add-restaurant/) ? "active" : "";
    var restaurantsClass = window.location.pathname.match(/^\/restaurants/) ? "active" : "";
    var customersClass = window.location.pathname.match(/^\/customers/) ? "active" : "";
    if(addRestaurantsClass=='active'){
        restaurantsClass = 'active';
    }
  
    return (
        <>
            <div id="header" className="header navbar-default">
            <div className="navbar-header">
               <NavLink to="/dashboard" className="navbar-brand"><span className="navbar-logo"></span> <b>Midika</b> Admin</NavLink>
               <button type="button" className="navbar-toggle" data-click="sidebar-toggled">
               <span className="icon-bar"></span>
               <span className="icon-bar"></span>
               <span className="icon-bar"></span>
               </button>
            </div>
            <ul className="navbar-nav navbar-right">
               <li className="dropdown navbar-user">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <img src="assets/img/user/user-13.jpg" alt="" />
                  <span className="d-none d-md-inline">Adam Schwartz</span> <b className="caret"></b>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                     <a href="javascript:;" className="dropdown-item">Edit Profile</a>
                     <a href="javascript:;" className="dropdown-item"><span className="badge badge-danger pull-right">2</span> Inbox</a>
                     <a href="javascript:;" className="dropdown-item">Calendar</a>
                     <a href="javascript:;" className="dropdown-item">Setting</a>
                     <div className="dropdown-divider"></div>
                     <a href="javascript:;" className="dropdown-item">Log Out</a>
                  </div>
               </li>
            </ul>
         </div>
         <div id="sidebar" className="sidebar">
            <div data-scrollbar="true" data-height="100%">
               
               <ul className="nav">
                  <li className="nav-header">Navigation</li>

                  <li className={dashboardClass}>
                     <NavLink to="/dashboard" >
                     <i className="fa fa-th-large"></i>
                     <span>Dashboard</span>
                     </NavLink>
                  </li>

                  <li className={restaurantsClass}>
                     <NavLink to="/restaurants">
                     <i className="fa fa-building"></i>
                     <span>Restaurants</span>
                     </NavLink>
                  </li>

                  <li className={customersClass}>
                     <NavLink to="/customers">
                     <i className="fa fa-users"></i>
                     <span>Customers</span>
                     </NavLink>
                  </li>

               </ul>
            </div>
         </div>

         <div className="sidebar-bg"></div>

        </>
    )
}

export default Menu
