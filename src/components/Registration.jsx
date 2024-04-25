import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "./Utility/API";
//this is to check my github
const Registration = () => {
  const [submiter,setsubiting]=useState(false)
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  function Signup(e) {
    e.preventDefault();
   setsubiting(true)
   if(user.name==''||user.email==""||user.password=='')
   { return alert("please fill out all the required fillds");}
    API.Registeruser(user).then((data) => {
      console.log(data);
    });

    //then here what i want is to redirect to login
    window.location.href = "/login";
  }

  return (
    <div>
  
      <div className="min-h-screen bg-gray-50 flex flex-col justify-middle py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {/* <img className="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow"/> */}
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-md leading-5 text-gray-500 max-w">
            Or
            <Link
              to="/login"
              className=" ml-2 font-medium text-blue-600 hover:text-green-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              login to your account
            </Link>
          </p>
        </div>

        <div className="mt-0 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-5  text-gray-700"
                >
                  Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    type="text"
                    required=""
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md
                         placeholder-gray-400 focus:outline-none focus:shadow-outline-blue
                          focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 
                          "
                    value={user.name}
                    onChange={(e) =>
                      setUser((p) => ({ ...p, name: e.target.value }))
                    }
                  />
                  {user.name==''&&submiter&&<small className="text-red-700">this field is required!</small>}
                  <div className=" absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-5  text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="email"
                    name="email"
                    placeholder="user@example.com"
                    type="email"
                    required=""
                    className="appearance-none block w-full px-3 py-2 border
                         border-gray-300 rounded-md placeholder-gray-400 focus:outline-none
                          focus:shadow-outline-blue focus:border-blue-300 transition duration-150 
                          ease-in-out sm:text-sm sm:leading -/5
                "
                    value={user.email}
                    onChange={(e) => {
                      setUser({ ...user, email: e.target.value });
                    }}
                  />
                  {user.email==''&&submiter&&<small className="text-red-700">this field is required!</small>}
                  <div className=" absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required=""
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md
                         placeholder-gray-400 focus:outline-none focus:shadow-outline-blue
                          focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 
                          "
                    value={user.password}
                    onChange={(e) => {
                      setUser({ ...user, password: e.target.value });
                    }}
                  />
                  {user.password==''&&submiter&&<small className="text-red-700">this field is required!</small>}
                </div>
              </div>

              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border
             border-transparent text-sm font-medium rounded-md text-white
              bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 
              focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150
               ease-in-out"
                    onClick={(e) => Signup(e)}
                  >
                    Create account
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
