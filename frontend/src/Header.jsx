import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../action/userAction";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { logout } from "./store/action/userAction";

const Header = ( ) => {
  const history = useHistory();
  // console.log(histoy);

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
    window.location.reload();
  };

  



  let user = useSelector((state) => state.userLogin);
   

  const { userInfo } = user;
  console.log(userInfo);
   
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-dark "
        style={{ background: "#fff", padding: "15px 0" }}
      >
        <div class="container-fluid ">
          Navbar
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  ms-auto  mb-2 mb-lg-0 me-lg-5  ">
             
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {userInfo ? userInfo?.name : "Login"}
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                   

                  {userInfo && (
                    <li
                      className=" dropdown-item"
                      style={{ cursor: "pointer" }}
                      onClick={logoutHandler}
                    >
                      Logout
                    </li>
                  )}
                  {!userInfo && (
                    <li>
                      <Link className="dropdown-item" as={Link} to="/login">
                        Login
                      </Link>
                    </li>
                  )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
