import React from "react";
import { Link } from "react-router";
import favIcon from "../assets/fav.svg";
import { useSelector } from "react-redux";
import "/src/App";
export default function Header() {
  const totalvalue = useSelector((state) => state.wishlist.totalvalue); 
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top blur">
        <div className="container-fluid text-nav navv">
          <Link to="/" className="router-link-active router-link-exact-active me-2 ms-lg-5" aria-current="page">
            <svg width="40" height="46" viewBox="0 0 1000 1000">
                <path
                  className="color-secondary"
                  fill="#1EA5FC"
                  d="M231.4,394.07L669.5,119.2C752.42,67.18,860,126.99,860,225.13v549.74c0,98.13-107.58,157.95-190.5,105.93 L231.4,605.93C153.41,556.99,153.41,443.01,231.4,394.07z"
                />
                <path
                  className="color-primary"
                  fill="#5A4AF4"
                  d="M768.6,394.07L330.5,119.2C247.58,67.18,140,126.99,140,225.13v549.74c0,98.13,107.58,157.95,190.5,105.93 l438.1-274.87C846.59,556.99,846.59,443.01,768.6,394.07z"
                />
            </svg>
          </Link>
            Movies
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <Link className="nav-link active text-nav fw-bold" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-nav fw-bold" to="/movie-app">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-nav fw-bold" to="/tv-show-app">
                  TV Shows
                </Link>
              </li>
              <li className="nav-item position-relative">
                <Link className="nav-link text-nav" to="/favorite-app">
                  <img src={favIcon} alt="Icon" width="24" height="24"/>
                  <span className="position-absolute top-5 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalvalue}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
