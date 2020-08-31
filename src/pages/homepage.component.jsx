import React from "react";
import "./homepage.styles.scss";
import Directory from "../componnents/directory/directory.component";
const HomePage = () => (
  <div className="homepage">
    <h1>Welcome to my Homepage</h1>
    <Directory />
  </div>
);

export default HomePage;
