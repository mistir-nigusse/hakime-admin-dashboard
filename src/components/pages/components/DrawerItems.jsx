import React from "react";
import { NavLink } from 'react-router-dom';
const DrawerItem = (props) =>{
   return(
    <div className="hover:bg-bg ">
                <li className="text-md">
                    <NavLink to={props.link} className={({isActive})=>
                        isActive? " font-bold text-green-900 underline text-lg " : "text-gray-700"
                    }>    <button className='shadow-sm  py-4  active:bg-green-900 active:text-white w-full text-left pl-8 rounded-sm'>
                    {props.icons}{props.title}</button></NavLink>
                </li>
                
                
                <hr className=" text-gray-400"/>
                </div>
   );
}
export default DrawerItem;