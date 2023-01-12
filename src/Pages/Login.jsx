import React, { useState } from "react";

export default function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  function loginHandler(e) {
    e.preventDefault();
    setUserName(e.target.username.value);
    setPassword(e.target.password.value);
    console.log("username is:", username);
    console.log(password);
  }
  return (
    <div className="div">
      <form onSubmit={loginHandler}>
        <input type="text" name="username"/>
        <input type="text" name="password"/>
        <button type="submit">Login</button>
        <input type="button" value="Register" />
      </form>
    </div>
  )
}