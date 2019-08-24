import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BeerApp from "./beerApp";
import Favorite from "./favorite";

const AppRouter = () => {
  return (
    <Router>
      <nav>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorite"> Favorite </Link>
          </li>
        </ul>
      </nav>
      <Route path="/" exact component={BeerApp} />
      <Route path="/favorite" component={Favorite} />
    </Router>
  );
};
export default AppRouter;
