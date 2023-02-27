import react from 'react'
import logo from '../../../../images/doctor.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useParams } from 'react-router'
import { useQuery } from '@apollo/client'
import ErrorPage from '../../../utils/errorPage'
import { GET_DOCTOR_BY_ID} from '../../../model/Queries/queryDoctors'
import Loader from '../../../utils/loading'
import ApproveButton from './approveButton'
import Layout from '../../Layout'
const DoctorDetails = (props)=>{
   const params = useParams();
   const doctorId = params.doctorId;

    const { data, loading, error }= useQuery(GET_DOCTOR_BY_ID,
     { variables:{id:doctorId}}
      );
   //  const [insert_banners, { data, loading, error }] = useMutation(INSERT_BANNER);


   if (loading) return <Loader/>;
   if (error) return `Submission error! ${error.message}`;
   return(
      <Layout>

    {
      data.doctors.map((doctor)=>{
         console.log(doctor)
         return(
            <div className='flex justify-center '>
            {/* <p>{doctor.id}</p> */}
            <div className='m-8 '>

<div className='flex flex-row'>
<img className="m-5 rounded-full h-48 w-48" src={doctor.profile_image.url} alt="Logo" height="auto"  width="23%"/>
<div className='m-5 px-3 pt-12 font-semibold'>
<div className='font-bold text-2xl pb-3'>Dr {doctor.full_name} </div>
 <div className="" >{doctor.speciallity}</div>
<div className="" >{doctor.sex}</div>
<div className="" >300 ETB/ consultation</div>
<div className="" >{doctor.current_hospital}</div>
</div>

</div>
 

<div className="mt-5 mx-5"> 
<h4 className='font-bold m-2'>Decription:</h4>
<p className='mx-8'>
{doctor.bio}
</p></div>
   <div className="mt-5 mx-5"> 
<h4 className='font-bold m-2'>Work Experience:</h4>
<p className='mx-8'>
   {doctor.experiences.map((ex)=>{
      return(
         <p>
         <h4>{ex.hospital_name}</h4>
         <p><span>Designation:</span> {ex.designation}
         </p>
         <p><span>Department: </span>{ex.department}</p>
         <p><span>Employment Period :</span> from {ex.start_date} to {ex.end_date}</p>
        </p>  
        
      )
   })}
   </p> 
   </div>
<div className="mt-5 mx-5">
   <p className='font-bold m-2' >Attachments(license):
   <img className="m-5 rounded-sm h-72 w-96" src={doctor.image.url} alt="Logo" height="auto"  width="23%"/>

   </p>

   </div>
</div>

            </div>
         )
         
      })
   }
      </Layout>

   )
}
export default DoctorDetails