import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { InputBox } from '../components/InputBox';
import { Button } from '../components/Button';
import axios from 'axios';
import toast from 'react-hot-toast'

const Login = () => {

  
  const [email, setemail] = useState("");
  const [password,setpassword]= useState("");
  
  
  const navigate = useNavigate();
  
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-violet-500 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form onSubmit={async () => {
            navigate("/my-space")
            // try {
            //   const response = await axios.post("/", {
              
            //     email,
            //     password,
               
             
            //  });
            //  if(response.data.msg =='Wrong pass'){
            //     return ;
            //  }
            
            //  localStorage.setItem("token", response.data.token)
            //  navigate("/my-space")
            // } catch (error) {
              
            // }
           
          }}
          >
          <div className="mb-4">
            {/* <label htmlFor="email" className="block text-gray-700">
              Email
              <span className="text-red-500 ml-1">*</span>
            </label> */}
            {/* <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              required
            /> */}

      <InputBox props={{required : true, type : 'email'}}  onChange={(e) => {
          setemail(e.target.value);
        }} placeholder="nilesh@gmail.com" label={"Email"} />
          </div>

          <div className="mb-6">
            {/* <label htmlFor="password" className="block text-gray-700">
              Password
              <span className="text-red-500 ml-1">*</span>
            </label> */}

            <InputBox props={{required : true, type : 'password'}} onChange={(e) => {
          setpassword(e.target.value);
        }} placeholder="1234" label={"Password"}  />

          </div>

          {/* <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Sign In
          </button> */}

         <div className="pt-4">
          <Button 
           label={"Sign In"} />
        </div>

          
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login