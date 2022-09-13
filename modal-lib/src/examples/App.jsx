import React from "react";
import { Modal } from "../lib";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <Modal title="Email Address" message="name@example.com" btnMessage="Submit" />
  </div>
);

export default App;
