import React from 'react'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  const options ={
    maintainAspectRation: false,
    responsive: true,
    plugins:{
        legend: {
            position: 'bottom'
        },
        title:{
            display:'true',
            text: 'Patients analytics'
        }
    }

}
const data = {
    labels:['Jan', 'Feb', "mar", 'Apr', "may", 'jun','july','aug',],
    datasets:[
        
        {
            label: 'Total ',
            data: [5,12,36,49,80],
            backgroundColor: ['rgba(255,0,0,0.8)'],
           
            

        },
        {
            label: 'Active',
            data: [1,4,12,23,29],
            backgroundColor: ['rgba(255,225,0,0.9'],

           
            

        }

    ]
}
const PatientsChart = () => {

 
  return (
    <Line data={data} height={250} options={options}/>
   )
}

export default PatientsChart