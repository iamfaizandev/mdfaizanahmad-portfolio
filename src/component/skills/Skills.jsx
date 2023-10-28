import React from "react";
import { Spinner } from "react-bootstrap";

export default function Skills() {
  return (
    <section className="Skills">
      <h2>
        <Spinner animation="grow" variant="info" />
        <p>Skill Page</p>
        Work in Progress....
        <Spinner animation="border" variant="success" />
      </h2>
    </section>
  );
}
