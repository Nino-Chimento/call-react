import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const sendRequest = (): void => {
    axios.get(`http://localhost/farc/public/farc_users`).then((res) => {
      setUser(res.data);
    });
  };

  console.log(password);

  return (
    <>
      <div>
        <div className="form-group">
          <label>Email address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button onClick={sendRequest} className="btn btn-primary">
          Submit
        </button>
      </div>
    </>
  );
}

export default App;
