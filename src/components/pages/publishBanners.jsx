import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import {INSERT_BANNER} from "../model/mutations/advertisementMutations"
import { GET_ADS } from "../model/Queries/queryAds";


import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import banner from "../../images/banner.jpg";
import {INSERT_BANNER} from "../model/mutations/advertisementMutations"
import { GET_ADS } from "../model/Queries/queryAds";
const PublishBanner = () =>{
  
  const [start_date, setStart_date] = useState('')
  const handleChange = (event)=>{
    setStart_date(event.target.value)
  }
  const handleSubmit =(event)=>{
    console.log(start_date)
    insert_banners({ variables: { banner: start_date } });
    event.preventDefault();
  }
  
  const [insert_banners, { data, loading, error }] = useMutation(INSERT_BANNER,{
    refetchQueries: [
      {query: GET_ADS}, // DocumentNode object parsed with gql
      'GET_BANNERS', // Qu
    ]
  }
  );

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;
  return(
       
        <div className="m-4 m- w-11/12 h-screen shadow-xl bg-white  rounded-xl">
           <form onSubmit={handleSubmit}>
            <label> Name:
              <input type="text" name="name" value={start_date} onChange={handleChange}/>
            </label>
            <label> Start date
              <input type="text" name="name" value={start_date} onChange={handleChange}/>
            </label>
            <label> End date
              <input type="text" name="name" value={start_date} onChange={handleChange}/>
            </label>
            <label> upload image
              <input type="text" name="name" value={start_date} onChange={handleChange}/>
            </label>
            <button type="submit">Publish Banner</button>
      </form>
       
      </div>
      );
  
  
}
export default PublishBanner;