import React from "react";
import {useNavigate} from 'react-router-dom';
import {GET_DOCTORS} from "../model/Queries/queryDoctors";
import { useQuery, useMutation } from "@apollo/client";
import Loader from "../utils/loading";

const DoctorsOverview = () =>{
    const { loading, error, data } = useQuery(GET_DOCTORS);

    if (loading) return <Loader/>;
    if (error) return <p>Error : {error.message}</p>;

    return (

        
        data.doctors.map((doctor)=>{
           console.log(doctor);
          return (
            <>
             
            <div className='bg-bg  rounded-lg '>
                 <img className= 'shadow-md mt-2 rounded-full h-10 w-10 bg-green-900 m-2 text-white' src={doctor.profile_image.url}/>
                 <span>{doctor.full_name}</span> |<span className='text-gray-700'> {doctor.speciallities
.speciallity_name}</span>
            </div>
      
            </>
           

          )
      
    
     })
       
     ); 
}
export default DoctorsOverview;