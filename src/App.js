import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "sanitize.css";

import "./app.css";

import Sentiment from "./001_sentiment/Sentiment";

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
                    </ul>
                  </nav>
                </div>
              )}
            />
            <Route path="/001" component={Sentiment} />

            <Route component={() => <div>404 Not found</div>} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
