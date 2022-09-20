import React from "react";
import { Modal } from "../lib";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <Modal title="Your modal title" message="Your message from the modal" btnMessage="Submit" />
  </div>
);

export default App;
