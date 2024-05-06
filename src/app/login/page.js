'use client'
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
const page = () => {
    const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const configs = {
        headers: {
          "Content-type": "application/json",
        },
      };
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/login`,
          formData,
          configs
        )
        .then((response) => {
         
          const token = response.data.token;
          localStorage.setItem("token", token);
          window.location.href ="/";
          
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <> <form className="form-postion">
    <h3>Login</h3>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Email address
      </label>
      <input
        type="email"
        className="form-control"
        aria-describedby="emailHelp"
        name="email"
        value={formData.email}
        onChange={changeHandler}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">
        Password
      </label>
      <input
        type={showPassword ? "text" : "password"}
        className="form-control"
        id="exampleInputPassword1"
        name="password"
        value={formData.password}
        onChange={changeHandler}
      />
    </div>
    <div 
    className="mb-3 form-check"
    onClick={() => {
      setShowPassword(!showPassword);
    }}
    >
      <input
        type="checkbox"
        className="form-check-input"
        id="exampleCheck1"
       
      />
      <label
        className="form-check-label"
        htmlFor="exampleCheck1"
        
      >
        Show Password
      </label>
    </div>
    <button
      type="submit"
      className="btn btn-primary mb-3"
      onClick={loginHandler}
    >
      Submit
    </button>
    <span>
      No account?{" "}
      <span className="text-primary">
        <Link href={"/signup"}>Signup</Link>
      </span>
    </span>
  </form></>
  )
}

export default page