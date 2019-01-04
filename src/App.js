import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "sanitize.css";

import "./app.css";

import Sentiment from "./001_sentiment/Sentiment";
import OrbitalSkies from "./002_orbital-skies/OrbitalSkies";
import BlindBox from "./003_blind-box/BlindBox";
import Calculatey from "./004_calculatey/Calculatey";

export class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Fragment>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <div className="menu">
                  <h1 className="menu-title">UI Challenges</h1>

                  <nav>
                    <ul className="menu-list">
                      <li className="menu-list__item">
                        <Link to="/001">001. Sentiment (Sign Up)</Link>

                        <span className="menu-list__item-date">
                          December 26, 2018
                        </span>
                      </li>

                      <li className="menu-list__item">
                        <Link to="/002">
                          002. Orbital Skies (Credit Card Checkout)
                        </Link>

                        <span className="menu-list__item-date">
                          January 3, 2019
                        </span>
                      </li>

                      <li className="menu-list__item">
                        <Link to="/003">003. Blind Box (Landing Page)</Link>

                        <span className="menu-list__item-date">
                          January 4, 2019
                        </span>
                      </li>

                      <li className="menu-list__item">
                        <Link to="/004">004. Calculatey (Calculator)</Link>

                        <span className="menu-list__item-date">
                          January 4, 2019
                        </span>
                      </li>
                    </ul>
                  </nav>
                </div>
              )}
            />

            <Route path="/001" component={Sentiment} />

            <Route path="/002" component={OrbitalSkies} />

            <Route path="/003" component={BlindBox} />

            <Route path="/004" component={Calculatey} />

            <Route component={() => <div>404 Not found</div>} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
