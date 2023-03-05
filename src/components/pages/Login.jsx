import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useFormik } from 'formik';
import { LOGIN } from '../model/mutations/login';
import { useMutation } from '@apollo/client';
import Loader from '../utils/loading';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import ErrorSnackbars from './errorsnackbar';
import Dashboard from './Dashboard';
const LoginPage = ()=>{

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [token , setToken] = useState ("");
    const [loggedIn, setLoggedIn] = useState(false);
  
    
   const loginHandler = async (e) => {
    console.log("login", email);
     const token = await login({ variables: { email: email , pswd: password}});

      localStorage.setItem('token',token.data.adminLogin.token)

      
      console.log(localStorage.getItem('token'))
   

    }

    const [login,{loading,error,data}] = useMutation(LOGIN);
    if (loading) return <Loader/>;
    if (error) return <><LoginPage/></>;
    return (
        <div className="w-full max-w-xs min-w-xs mx-auto my-14">
            <h1 className="text-center text-green-900 font-bold text-3xl py-10">Admin Login Panel</h1>
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={loginHandler}> 
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="Email">
        Email
      </label>
      <input className="shadow appearance-none border
       border-green-900 rounded w-full py-2 px-3
        text-gray-700 mb-3 leading-tight focus:outline-none 
        focus:shadow-outline" 
        onChange={e=>setEmail(e.target.value)}
         id="email" type="email" placeholder="example@example.com"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className="shadow appearance-none border
       border-green-900 rounded w-full py-2 px-3
        text-gray-700 mb-3 leading-tight focus:outline-none 
        focus:shadow-outline" 
        onChange={e=>setPassword(e.target.value)}
         id="password" type="password" placeholder="******************"/>
      {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
       {/* TODO: impelement error message and validation */}
    </div>
    <div className="flex items-center justify-between">
      <input type="submit" value="Login" className="bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />

      
      {/* <a className="inline-block align-baseline font-bold text-sm text-green-900 hover:text-green-700" href="#">
        Forgot Password?
      </a> */}
    </div>
  </form>
 
</div>
    )
}
export default LoginPage;