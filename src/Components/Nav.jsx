/* eslint-disable react/prop-types */
import "../Pages/FirstPage/FirstPage.css";
import { useEffect } from "react";
import { ProfileMenu } from "./ProfileMenu";
import { getUser } from "../utils/UserInformation";

export function Nav() {
  // if user is not in the home page then nav bar will change the link from sign in to home
  const { name, email } = getUser();
  const path = window.location.pathname;
  useEffect(() => {
    console.log(name);
    console.log(email);
    console.log(path);
    if (
      path !== "/" &&
      (name === undefined ||
        email === undefined ||
        (name === "" && email === ""))
    ) {
      document.querySelector(".signin-link").style.display = "block";
      document.querySelector(".signin-link").href = "/";
      document.querySelector(".signin-link").innerHTML = "Home";
    } else if (
      path === "/" &&
      ((name === undefined && email === undefined) ||
        (name === "" && email === ""))
    ) {
      document.querySelector(".signin-link").style.display = "block";
      document.querySelector(".signin-link").href = "/signin";
      document.querySelector(".signin-link").innerHTML = "Sign In";
    } else if (name !== undefined && email !== undefined) {
      document.querySelector(".signin-link").style.display = "none";
    }
  }, [name, email]);

  return (
    <div className="NavBar">
      <div className="logo">
        <img className="navbar-logo" src="../../../logo2.png" alt="logo" />
        <p className="navbar-tag">Travel Budget</p>
      </div>
      <div className="nav-links">
        <a className="signin-link" href="/signin">
          Sign In
        </a>
        {name !== "" && <ProfileMenu />}
      </div>
    </div>
  );
}
