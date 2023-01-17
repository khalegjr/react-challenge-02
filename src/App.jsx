import { useState } from "react";
import "./index.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");

  const handleEmail = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  return (
    <div className="wrapper">
      <div className="login-form">
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        <div className="errorMessage"></div>
        <div className="row">
          <label htmlFor={"email"}>Email</label>
          <input
            id={"email"}
            type={"email"}
            autoComplete="off"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="row">
          <label htmlFor={"password"}>Password</label>
          <input id={"password"} type={"password"} />
        </div>

        <div className="button">
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}
