import React from "react";
import Button from "react-bootstrap/Button";

export default function JobAlert() {
  const lists = () => {
    return (
      <li className="Joblist">
        <h3>Job Description</h3>
        <ul className = "Tagul" >
          <li className = 'TagList' >Job-Tag</li>
          <li className = 'TagList' >Job-Tag</li>
          <li className = 'TagList' >Job-Tag</li>
          <li className = 'TagList' >Job-Tag</li>
        </ul>
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
