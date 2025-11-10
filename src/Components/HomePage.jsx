import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Layout/Navbar';

const HomePage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default HomePage;