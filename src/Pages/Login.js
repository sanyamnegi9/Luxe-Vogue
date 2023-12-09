import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserStatusContext } from "../contexts/UserStatusContext";

const Login = () => {
  const { setUser } = useContext(UserStatusContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setUser({ name: name, email: email });
    navigate("/dashboard");
  };

  return (
    <section className="flex items-center justify-center h-[calc(100vh-7.4rem)]">
      <form
        onSubmit={handleSubmit}
        className=" bg-background-sec flex flex-col items-center justify-center h-[20rem] w-full px-2 sm:px-0 sm:w-[25rem]"
      >
        <h3 className=" text-[1.3rem] mb-4">login</h3>
        <div className="flex flex-col gap-6 items-center">
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
          <button type="submit" className="btn primary-btn">
            Submit
          </button>
          <h3 className=" text-[.8rem] text-center">
            Don't have an account <Link to="/signup" className="underline text-sec-text hover:text-text">Sign Up</Link>
          </h3>
        </div>
      </form>
    </section>
  );
};

export default Login;
