import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserStatusContext } from "../contexts/UserStatusContext";

const Login = () => {
  const { setUser } = useContext(UserStatusContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setUser({ name: name, email: email });
    navigate("/dashboard");
  };

  return (
    <section className="flex items-center justify-center h-[calc(100vh-7.4rem)]">
      <div className=" bg-background-sec flex flex-col items-center justify-center h-[29rem] w-full mx-4 sm:px-0 sm:w-[25rem]">
        <div className="mb-6 flex w-full justify-around py-2">
          <NavLink className="btn primary-btn px-3 py-2 rounded-full">
            Login
          </NavLink>
          <NavLink className="btn primary-btn px-3 py-2 rounded-full">
            Signup
          </NavLink>
        </div>
        {/* login form */}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 items-center">
            <div className="input-box">
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input sm:w-[16rem]"
                required
              />
              <label id="name" className="label">
                Name
              </label>
            </div>
            <div className="input-box">
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input sm:w-[16rem]"
                required
              />
              <label id="email" className="label">
                Email
              </label>
            </div>
            <Link className="w-full  mt-[-0.3rem] px-2 text-[.79rem] underline text-sec-text hover:text-text">
              Forget Password?
            </Link>
            <button type="submit" className="btn primary-btn mt-4 mb-2">
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

        {/* signup form */}
        {/* <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center gap-3 ">
            <div className="input-box">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input sm:w-[16rem]"
                required
              />
              <label id="name" className="label">
                Email
              </label>
            </div>
            <div className="input-box">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input sm:w-[16rem]"
                required
              />
              <label id="username" className="label">
                Username
              </label>
            </div>
            <div className="input-box">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input sm:w-[16rem]"
                required
              />
              <label id="password" className="label">
                Password
              </label>
            </div>
            <div className="input-box">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input sm:w-[16rem]"
                required
              />
              <label id="password" className="label">
                Confirm Password
              </label>
            </div>

            <div className=" flex items-center justify-center gap-2 text-[.85rem] mt-[-0.3rem] mb-2">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <label>
                I accept the <Link className="underline">Terms and Conditions</Link>
              </label>
            </div>

            <button type="submit" className="btn primary-btn">
              Sign Up
            </button>
          </div>
        </form> */}
      </div>
    </section>
  );
};

export default Login;
