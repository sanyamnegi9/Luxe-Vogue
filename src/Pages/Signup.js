import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDb } from "../firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { UserStatusContext } from "../contexts/UserStatusContext";
import { Tab } from "@headlessui/react";
import { toast } from "react-toastify";

const Signup = () => {

  const { setUser } = useContext(UserStatusContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


    const handleSignup = async () => {
      setLoading(true);
      if (name === "" || email === "" || password === "") {
        return toast.error("all field must be filled");
      }
      try {
        const users = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        var user = {
          name: name,
          uid: users.user.uid,
          email: users.user.email,
          time: Timestamp.now(),
        };
        const userRef = collection(fireDb, "user");
        await addDoc(userRef, user);
        setName("");
        setEmail("");
        setPassword("");
        toast.success("signup success");
        setLoading(false);
      } catch (err) {
        toast.error("Signup Failed");
        setLoading(false);
      }
    };

  return (
    <Tab.Panel>
      <form>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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

          <div className=" flex items-center justify-center gap-2 text-[.85rem] mt-[-0.3rem] mb-2">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            />
            <label>
              I accept the
              <Link className="underline">Terms and Conditions</Link>
            </label>
          </div>

          <button type="submit" className="btn primary-btn" onClick={handleSignup}>
            Sign Up
          </button>
        </div>
      </form>
    </Tab.Panel>
  );
};

export default Signup;
