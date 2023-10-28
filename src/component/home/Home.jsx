import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./home.css";

export default function HomePage() {
  return (
    <header>
      <div className="home">
        <h2>
          <Spinner animation="grow" variant="info" />
          <p>Home Page</p>
          Work in Progress....
          <Spinner animation="border" variant="success" />
        </h2>
      </div>
    </header>
  );
}
