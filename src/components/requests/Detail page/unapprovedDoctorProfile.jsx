import react from 'react'
import logo from '../../../images/doctor.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UnapprovedDoctor = ()=>{
   return(
    <div className=''>

      <div className='flex flex-row'>
      <img className="m-5" src={logo} alt="Logo" height="auto"  width="23%"/>
      <div className='m-5 px-3 pt-12 font-semibold'>
      <div className='font-bold text-2xl pb-3'>Dr Abebe Kebede </div>
       <div className="" >Dermatologist</div>
      <div className="" >Male</div>
      <div className="" >300 ETB/ consultation</div>
      <div className="" >Tikur anbessa hospital</div>
      </div>
     
      </div>
       

      <div className="mt-5 mx-5"> 
      <h4 className='font-bold m-2'>Decription:</h4>
      <p className='mx-8'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
       aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
       cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum
         </p></div>
         <div className="mt-5 mx-5"> 
      <h4 className='font-bold m-2'>Work Experience:</h4>
      <p className='mx-8'>
          <h4>Tikur anbessa medical college</h4>
          <p><span>Designation:</span> Resedential Medical officer
          </p>
          <p><span>Department: </span>Medical Officer</p>
          <p><span>Employment Period :</span> Jan1,2014 - Sep 2,2019</p>
         </p>
         </div>
      <div className="mt-5 mx-5">
         <p className='font-bold m-2' >Attachments:
           <span> <FontAwesomeIcon icon="fa-solid fa-download" /></span>
           <span className='underline font-light text-green-900'>resume.pdf</span>
         </p>
      
         </div>
      
      <button className="h-10 mr-2 w-20 bg-green-900 text-white font-bold hover:bg-green-600 rounded flex-none my-7">Approve</button>
      <button className="h-10 mr-2 w-20 bg-red-900 text-white font-bold hover:bg-red-600 rounded flex-none my-7">Decline</button> 
 

      </div>
   )
}
export default UnapprovedDoctor