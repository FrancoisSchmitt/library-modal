import React from "react";
import { Modal } from "../lib";
import './index.css'
const App = () => (
    <div className="lol">
        <Modal title="The new user has been added" message="The user data is correct you have created your new user, you can find it in the section List employee" btnMessage="Close" />
    </div>
);

export default App;