import React from "react";
import {ApolloClient,InMemoryCache,ApolloProvider} from '@apollo/client';
import LoginPage from "./components/Login";
import Layout from "./components/Layout";
import Doctors from "./components/Doctors";
import Patients from "./components/Patients";
import Home from "./components/Home";
import {BrowserRouter as Router,Routes,Route,Link,useParams}from 'react-router-dom';
import {useQuery, gql} from '@apollo/client';
import Appointments from "./components/appointments";
import Test from "./components/Test";
import Individual from "./components/Individual";
import Advertisement from "./components/advertisement";
import Requests from "./components/requests/Request";
import UnapprovedDoctor from "./components/requests/Detail page/unapprovedDoctorProfile"
import DoctorTabs from "./components/AllDoctors";
// import UnapprovedDoctor from "./components/requests/Detail page/unapprovedDoctorProfile";
// const uri = process.env.REACT_APP_API_URL;
//  const uri = 'https://hakime-admin.hasura.app/v1/graphql'
const client = new ApolloClient({
  
  // uri,
  cache: new InMemoryCache(),
  connectToDevTools:true
});
// const client = ...



// const GET_LOCATIONS = gql`
//   query GetLocations {
//     locations {
//       id
//       name
//       description
//       photo
//     }
//   }
// `;
// function DisplayLocations() {
//   const { loading, error, data } = useQuery(GET_LOCATIONS);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error : {error.message}</p>;

//   return data.locations.map(({ id, name, description, photo }) => (
//     <div key={id}>
//       <h3>{name}</h3>
//       <img width="400" height="250" alt="location-reference" src={`${photo}`} />
//       <br />
//       <b>About this location:</b>
//       <p>{description}</p>
//       <br />
//     </div>
//   ));
// }

function App() {
  // client
  // .query({
  //   query: gql`
  //     query MyQuery {
  //       doctors {
          
  //         name
          
  //       }
  //     }
  //   `,
  // })
  // .then((result) => console.log(result));
  // console.log('hello world')
  return (

  
 <ApolloProvider client={client}>
   {/* <DisplayLocations/> */}
  <Router>
  {/* <Route path="/login" element={<LoginPage/>}/> */}
        <Layout>
        <Routes>
        <Route path="/individual" element={<Individual/>}/>
          <Route path="/ads" element={<Advertisement/>}/>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/" element={<Test/>}/> */}

          <Route path="/Requests" element={<Requests/>}/>

          <Route path="/Doctor" element={<DoctorTabs/>}/>
          <Route path="/Patient" element={<Patients/>}/>
          <Route path="/appointments" element={<Appointments/>}/>
          <Route path="/newdoctor" element={<UnapprovedDoctor/>}/>
        </Routes>
        </Layout>
       </Router>
 </ApolloProvider>
      );
}

export default App;
