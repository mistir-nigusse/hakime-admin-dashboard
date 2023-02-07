
import React, { useEffect, useState } from "react";
import { useMutation,useQuery } from "@apollo/client";
import banner from "../../images/banner.jpg";
import {INSERT_BANNER} from "../model/mutations/advertisementMutations"
import {DELETE_BANNER} from "../model/mutations/advertisementMutations"

import { GET_ADS } from "../model/Queries/queryAds";
import Loader from "../utils/loading";
const Advertisement = () =>{
 const deleteBannerHandler = () =>{

 }
 const editBannerHandler = () =>{

 }
 const deavtivateBannerHandler =()=>{

 }

  const [inputs, setInputs] = useState({})
  
  const handleChange = (event)=>{
    const name = event.target.name;
    const value= event.target.value;
    setInputs(values=>({...values,[name]:value}))
  }
  const handleSubmit =(event)=>{
    console.log(inputs)
    // insert_banners({ variables: { banner: start_date } });
    event.preventDefault();
  }

  const { loading, error, data } = useQuery(GET_ADS);
    
  if (loading) return <Loader/>;
  if (error) return <p>Error : {error.message}</p>;
 
  return(
       data.banners.map((banner)=>{
            console.log(banner.the_image);
        return  <div className="m-4 m- w-11/12  shadow-xl bg-white  rounded-xl">
          
        <div className="grid grid-rows-3">
            <div className="row-span-2 ">
              <img src={banner.the_image.url} className="w-full rounded-md max-h-96"/>
            </div>
            <div className="grid grid-cols-2">
            <div className="p-4 text-left ">
             <p className="font-bold"> Teklehaymanot Hospital </p> 
             <ul className="text-gray-700">
              <li>published on:  {banner.start_date}</li>
              <li>End date: {banner.end_date}</li>
             </ul> 
              <button className="bg-gray-400  rounded-md shadow-mdtext-center text-black hover:text-white hover:bg-red-900  p-2 m-4">Remove</button>
              <button className="bg-gray-400 rounded-md shadow-mdtext-center text-black hover:text-white hover:bg-red-900   p-2 m-4">Edit</button>

            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <ul>
                  <li> <label> Name:<br/>
                  <input type="text" name="name" onChange={handleChange} value={inputs.name || ""} className="border rounded-md p-1 "/>
                </label></li>
                  <li><label> Start Date:<br/>
                  <input type="text" name="start_date" onChange={handleChange} value={inputs.start_date || ""}  className="border rounded-md p-1 "/>
                </label></li>
                  <li><label> End Date:<br/>
                  <input type="text" name="end_date" onChange={handleChange} value={inputs.end_date || ""}  className="border rounded-md p-1"/>
                </label></li>
                
                </ul>
                <input type="submit"/>
               
              </form>
            </div>
            </div>
            </div>
      </div>
       })
       
      );
  
  
}
export default Advertisement;