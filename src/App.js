import React from "react";

//import components needed
import DashBoard from './components/DashBoard/dashboard'
// import Demo from './components/DashBoard/navbar';

//import stylesheet
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <Demo/> */}
      <DashBoard />
    </div>
  );
}
