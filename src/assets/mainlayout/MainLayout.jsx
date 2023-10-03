import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='w-[85%] mx-auto font-poppins'>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;