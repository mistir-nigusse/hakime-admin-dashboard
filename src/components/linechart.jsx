import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
export const Linechart = () => {
    const options ={
        maintainAspectRation: false,
        responsive: true,
        plugins:{
            legend: {
                position: 'bottom'
            },
            title:{
                display:'true',
                text: 'Revenue Chart'
            }
        }

    }
    const data = {
        labels:['Jan', 'Feb', "mar", 'Apr', "may", 'jun','july','aug',],
        datasets:[
            {
                label: 'Total',
                data: [10,5,4,6,9],
                borderColor:['rgba(0,128,0.8)'],
                backgroundColor: ['rgba(0,128,0.5,0.5)'],
                pointBackgroundColor: ['rgba(0,128,0.8)'],
                pointBorderColor:  ['rgba(0,128,0.2)']

            },
            {
                label: 'from advertisement ',
                data: [3,2,2,1,5],
                borderColor:['rgba(255, 225, 0.8)'],
                backgroundColor: ['rgba(255,225,0,0.5'],
                pointBackgroundColor: ['rgba(255,225,0,0.8'],
                pointBorderColor:  ['rgba(255,226,0, 0.2)']

            },
            {
                label: 'from Consultations',
                data: [7,3,2,5,4],
                borderColor:['rgba(255,0,0,0.8)'],
                backgroundColor: ['rgba(255,0,0,0.5)'],
                pointBackgroundColor: ['rgba(255,0,0,0.8)'],
                pointBorderColor:  ['rgba(255,0,0, 0.2)']

            }

        ]
    }
  return (
    <div>
        <Line data={data} height={230} options= {options}/>
    </div>
  )
}
