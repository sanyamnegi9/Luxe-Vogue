import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Tab } from "@headlessui/react";
import Signup from "./Signup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDb } from "../firebase/FirebaseConfig";
import { setLogLevel } from "firebase/app";
import { UserStatusContext } from "../contexts/UserStatusContext";

const Login = () => {
  const { setUser } = useContext(UserStatusContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignin  = async()=>{
    // setLoading(true);

    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      localStorage.setItem('user', JSON.stringify(result));
      setUser('user')
      // toast.success("Signin Successfull",{})
      navigate("/");
      // setLoading(false)

    }catch(err){
      // toast.err("Signin Failed"),{}

    }
  }

  return (
    <section className="flex items-center justify-center h-[calc(100vh-7.4rem)]">
      <div className=" bg-background-sec flex flex-col items-center justify-center h-[29rem] w-full mx-4 sm:px-0 sm:w-[25rem]">
        <Tab.Group>
          <Tab.List className="mb-6 flex w-full justify-around py-2">
            <Tab className="btn primary-btn px-3 py-2 rounded-full">Login</Tab>
            <Tab className="btn primary-btn px-3 py-2 rounded-full">Signup</Tab>
          </Tab.List>

          <Tab.Panels>
            {/* login panel */}
            <Tab.Panel>
              <form>
                <div className="flex flex-col gap-3 items-center">
                  <div className="input-box">
                    <input
                      type="text"
                      id="email"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      className="input sm:w-[16rem]"
                      required
                    />
                    <label id="email" className="label">
                      Email
                    </label>
                  </div>
                  <div className="input-box">
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                      className="input sm:w-[16rem]"
                      required
                    />
                    <label id="password" className="label">
                      Password
                    </label>
                  </div>
                  <Link className="w-full  mt-[-0.3rem] px-2 text-[.79rem] underline text-sec-text hover:text-text">
                    Forget Password?
                  </Link>
                  <button type="submit" className="btn primary-btn mt-4 mb-2" onClick={handleSignin}>
                    Submit
                  </button>
                  <h3 className=" text-[.8rem] text-center">
                    Don't have an account{" "}
                    <Link className="underline text-sec-text hover:text-text">
                      Sign Up
                    </Link>
                  </h3>
                </div>
              </form>
            </Tab.Panel>

            {/* signup */}
            <Signup />
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default Login;
