import react from 'react'
import logo from '../../../../images/doctor.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useParams } from 'react-router'
import { useQuery } from '@apollo/client'
import ErrorPage from '../../../utils/errorPage'
import { GET_DOCTOR_DETAIL} from '../../../model/Queries/queryDoctors'
import Loader from '../../../utils/loading'
import ApproveButton from './approveButton'
import Layout from '../../Layout'
import Rating from '@mui/material/Rating';

const DoctorDetails = (props)=>{
   const params = useParams();
   const doctorId = params.doctorId;

    const { data, loading, error }= useQuery(GET_DOCTOR_DETAIL,
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
            <div className='grid grid-cols-3 '>
            {/* <p>{doctor.id}</p> */}
            <div className='m-8 col-span-2 '>

<div className='flex flex-row'>
<img className="m-5 rounded-full h-48 w-48" src={doctor.profile_image.url} alt="Logo" height="auto"  width="23%"/>
<div className='m-5 px-3 pt-12 font-semibold'>
<div className='font-bold text-2xl pb-3'>Dr {doctor.full_name} </div>

 {/* <div className="" >{doctor.speciallity}</div> */}
<div className="" >{doctor.sex}</div>
<div className="" >300 ETB/ consultation</div>
<div className="" >{doctor.current_hospital}</div>
</div>

</div>
 

<div className="mt-5 mx-5"> 
<h4 className='font-bold m-2'>Decription:</h4>
<div className='mx-8'>
   <div className='p-8 m-2 shadow-md rounded-md'>
   {doctor.bio}

   </div>
</div></div>
   <div className="mt-5 mx-5"> 
<h4 className='font-bold m-2'>Work Experience:</h4>
<p className='mx-8'>
   {doctor.experiences.map((ex)=>{
      return(
         <div className='p-8 m-2 shadow-md rounded-md'>
         <h4 className='font-bold'>{ex.hospital_name}</h4>
         <p><span>Designation:</span> {ex.designation}
         </p>
         <p><span>Department: </span>{ex.department}</p>
         <p><span>Employment Period :</span> from {ex.start_date} to {ex.end_date}</p>
        </div>  
        
      )
   })}
   </p> 
   </div>
<div className="mt-5 mx-5">
   <p className='font-bold m-2' >Attachments(license):
   {/* <img className="m-5 rounded-sm h-72 w-96" src={doctor.licenceImage.url} alt="Logo" height="auto"  width="23%"/> */}
      
   </p>

   </div>
</div>
<div className='justify-right  rounded-lg height-screen mt-4 shadow-lg'>
      {/* <h2 className='text-green-900 text-2xl font-bold m-3 p-3'>Additional information</h2> */}
      <div className='font-bold p-3'><p className='font-bold text-green-900 text-md pb-4 '>Bank information</p>
      <p>wallet {doctor.wallet}</p>
      <div className='p-4 m-2 rounded-md'>
        {
         doctor.reviews.length == 0 ? <p className='font-normal'> no bank information provided yet</p>:

         doctor.bank_informations.map((bank)=>{
              return(
               <div className='p-2 m-2 shadow-md rounded-md'>
                  <p>Bank: {bank.bank_name}</p>
               <p> Account no: {bank.account_number}</p>
                  </div>
               
              )
         })
        }
       </div>
      </div>
      <div className='p-2 pt-8'> 
         <p className='font-bold text-green-900 text-md pb-4 '>Rate and Review</p>
         <Rating name="read-only" value={doctor.rate} readOnly /> <span className='text-xl sups'>({doctor.rate})</span>

         <p className='pt-8 font-bold'>Reviews</p>
         {
            doctor.reviews.length == 0 ? <p className=' m-2 rounded-md border p-8'>no reviews yet</p>:
            <div className='m-2 p-2'>{
            doctor.reviews.map((review)=>{
               return(
                  <div className="p-4 shadow-md rounded-md m-2">
                  <div className='flex flex-row'>
                  {/* <img className='rounded-full h-8 w-8 ' src={review.user.profile_image.url} alt="pp"/> */}
                  <p className='font-bold'>{review.user.full_name}</p>
      
               </div>
               <div>
               <Rating name="read-only" value={review.rate} readOnly size='small'/>

                  <p>{review.review}</p>
                  {/* <p>{review.created_at}</p> */}
                  </div>
            </div>
                  )
            })}
            </div>
         }
         
   
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