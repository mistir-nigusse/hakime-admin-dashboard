import React from 'react';
import PatientsChart from '../charts/patientChart';

import { Piechart } from '../charts/piechart';
import Box from '@mui/material/Box';
import AllPatientsDG from '../datagrids/AllPatientsDG';
import Layout from './Layout';


const Patients = () => {

    return (
        <Layout>
        <div className='grid grid-cols-3'>
        
       <div className= 'col-span-2   rounded  mr-8 ' >
       <AllPatientsDG/>
</div>
<div className='sticky top-4 right-4 mr-3 grid grid-cols-1 grid-rows-2'>
      <div className='bg-white shadow-lg rounded-md m-4'>
      <PatientsChart/>
    
      </div>
      <div className='bg-white shadow-lg m-4 rounded-md'>
    
      <Piechart/>
      </div>
      
      </div>
    </div>
    </Layout>
    );
};
export default Patients;