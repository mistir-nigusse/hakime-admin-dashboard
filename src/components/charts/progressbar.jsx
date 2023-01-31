import React from "react";

const testData = [
    { bgcolor: "rgba(255,0,0,0.8)", completed: 60 , specialization: "dentist"},
    { bgcolor: "green", completed: 30 , specialization: "medical" },
    { bgcolor: "#ef6c00", completed: 10 , specialization: "dermatologist"},
    { bgcolor: "#6a1b9a", completed: 60 , specialization: "dentist"},
    { bgcolor: "#00695c", completed: 30 , specialization: "medical" },
    { bgcolor: "#ef6c00", completed: 10 , specialization: "dermatologist"},
  ];
  
  const testData2 = [
    { bgcolor: "rgba(255,0,0,0.8)", completed: 60 , specialization: "successfull"},
    { bgcolor: "green", completed: 30 , specialization: " cancelled" },
    { bgcolor: "#ef6c00", completed: 10 , specialization: "cancelled by P"},
    { bgcolor: "#6a1b9a", completed: 60 , specialization: "cancelled by Doctors"},
   
  ];

const ProgressBar = (props) => {
    const { bgcolor, completed, name } = props;

    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
    fontSize: 10,
    fontWeight: 'bold'
    }
  
    return (
        <>
        
        <div className=" mx-3  grid grid-cols-2 ">
        <div className=" font-bold text-left mt-5 pr-3 text-gray-700">
            {name}
            </div> 
        <div style={containerStyles} className=" mt-5 ">
        <div style={fillerStyles}>
          <span style={labelStyles} >{`${completed}%`}</span>
        </div>
        </div>
    
      </div></>
      
    );
};
export function ProgressBarChart2(){
    return (
        <div>
          {testData2.map((item, idx) => (
            <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed}  name={item.specialization}/>
          ))}
        </div>
      );
}

function ProgressBarChart() {
    return (
      <div>
        {testData.map((item, idx) => (
          <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed}  name={item.specialization}/>
        ))}
      </div>
    );
  }
  
  export default ProgressBarChart;