import React from "react";
import { Spinner } from "react-bootstrap";

export default function Education() {
  return (
    <section className="Education">
      <h2>
        <Spinner animation="grow" variant="info" />
        <p>Education Page</p>
        Work in Progress....
        <Spinner animation="border" variant="success" />
      </h2>
    </section>
  );
}
