import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import s from "./Register.module.scss";
import type { AppDispatch } from "../../../store/index";
import { useDispatch } from "react-redux";
import { loginUserAsync } from "../../../store/action/UsersAction";

const RegisterPage = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [inputType, setInputType] = useState("password");

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const submitFormHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      if (fullname && email && password) {
        const newUser = {
          username: fullname,
          email,
          password,
        };

        const response = await axios.post("http://localhost:8000/users", newUser);
        dispatch(loginUserAsync(newUser));
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/");
      } else {
        alert("Please fill in all fields");
      }
    } catch (error) {
      alert("Something went wrong. Please try again later.");
      console.error(error);
    }
  };

  const inputTypeHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
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
            {inputType === "password" ? (
              <img src="/closedEye.svg" alt="closedEye" style={{ width: "16px", height: "16px" }} />
            ) : (
              <img src="/openedEye.svg" alt="openedEye" style={{ width: "16px", height: "16px" }} />
            )}
          </button>
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
          <NavLink to="/login" className={s.link}>
            Sign in
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
