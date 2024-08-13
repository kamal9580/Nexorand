import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import axios from "axios";
import toast from "react-hot-toast";
import backendurl from "../Host";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();
  const {user, setUser} = useContext(UserContext);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-violet-500 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const response = await axios.post(
                `${backendurl}/api/users/login`,

                {
                  username : email,
                  password,
                },
                { withCredentials: true }
              );
              //  if(response.data.msg =='false'){
              //     return false ;
              //  }
              console.log(response);
              setUser(response.data.data);
              localStorage.setItem("token", response.data.data?.token);
              navigate("/my-space");
            } catch (error) {
              console.log(error);
              
            }
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

            <InputBox
              props={{ required: true }}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              placeholder="John Doe"
              label={"Username"}
            />
          </div>

          <div className="mb-6">
            {/* <label htmlFor="password" className="block text-gray-700">
              Password
              <span className="text-red-500 ml-1">*</span>
            </label> */}

            <InputBox
              props={{ required: true, type: "password" }}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              placeholder="1234"
              label={"Password"}
            />
          </div>

          {/* <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Sign In
          </button> */}

          <div className="pt-4">
            <Button label={"Sign In"} />
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
  );
};

export default Login;
