import React, { useEffect, useState } from "react";

import Link from "next/link";
const Navbar = () => {
  const [token, setToken] = useState(null);
  
  useEffect(() => {
   
      let token = localStorage.getItem("token");
      setToken(token);
    
  }, [setToken]);

 

  const logoutHandle = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.removeItem("token");
      setToken(null);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-white position-fixed z-3 w-100 top-0 bg-white navbar-shadow">
        <div className="container-fluid bg-white">
          <Link className="navbar-brand nav-logo-div" href="/">
            <img src="/logo.png" className="nav-logo" alt="" srcSet="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 bg-white ">
              <li className="nav-item m-auto m-lg-0 nav-link active">
                <Link aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item m-auto m-lg-0 nav-link">
                <Link href="#">Electronics</Link>
              </li>
              <li className="nav-item m-auto m-lg-0 nav-link">
                <Link href="#">Pharma</Link>
              </li>
              <li className="nav-item m-auto m-lg-0 nav-link">
                <Link href="#">Fashion</Link>
              </li>
            </ul>
            <div className="d-flex flex-column flex-lg-row flex-md-column flex-lg-row btn-group-div">
              {token ? 
                <button
                  className="btn btn-primary  mx-lg-2 nav-btn my-1 my-lg-0"
                  onClick={logoutHandle}
                  type="button"
                >
                  <Link href={"/login"} className="text-white">
                    Logout
                  </Link>
                </button>
               : 
                <>
                  <button
                    className="btn btn-primary  mx-lg-2 nav-btn my-1 my-lg-0"
                    type="button"
                  >
                    <Link href={"/signup"} className="text-white">
                      Signup
                    </Link>
                  </button>
                  <button
                    className="bgCol text-white  mx-lg-1 nav-btn my-1 my-lg-0"
                    type="button"
                  >
                    <Link href={"/login"}>Login</Link>
                  </button>
                </>
              }
              <button className="btn btn-dark mx-lg-2  nav-btn my-1 my-lg-0  -mt-2">
                <Link href={"/cart"}>
                  <i className="bi bi-bag-fill "> </i> <span className="d-lg-none">Cart</span>
                </Link>
              </button>
            </div>
          
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
