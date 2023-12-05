import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <section>
      <form onSubmit={handleSubmit}>
        <h5>login</h5>
        <div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default Login;
