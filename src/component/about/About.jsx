import React from "react";
import { Spinner } from "react-bootstrap";
export default function About() {
  return (
    <section className="About">
      <h2>
        <Spinner animation="grow" variant="info" />
        <p>About Page</p>
        Work in Progress....
        <Spinner animation="border" variant="success" />
      </h2>
    </section>
  );
}
