import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Layout/Navbar';
import WhyUs from './WhyUs';
import Featured from '../Components/Featured';
import Footer from '../Layout/Footer';

const HomePage = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div className="w-11/12 mx-auto pt-20">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default HomePage;