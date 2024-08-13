import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  return (
    <div className="py-6 bg-[#5C6BC0] px-12 ">
      <div className="container mx-auto flex justify-between items-center">
        <span className="font-bold text-3xl tracking-tighter">
          <Link to="/" className="hover:text-blue-300  ">
            <span className="text-white">Nexorand</span>
            {/* <span className="text-white">rand</span> */}
          </Link>
        </span>

        <div className="flex space-x-2 text-white">
          <Link to="/sign-in">
            <button class=" p-2 rounded-full hover:bg-indigo-700">
              Features
            </button>
          </Link>

          <Link to="/sign-in">
            <button class=" p-2 rounded-full hover:bg-indigo-700">
              Testimonals
            </button>
          </Link>

          {/* <Link
            to="/sign-in"
            className="flex items-center px-3 font-bold cursor-pointer"
          >
             <span className=" hover:text-blue-400 ">Sign up</span>
            
          </Link> */}

          {user ? (
            <div>
              <button
                onClick={() => setIsDropDownOpen(!isDropDownOpen)}
                class=" p-2 rounded-full hover:bg-indigo-700"
              >
                 {user.username}!
              </button>
              {isDropDownOpen ? (
                <div className="absolute w-[6vmax] h-[4vmax] bg-white text-black z-[10] text-[1.2vmax] flex justify-center items-center rounded-[5%] shadow-[1px_2px_3px_1px_#555252]">
                  <ul>
                    <li
                      className="cursor-pointer"
                      onClick={() => {
                        setIsDropDownOpen(false);
                        navigate("/my-space");
                      }}
                    >
                      Profile
                    </li>
                    <div className="border-b-[0.1vmax] border-grey" />
                    <li
                      className="cursor-pointer"
                      onClick={() => {
                        setIsDropDownOpen(false);
                        setUser(null);
                        localStorage.clear();
                        navigate("/");
                      }}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              ) : (
                <> </>
              )}
            </div>
          ) : (
            <Link
              to="/Login"
              // className="flex items-center px-3 font-bold cursor-pointer "
            >
              <button class=" p-2 rounded-full hover:bg-indigo-700">
                Sign-in
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
