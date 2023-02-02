import React from 'react';
import { useState } from 'react';
const LoginPage = ()=>{

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState("");

    const loginHandler = (e) => {
        e.preventDefault();
        alert({userName})
        console.log('Form submitted' + {userName} + "passw is" + {password})
    }

    return (
    
        <div class="w-full max-w-xs min-w-xs mx-auto my-14">
            <h1 class="text-center text-green-900 font-bold text-3xl py-10">Admin Login Panel</h1>
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={loginHandler}> 
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border border-green-900 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e=>setUserName(e.target.value)}id="username" type="text" placeholder="Username" value={userName}/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border
       border-green-900 rounded w-full py-2 px-3
        text-gray-700 mb-3 leading-tight focus:outline-none 
        focus:shadow-outline" 
        onChange={e=>setPassword(e.target.value)}
         id="password" type="password" placeholder="******************"/>
      {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
       {/* TODO: impelement error message and validation */}
    </div>
    <div class="flex items-center justify-between">
      <input type="submit" value="Login" class="bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />

      
      <a class="inline-block align-baseline font-bold text-sm text-green-900 hover:text-green-700" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
 
</div>
    )
}
export default LoginPage;