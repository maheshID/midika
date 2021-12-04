import React, { useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom'

import Loader from './include/Loader';
import Menu from './include/Menu';
import Footer from './include/Footer';

import Country from './json/countries.json';
import State from './json/states.json';
import City from './json/cities.json';

function AddRestaurant() {

    useEffect(() => {
        document.getElementById('page-loader').style.display = 'none';
  
        var element = document.getElementById("page-container");
        element.classList.add("show");
        
    }, []);

     const [myCountry, setMyCountry] = useState();
     const [myState, setMyState] = useState();
     const [myCity, setMyCity] = useState();

    const [selectedCountry, setSelectedCountry] = useState();
    const [selectedState, setSelectedState] = useState(0);
    const [selectedCity, setSelectedCity] = useState(0);

    function changeCountry(event) {
      const filtered = State.filter(item => item.country_id == event.target.value)
      setSelectedState(filtered);
      setSelectedCity(0);
    }

    function changeState(event) {
      const filtered = City.filter(item => item.state_id == event.target.value)
      setSelectedCity(filtered);
    }

    const [{alt, src}, setImg] = useState({
        src: '',
        alt:''
    });

    const handleImg = (e) => {
        if(e.target.files[0]) {
            setImg({
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name
            });    
        }   
    }

    
    const [data, setData] = useState({
      name:"",
      address:"",
      country:"",
      state:"",
      city:""
    });
    
    const InputEvent = (event) => {
      const {name, value} = event.target;

      setData((preVal) => {
        return {
          ...preVal,
          [name]:value
        }
      });

    }

    const formSubmit = (e) => {
      e.preventDefault();
      alert(data.fullname);
    };

   
    return (
        <>
            
            <Loader />

            <div id="page-container" className="fade page-sidebar-fixed page-header-fixed">
            
            <Menu />


            <div id="content" className="content">
            <ol className="breadcrumb float-xl-right">
               <li className="breadcrumb-item"><NavLink to="/dashboard">Dashboard</NavLink></li>
               <li className="breadcrumb-item"><NavLink to="/restaurants">Restaurants</NavLink></li>
               <li className="breadcrumb-item active">Add Restaurant</li>
            </ol>
            <h1 className="page-header">Add Restaurant  </h1>
            

            <div className="row">
              
            

              <div className="col-xl-6 ui-sortable">

              <div className="panel panel-inverse" data-sortable-id="form-stuff-10">

              <div className="panel-heading ui-sortable-handle">
              <h4 className="panel-title">Add Restaurant</h4>
              <NavLink to="/restaurants" className="btn btn-sm btn-default pull-right">Back</NavLink>
              </div>


              <div className="panel-body">
                <form onSubmit={formSubmit} method="POST">
                <fieldset>

                <div className="row">
                  <div className="col-md-12 form-group">
                    <label for="exampleInputName">Name:</label>
                    <input type="text" className="form-control" id="exampleInputName" placeholder="Enter Name" name="name" value={data.name} onChange={InputEvent} />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 form-group">
                    <label for="exampleInputAddress">Address:</label>
                    <textarea className="form-control" id="exampleInputAddress" placeholder="Enter Address" name="address" value={data.address} onChange={InputEvent}></textarea>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4 form-group">
                    <label for="exampleInputCountry">Country:</label>
                    <select name="country" className="form-control" value={data.country} onChange={changeCountry}>
                        <option value="">Select Country</option>
                        { Country.map(c => {
                          return (
                            <>
                            <option value={c.id}>{c.name}</option>
                            </>
                          )
                        }) }
                    </select>
                  </div>
                  <div className="col-md-4 form-group">
                    <label for="exampleInputState">State:</label>
                    <select name="state" className="form-control" value={data.state} onChange={changeState}>
                        <option value="">Select state</option>
                        { 
                          selectedState.length > 0 ?
                          selectedState.map(s => {
                          return (
                            <>
                            <option value={s.id}>{s.name}</option>
                            </>
                          )
                        })
                        : ''
                          }
                    </select>
                  </div>
                  <div className="col-md-4 form-group">
                    <label for="exampleInputCity">City:</label>
                    <select name="city" class="form-control" value={data.city}>
                          <option value="">Select City</option>
                          {
                            selectedCity.length > 0 ?
                            selectedCity.map(c => {
                              return (
                                <>
                                  <option value={c.id}>{c.name}</option>
                                </>
                              )
                            })
                            : ''
                          }
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 form-group">
                    <label for="exampleInputLogo">Logo:</label>
                    <br/>
                    { src != '' ?
                    <img src={src} className="form-img__img-preview" style={{width:"200px",height:"200px"}} />
                    : ''
                  }
                    <input type="file" className="form-control" id="exampleInputLogo" onChange={handleImg} />
                  </div>
                </div>

                <button type="submit" className="btn btn-sm btn-success m-r-5">Submit</button>
                <button type="reset" className="btn btn-sm btn-default">Reset</button>
                
                </fieldset>
                </form>
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

export default AddRestaurant
