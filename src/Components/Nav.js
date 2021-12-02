import React from "react";
import "../index.css";
import logout from "./Logout";

// import Link from "./Link";
import { Link } from "react-router-dom";
// import ListItem from "./ListItem";

function LoggedInNav(props) {
	console.log(props);
  return (
    <nav className="Navigation">
      <div>
        <div>
          <a href="/">
            <img
              class="center"
              src="./img/atlasHealthLogo.webp"
              alt="Atlas logo"
            />
          </a>
        </div>

        <div class="divcenter">
          <ul>
            <li className="listItem">
              <a
                href="http://instagram.com/atlas.health.and.wellness"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  class="center instagramlogo"
                  src="./img/instagram-black-on-white.webp"
                  alt="Instagram logo"
                ></img>
              </a>
            </li>
            <li className="listItem" id="logout">
              <Link to="logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function AdminLoggedIn(props) {
  return (
    <nav className="Navigation">
      <div>
        <div>
          <a href="/">
            <img
              class="center"
              src="./img/atlasHealthLogo.webp"
              alt="Atlas logo"
            />
          </a>
        </div>

        <div class="divcenter">
          <ul>
            <li className="listItem">
              <a
                href="http://instagram.com/atlas.health.and.wellness"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  class="center instagramlogo"
                  src="./img/instagram-black-on-white.webp"
                  alt="Instagram logo"
                ></img>
              </a>
            </li>
            <li className="listItem">
              <Link to="create">Create</Link>
            </li>
            <li className="listItem" id="logout">
              <Link to="logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function LoggedOutNav(props) {
  return (
    <nav className="Navigation">
      <div>
        <div>
          <a href="/">
            <img
              class="center"
              src="./img/atlasHealthLogo.webp"
              alt="Atlas logo"
            />
          </a>
        </div>

        <div class="divcenter">
          <ul>
            <li className="listItem">
              <a
                href="http://instagram.com/atlas.health.and.wellness"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  class="center instagramlogo"
                  src="./img/instagram-black-on-white.webp"
                  alt="Instagram logo"
                ></img>
              </a>
            </li>
            <li className="listItem" id="register">
              <Link to="Register">Register</Link>
            </li>
            <li className="listItem" id="login">
              <Link to="Login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Nav(props) {
  const loggedIn = props.loggedin;
  const admin = props.admin;
  
  // TODO fetch first 11 posts to get the links to the page
  if (loggedIn && admin) {
    return <AdminLoggedIn />;
  } else if (loggedIn) {
    return <LoggedInNav />;
  }else {
    return <LoggedOutNav />;
  }
}

export default Nav;
