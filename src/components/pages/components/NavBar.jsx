import React from 'react';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
import DrawerItem from './DrawerItems';
 import illustration from '../../../images/ill.jpg';
const Navigation = () => {
    return (
        <nav className=' text-left fixed top-0 left-0  w-2/12  t font-semibold bg-white shadow-xl rounded-lg min-h-screen  '>
            <Link to = "/"> <div className='my-6 mx-10 flex flex-row '>
        <img className="h-16 w-16 shadow-xl rounded-full" src={logo} alt="Logo" height="45"  width="45"/>
        <h3 className="m-5 text-green-900 font-bold  text-lg">HAKIME</h3>
        </div>
        </Link>
            <ul className=''>
                <DrawerItem link="/" title="Dashboard"/ >
                <DrawerItem link="/patient" title="Patients"/>
                <DrawerItem link="/appointments" title="Appointments"/>
                <DrawerItem link="/requests" title="Manage billings"/>
                <DrawerItem link="/doctor" title="Manage doctors"/>
                <DrawerItem link="/ads" title="Manage advertisment"/>
               
                
              
              
            </ul>
            <div>
                <img src={illustration} />
            </div>
        </nav>
    );
};
export default Navigation;