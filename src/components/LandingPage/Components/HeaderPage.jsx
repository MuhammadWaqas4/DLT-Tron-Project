import React from 'react';
import {Link} from "react-router-dom";
const HeaderPage = () =>{
    return (
      <>
        <nav
          class="navbar navbar-expand-lg navbar-dark handler_bar"
          style={{ paddingTop: "15px", paddingBottom: "15px" }}
        >
          <a class="navbar-brand" href="#">
            <img src="images/waweimage/wawelogo.png" alt="logo" width="200" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about-us">
                  About Us
                </a>
              </li>
              {/* <!-- <li class="nav-item">
						<a class="nav-link" href="#token">Token Sale</a>
					</li> --> */}
              <li class="nav-item">
                <a class="nav-link" href="#roadmap">
                  Roadmap
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#team">
                  Team
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#affiliate">
                  Affiliate
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#exchange">
                  Partners
                </a>
              </li>
              <li class="nav-item">
                <Link class="btn btn-dark mr-3" to="/register">
                  Sign Up
                </Link>
              </li>
              <li class="nav-item">
                <Link class="btn btn-outline-secondary" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
}

export default HeaderPage;