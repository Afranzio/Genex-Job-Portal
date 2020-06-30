import React from "react";
import { Button } from "react-bootstrap";
//components
import JobAlert from "./jobnote";
// import NavBar from './navbar';
//StyleSheet
import "./css/dashboard.css";

export default function DashBoard() {
  return (
    <div>
      {/* <NavBar /> */}
      <input className="SearchInput" type="text" ref={a => (this._Input = a)} />
      <Button className="Search-btn" variant="primary">
        Search
      </Button>{" "}
      <JobAlert />
    </div>
  );
}
