import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen mx-auto'>
          <Navbar></Navbar>
          <div className='flex flex-grow'>
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        
        </div>
    );
};

export default Root;
