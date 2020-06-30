import React from "react";
import Button from "react-bootstrap/Button";

export default function JobAlert() {
  const lists = () => {
    return (
      <li className="Joblist">
        <p>Job Description</p>
        <span>
          <Button variant="success" className="btn btn-success">
            Apply Job
          </Button>{" "}
        </span>
      </li>
    );
  };
  return (
    <div>
      <ul className="ul">
        {lists()}
        {lists()}
      </ul>
    </div>
  );
}
