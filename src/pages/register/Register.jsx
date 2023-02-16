import React from "react";
// import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  return (
    <>
      <div className="register">
        <div className="cardr">
          <div className="leftr">
            <h1>Social Stack</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil a
              impedit eius dolore dolorem sed neque corrupti eligendi sunt eum!
              Magnam, culpa veniam.
            </p>
            <span>
            Do you have an account?
            </span>
            {/* <Link to='/login'> */}
              <button>Login</button>
            {/* </Link> */}
          </div>

          <div className="rightr">
            <h1>Register</h1>
            <form>
              <input type="text" placeholder="Name" />
               <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
             <button>
              Register
             </button>
            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
