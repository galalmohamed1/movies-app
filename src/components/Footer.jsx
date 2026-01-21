import React from "react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      <footer className="mt-5  text-light py-4">
        <div className="container ">
          <div className="row ">
            <div className="col-12 text-center text-md-start mb-3 mb-md-0 align-items-center justify-content-center ">
              <div className="text-center mb-3">
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
              </div>
              <div className="w-50 mx-auto">
                <div className="info">
                  <p className="mb-0">
                    A fun and personal project created by{" "}
                    <Link
                      className="text-primary external-links"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Galal Mohamed
                    </Link>
                    . Source code available on{" "}
                    <Link
                      to="https://github.com/galalmohamed1"
                      className="text-primary external-links"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </Link>
                    . Open for pull request. Clone and use personally. It's up
                    to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
