import React from "react";
import { render } from "react-dom";
import CenteredTree from "./CenteredTree";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <CenteredTree />
  </div>
);

render(<App />, document.getElementById("root"));
