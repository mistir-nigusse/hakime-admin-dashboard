import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumbs from './BreadCrumbs';
import LoginPage from '../Login';

const Header = () => {
return (
    <header className=" bg-white grid grid-cols-10  h-16">
       
        <BreadCrumbs/>
        {/* <h1 className=' col-span-9 text-green-900 text-3xl  text-center my-2 font-bold '>bkk </h1>
        <div >
          
        <p className=" h-10 m-2 underline  marker: w-20 col-span-1  text-green-900 font-bold hover:bg-green-600  my-3">Logout</p> 
          
        </div> */}
    
    </header>
    );
};
export default Header;