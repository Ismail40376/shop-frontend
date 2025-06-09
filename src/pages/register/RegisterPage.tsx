import { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Register.module.scss";

const RegisterPage = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [inputType, setInputType] = useState("password");

  const inputTypeHandler = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  const submitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(fullname, email, password, confirmPassword);
  };
  return (
    <div>
      <p className={s.title}>Sign up</p>
      <p className={s.text}>
        Registration takes less than a minute but gives you full control over your orders.
      </p>
      <form onSubmit={submitFormHandler}>
        <div>
          <label className={s.label}>Full Name</label>
          <input
            className={s.input}
            type="text"
            value={fullname}
            onChange={e => setFullname(e.target.value)}
          />
        </div>
        <div>
          <label className={s.label}>Email</label>
          <input
            className={s.input}
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div style={{ position: "relative" }}>
          <button className={s.eye} onClick={inputTypeHandler}>
            <img src="closedEye.svg" alt="closedEye" width="16px"></img>
            <img src="openedEye.svg" alt="openedEye"></img>
          </button>
        </div>

        <div>
          <label className={s.label}>Password</label>
          <input
            className={s.input}
            type={inputType}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label className={s.label}>Confirm Password</label>
          <input
            className={s.input}
            type={inputType}
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>

        <button className={s.saveButton} type="submit">
          Sign up
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <p>Already have an account?</p>
          <NavLink to="/login">Sign in</NavLink>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
