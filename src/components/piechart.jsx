import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement);
const data = {
    labels:['Female', 'Male'],
    datasets:[
        
        {
            label: 'Doctors by gender',
            data: [5,12],
            backgroundColor: ['rgba(255,0,0,0.8)', 'rgba(255,225,0,0.9)'],
           
            

        },
      
          ]
};
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

export const Piechart = () => {
   
  return (
    <div>
              <Doughnut data={data} height={100} width={100}  options={options}/>

    </div>
  )
}
