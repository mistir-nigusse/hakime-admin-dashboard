
import React from 'react';
import Barchart from './barChart';
import HomeCard from './Home_cards';
import { Linechart } from './linechart';
import PatientsChart from './patientChart';
import { DataGrid } from '@mui/x-data-grid';
import  app from '../components/data/appDB.json';
import { APPOINTMENT } from './columns/columns';
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
const Home = () => {
    return (
        <>
        <div className='grid w-full grid-cols-4   my-4' >
            <HomeCard  counter="5" name="Patients" other="+10 new users his week" other2="+5% engagement" link="/patient"/>
           <HomeCard counter="8" name="Doctor" link="/doctor" other="+10 unapproved doctors" other2="+5 new doctors this week"/>
           <HomeCard counter="2" name="Requests" link="/Requests" other="new requests" other2="5 refund requests" />
           <HomeCard counter="4" name="Appointments" link="/appointments" other="3 upcoming appointments" other2="10 successful this week"/>
           
        </div>
        <div className='h-72 grid w-full grid-cols-3'>
        <div className='rounded-lg shadow-lg bg-white overflow-hidden max-w-2/5 my-2 mr-8 '>
            
            <Linechart/>
            </div>
            <div className='  rounded-lg  bg-white overflow-hidden shadow-lg max-w-2/5 mr-8 my-2 '>

<Barchart/>

</div>
<div className='rounded-lg  bg-white overflow-hidden shadow-lg max-w-2/5 mr-8 my-2 '>

<PatientsChart/>

</div>
        </div>
        <div className='grid grid-cols-3 '>
            <div className='bg-white rounded-lg shadow pt-4 p-8 mr-8 mt-4 col-span-2'>
                <h4 className='font-bold p-4 text-green-900'>Upcoming appointments</h4>
                <DataGrid
        rows={app}
        columns={APPOINTMENT}
        pageSize={5}
        // onPageSizeChange={(newPage) => setPageSize(newPage)}
        pagination
        autoHeight
        // components={{Toolbar:GridToolbar}}
   

      />
      

            </div>
            <div className='bg-white rounded-lg shadow pt-4 p-8 mr-8 mt-4 '>
                <h4 className='font-bold py-4 px-2 text-green-900'>Doctor's List <span className='text-xs  font-semi-bold underline float-right'> View all</span></h4>
                <div className='bg-bg  rounded-lg '>
                     <button className= 'shadow-md mt-2 rounded-full h-10 w-10 bg-green-900 m-2 text-white'>D </button>
                     <span>Dr abebe kebede</span> |<span className='text-gray-700'> dentist</span>
                </div>
                <div className='bg-bg mt-2 rounded-lg '>
                     <button className= 'shadow-md rounded-full h-10 w-10 bg-green-900 m-2 text-white'>D </button>
                     <span>Dr abebe kebede</span> |<span className='text-gray-700'> dentist</span>
                </div>
                <div className='bg-bg mt-2 rounded-lg '>
                     <button className= ' shadow-md rounded-full h-10 w-10 bg-green-900 m-2 text-white'>D </button>
                     <span>Dr abebe kebede</span> |<span className='text-gray-700'> dentist</span>
                </div>
            </div>

        </div>
        </>
    );
};
export default Home;