import React from "react";
import {ApolloClient,InMemoryCache,ApolloProvider} from '@apollo/client';
import LoginPage from "./components/pages/Login";
import Layout from "./components/pages/Layout";
import Patients from "./components/pages/Patients";
import Dashboard from "./components/pages/Dashboard";
import {BrowserRouter as Router,Routes,Route,Link,useParams}from 'react-router-dom';
import {useQuery, gql} from '@apollo/client';
import { HttpLink } from "@apollo/client";
import Appointments from "./components/pages/appointments";
import Test from "./components/Test";
import Individual from "./components/pages/doctors/Detail page/Individual";
import Advertisement from "./components/pages/advertisement";
import Requests from "./components/pages/requests/Request";
import UnapprovedDoctor from "./components/pages/doctors/Detail page/unapprovedDoctorProfile"
import DoctorTabs from "./components/pages/doctors/DoctorsTab";

// import UnapprovedDoctor from "./components/requests/Detail page/unapprovedDoctorProfile";
// const uri = process.env.REACT_APP_API_URL;
//  const uri = 'https://hakime-admin.hasura.app/v1/graphql'
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://hakime.hasura.app/v1/graphql',
    headers: {
      'x-hasura-admin-secret': 'hakime' 
    },
  
  }),
  cache: new InMemoryCache(),
  connectToDevTools:true
});
// const client = ...






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
   {/* <DisplayDoctors/> */}
  <Router>
        <Layout>
        <Routes>
        <Route path="/individual" element={<Individual/>}/>
          <Route path="/ads" element={<Advertisement/>}/>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/" element={<Test/>}/>
  <Route path="/login" element={<LoginPage/>}/>

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
