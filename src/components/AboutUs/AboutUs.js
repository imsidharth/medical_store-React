import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../../App.css';
import Navbar from '../Navbar/Navbar'
import checkAuth from "../Authenticate/CheckAuth";



function Aboutus() {

    const navigator = useNavigate()
    function doNavigate(){
        navigator('/')
    }

    return (
      <div className="customBg">
      <Navbar />
      <div className='container w-50 bg-white rounded mt-5 p-3'>
          {/* <p className='customText'>Hola Globo</p> */}
          <div className='row'>
            <div className='col'>
              <div className='container bg-white rounded'>
              <h1 style={{ fontWeight: 'bold', color: '#000' }}>About Us</h1>
        <p>Welcome to [Medical Shop Name], your trusted destination for all your healthcare needs. At Med World, we are committed to providing high-quality healthcare products and services to our customers, ensuring their well-being and satisfaction..
        </p>
        <h3 style ={{color:'#000'}}>Our Mission</h3>
        <p>
Our mission at Med World is to improve the health and wellness of our community by offering a comprehensive range of pharmaceuticals, medical supplies, and healthcare solutions. We strive to deliver exceptional customer service and personalized care to every individual who walks through our doors or visits our online store.
        </p>
        <button className='btn btn-info' onClick={doNavigate}>Home Page</button> {/* done with programatic navigator (useNavigate) */}

              </div>
            </div>
          </div>
      </div>
    </div>
);
}

export default checkAuth(Aboutus);