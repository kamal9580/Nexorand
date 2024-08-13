import { useState } from "react";
import { BottomWarning as Bottom } from "../components/Bottom";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backendurl from "../Host";

export const Register = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [instagramid, setinstagramid] = useState("");

  const navigate = useNavigate();
  // console.log('sss');
  
  return (
    <div className="bg-gradient-to-r  items-center from-violet-500 to-blue-500 h-screen flex justify-center">
      <div className="flex flex-col justify-center bg-white w-full max-w-md">
        <div className="rounded-lg  text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <form
          
            onSubmit={async(e) => {
              e.preventDefault();
              try {
                const response = await axios.post(
                  `${backendurl}/api/users/register`,
                  {
                    username,
                    email,
                    instagramId : instagramid,
                    password
                  },
                  { withCredentials: true }
                );
                console.log(response, 44);

                localStorage.setItem("token", response.data.token);
                navigate("/Login");
              } catch (error) {
                console.log(error);

              }
            }}
          >
            <InputBox
              onChange={(e) => {
                setusername(e.target.value);
              }}
              placeholder="kamal9580"
              label={"Username"}
            />

            <InputBox
              props={{ required: true, type: "password" }}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              placeholder="1234"
              label={"Password"}
            />

            <InputBox
              props={{ required: true, type: "email" }}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              placeholder="nilesh@gmail.com"
              label={"Email"}
            />

            <InputBox
              onChange={(e) => {
                setinstagramid(e.target.value);
              }}
              placeholder="kamal1234"
              label={"Instagram id"}
            />

            <div className="pt-4">
              <Button label={"Sign up"} />
            </div>
          </form>
          <Bottom
            label={"Already have an account?"}
            buttonText={"Login"}
            to={"/Login"}
          />
        </div>
      </div>
    </div>
  );
};
