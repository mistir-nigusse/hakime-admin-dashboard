import React from "react";
import Data from "./data/dbb.json"
// import {ApolloClient,InMemoryCache,ApolloProvider} from '@apollo/client';
import {useQuery, gql} from '@apollo/client';
import ErrorPage from "./utils/errorPage";
import {useNavigate} from "react-router-dom"
import Loader from "./utils/loading";
import doctor from "../images/doctor.jpg"

const GET_UNAPPROVED_DOCTORS = gql `
 query GetDoctors($approvalStatus: String!){
    doctors(approvalStatus:$approvalStatus){
        firstname
        lastname
        gender
        age
        specialization
        phone
        licenese
        description
        hospital
    }
 }
`;




const NewDoctorRequests = () =>{
   const navigate = useNavigate();
   const doctorClickHandler = ()=>{
          navigate('/newdoctor')
   }
  

   
    // const { loading, error, data } = useQuery(GET_UNAPPROVED_DOCTORS, {
    //     variables: { approvalStatus: 'approved' },
    //   });
    //   if (loading) return <Loader/>;
    //   if (error) return <ErrorPage/>;
        return (
          <div className="align-middle">
             <div className="flex flex-row flex-wrap gap-4" >
                
                {
                    Data.map(doctors =>{
                        return (
                            <div>
                            <div  className="border ml-12  shadow-md rounded-md  flex-auto flex flex-row h-auto w-auto" onClick={doctorClickHandler}>
                            
                            <img className=" rounded-full" src={doctor} width="200"/>
                            <div>
                            <h4 className="px-4 pt-12"><span className="font-semibold"> DR Abebe Kebede </span></h4>
                            <h4 className="px-4 font-semibold">Dentist</h4>
                            <h4><span className=" p-4"> <span className="font-semibold">300 ETB </span>/ consultation</span></h4>
                            {/* <h4 className="px-2">Male</h4> */}
                            <h5 className="px-4 pb-3">Tikur anbessa hospital</h5>
                            <p className="text-green-900 px-4 cursor-pointer">view details ---{">"}</p>
                            </div>
                            </div>
                            </div>
                        )
                    })
                }
             </div>
          </div>
        );
}
export default NewDoctorRequests;