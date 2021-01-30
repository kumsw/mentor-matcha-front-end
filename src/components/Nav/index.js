import React from "react";
import "./styles.css";
import Form from "../Form";
import RetrieveData from "../RetrieveData";
import Chat from "../Chat";

import LoginPage from "../LoginPage";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <Router>
        <div>
          <Link to="/">
            <button className="btnNav" href="#">
              Your Profile
            </button>
          </Link>

          <Link to="/apply">
            <button className="btnNav" href="#">
              Apply for programme
            </button>
          </Link>

          <Link to="/matchmaker">
            <button className="btnNav" href="#">
              {/* {" "} */}
              Find Your Match
            </button>
          </Link>

          <Link to="/chat">
            <button className="btnNav" href="#">
              Chat
            </button>
          </Link>
          <Switch>
            <Route path="/apply">
              <Form />
            </Route>

            <Route path="/matchmaker">
              <RetrieveData />
            </Route>

            <Route path="/chat">
              <Chat />
            </Route>

            <Route path="/">
              <LoginPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </nav>
  );
}

export default Navbar;
