import React, { useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom'

import Loader from './include/Loader';
import Menu from './include/Menu';
import Footer from './include/Footer';

import MaterialTable from 'material-table'

function Restaurants() {

    useEffect(() => {
        document.getElementById('page-loader').style.display = 'none';
  
        var element = document.getElementById("page-container");
        element.classList.add("show");
    }, []);

    const columns = [
        { title: "ID", field: "id" },
        { title: "First Name", field: "first_name" },
        { title: "Last Name", field: "last_name" }, 
        { title: "Email", field: 'email', },
        { title: "Image", field: "avatar", }
    ] 


    const tableRef = React.createRef();

    return (
        <>
            
            <Loader />

            <div id="page-container" className="fade page-sidebar-fixed page-header-fixed">
            
            <Menu />


            <div id="content" className="content">
            <ol className="breadcrumb float-xl-right">
               <li className="breadcrumb-item"><NavLink to="/dashboard">Dashboard</NavLink></li>
               <li className="breadcrumb-item active">Restaurants</li>
            </ol>
            <h1 className="page-header">Restaurants  <NavLink to="/add-restaurant" className="btn btn-success" ><i className="fa fa-plus"></i></NavLink></h1>
            

          {/*  <MaterialTable
                title="Restaurants Data"
                data={data}
                columns={columns}
                options={{debounceInterval:700,padding:"dense"}}
                data={query =>
                    new Promise((resolve, reject) => {
                        // prepare your data and then call resolve like this:
                        let url = "https://reqres.in/api/users?"

                        console.log(query);

                        if(query.search){
                            url+=`q=${query.search}`
                        }

                        if(query.orderBy){
                            url+=`&_sort=${query.orderBy.field}&_order=${query.orderDirection}`
                        }

                        url+=`&_page=${query.page+1}`
                        url+=`&_limit=${query.pageSize}`

                        fetch(url).then(resp=>resp.json()).then(resp=>{
                            resolve({
                                data: resp, // your data array
                                page: query.page // current page number
                                totalCount: 20 // total row number
                            });
                        });
                    })
                }
            /> */ }

            
            <MaterialTable        
      title="Refresh Data Preview"
      tableRef={tableRef}
      columns={[
        {
          title: 'Avatar',
          field: 'avatar',
          render: rowData => (
            <img
              style={{ height: 36, borderRadius: '50%' }}
              src={rowData.avatar}
            />
          ),
        },
        { title: 'Id', field: 'id' },
        { title: 'First Name', field: 'first_name' },
        { title: 'Last Name', field: 'last_name' },
      ]}
      data={query =>
        new Promise((resolve, reject) => {
          let url = 'https://reqres.in/api/users?'
          url += 'per_page=' + query.pageSize
          url += '&page=' + (query.page + 1)

          if(query.search){
                url+=`&_q=${query.search}`
            }

            if(query.orderBy){
                url+=`&_sort=${query.orderBy.field}&_order=${query.orderDirection}`
            }

            console.log(url);

          fetch(url)
            .then(response => response.json())
            .then(result => {
              resolve({
                data: result.data,
                page: result.page - 1,
                totalCount: result.total,
              })
            })
        })
      }
      options={{
        search: true
      }}
      actions={[
        {
          icon: 'refresh',
          tooltip: 'Refresh Data',
          isFreeAction: true,
          onClick: () => tableRef.current && tableRef.current.onQueryChange(),
        }
      ]}
    />

            
            
         </div>

            
            <Footer />
         
      </div>

        </>
    )
}

export default Restaurants
