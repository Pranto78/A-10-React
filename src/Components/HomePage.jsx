import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Layout/Navbar';

const HomePage = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div className="w-11/12 mx-auto pt-20">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default HomePage;