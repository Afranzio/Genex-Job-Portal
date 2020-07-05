import React from "react";

//import components needed
import ButtonAppBar from './components/DashBoard/NavBar';
import DashBoard from './components/DashBoard/dashboard'
import Footer from './components/DashBoard/footer';
import SignIn from './components/signin';
import SignUp from './components/signup';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import stylesheet
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
      <Router> 
        <Switch>
          <Route exact path = '/' component = {DashBoard} />
          <Route exact path = '/signin' component = {SignIn} />
          <Route exact path = '/signup' component = {SignUp} />
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}
