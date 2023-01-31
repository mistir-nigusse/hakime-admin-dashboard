import React from 'react'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
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
            text: 'Appointments Chart'
        }
    }

}
const data = {
    labels:['Jan', 'Feb', "mar", 'Apr', "may", 'jun','july','aug',],
    datasets:[
        
        {
            label: 'Total appointments ',
            data: [7,3,2,5,9],
            
            borderColor:['rgba(255, 225, 0.8)'],
            backgroundColor: ['rgba(255,0,0,0.8)'],
            pointBackgroundColor: ['rgba(255,225,0,0.8'],
            pointBorderColor:  ['rgba(255,226,0, 0.2)']

        },
        {
            label: 'Successful appointments',
            data: [3,2,2,1,5],
            borderColor:['rgba(255,0,0,0.8)'],
            backgroundColor: ['rgba(255,225,0,0.9'],
            pointBackgroundColor: ['rgba(255,0,0,0.8)'],
            pointBorderColor:  ['rgba(255,0,0, 0.2)']

        }

    ]
}
const Barchart = () => {

 
  return (
    <Bar data={data} height={250} options={options}/>
   )
}

export default Barchart