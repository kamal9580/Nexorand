import { Link } from "react-router-dom";

const Header = () => {
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
          <Link
            to="/sign-in"
                           >
            
            <button class=" p-2 rounded-full hover:bg-indigo-700">
         Features
      </button>
          </Link>

          <Link
            to="/sign-in"
           
          >
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


          <Link
            to="/Login"
            // className="flex items-center px-3 font-bold cursor-pointer "
            
          >

      <button class=" p-2 rounded-full hover:bg-indigo-700">
         Sign-in
      </button>
           
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
