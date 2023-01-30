import React from "react";
import { Link } from "react-router-dom";

const HomeCard = (props)=>{
    return (
        <div className="grow mr-8">
            <Link to={props.link}>
        <div className='grow max-w-56 p-4 text-center rounded-lg shadow-lg bg-white overflow-hidden  h-40  my-1'>
                <p className='mt-2 text-green-900 font-bold text-4xl'>{props.counter}</p>
                <p className='text-gray-600 font-semibold'>{props.name}</p>
                <p className="font-semibold">{props.other}</p>
                {/* <p className="font-semibold">{props.other2}</p> */}

            </div>
        </Link>
        </div>
       
        
    );
}

export default HomeCard;