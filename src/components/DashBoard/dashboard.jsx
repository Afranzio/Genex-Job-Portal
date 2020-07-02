import React from "react";
import { Button } from "react-bootstrap";
//components
import JobAlert from "./jobnote";
import Cards from "./jobsugg";
// import NavBar from './navbar';
//StyleSheet
import "./css/dashboard.css";

export default function DashBoard() {
  return (
    <div className = "container">
      <div className = "home">
        <input
          className="SearchInput"
          type="text"
          ref={a => (this._Input = a)}
        />
        <Button className="Search-btn" variant="primary">
          Search
        </Button>{" "}
      </div>
      <div className = "flex">
        <div>
          <JobAlert />
        </div>
        <>
          <Cards />
        </>
      </div>
    </div>
  );
}
