'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { Router } from "next/router";
const page = () => {
    const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      const configs = {
        headers: {
          "Content-type": "application/json",
        },
      };
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/signup`,
          formData,
          configs
        )
        .then((response) => {
          
          Router.push("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <form className="form-postion">
        <h3>Signup</h3>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={formData.email}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type={!showPassword ? "password" : "text"}
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
          onClick={signupHandler}
        >
          Submit
        </button>
        <span>
          Already have an account?{" "}
          <span className="text-primary">
            <Link href={"/login"}>Login</Link>
          </span>{" "}
        </span>
      </form>
    </>
  )
}

export default page