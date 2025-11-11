import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    );
};

export default Root;