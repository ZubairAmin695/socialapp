import React from "react";
import "./login.css";

const Login = () => {
  
  return (
    <>
      <div className="login">
        <div className="card">
          <div className="left">
            <h1>Hello World,</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
              dolorum dolorem, voluptatum ea molestiae ducimus soluta optio
              temporibus repellendus, praesentium pariatur similique
              reprehenderit id.
            </p>

            <span>Don't you have an account?</span>
            <button>Register</button>
          </div>
          <div className="right">
            <h1>Login</h1>
            <form action="">
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
