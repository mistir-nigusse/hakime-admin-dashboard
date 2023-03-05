import React from "react";
import Data from "../../data/dbb.json"
// import {ApolloClient,InMemoryCache,ApolloProvider} from '@apollo/client';
import {useQuery, gql} from '@apollo/client';
import {GET_NEW_DOCTORS} from '../../model/Queries/queryNewDoctors'
import ErrorPage from "../../utils/errorPage";
import {useNavigate,useParams} from "react-router-dom"
import Loader from "../../utils/loading";
import doctor from "../../../images/doctor.jpg"
import Layout from "../Layout"
import { Button } from "@mui/material";




const NewDoctorRequests = () =>{

  const navigate = useNavigate();

   
  

   
    const { loading, error, data } = useQuery(GET_NEW_DOCTORS);
      if (loading) return <Loader/>;
      if (error) return <p>this</p>;
        return (
          <Layout>
          <div className="align-middle">
             <div className="flex flex-row flex-wrap gap-4" >
                
                {
                    data.doctors.map(doctor =>{
                      console.log(data)
                        return (
                        
                            <div>
                            <div  className="ml-12  shadow-md rounded-lg  flex-auto flex flex-row h-auto w-96" onClick={(event)=>{


          navigate(`/newdoctorsdetail/${doctor.id}`);


}}>
                 <img className="h-36 m-1 w-36 rounded-full" src={doctor.profile_image.url} />

                          
                            <div>
                            <h4 className="px-4 pt-12"><span className="font-semibold"> DR {doctor.full_name} </span></h4>
                            <h4 className="px-4  text-gray-500">
                              speciallity name
                              {/* {doctor.specialities.speciallity_name} */}
                              </h4>
                            <h4><span className=" p-4"> <span className="font-semibold">price</span> / consultation</span></h4>
                            {/* <h4 className="px-2">{doctor.sex}</h4> */}
                            <h5 className="px-4 pb-3">{doctor.current_hospital}</h5>
                            <p className="text-green-900 px-4 cursor-pointer"><Button>view details ---{">"}</Button></p>
                            </div>
                            </div>
                            </div>
                        )
                    })
                }
             </div>
          </div>
          </Layout>
        );
}
export default NewDoctorRequests;