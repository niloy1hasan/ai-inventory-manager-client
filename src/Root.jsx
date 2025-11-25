import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import ScrollTop from './Components/ScrollTop/ScrollTop';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <main>
                <ScrollTop></ScrollTop>
                <Outlet></Outlet>
            </main>
        </>
    );
};

export default Root;