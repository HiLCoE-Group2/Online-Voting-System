import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import ImageFile from '../Icon_and_image/Ethiopia (Addis Ababa) (2).jpg';

function Login() {
  return (
    <main className="containers">
      {/* Image Section */}
      <section className="image">
        <img src={ImageFile} alt="Ethiopian flag" />
      </section>

      {/* Form Section */}
      <section className="formss">
        <form id="loginForm">
          <fieldset className="fieldss" >
            <legend>Login</legend>

            <div className="div11">
              <label htmlFor="voter_id">Voter ID</label>
              <input type="text" id="voter_id" name="voter_id" className="voter_id"  />
            </div>

            <div className="div12">
              <label htmlFor="password">Password</label>
              <input type="passwordd" id="passwordd" name="passwordd" className="passwordd" />
            </div>

            <div className="div13">
              <Link to="/Forget_password" className="link">Forget password ?</Link>
            </div>

            <div className="div14">
              <input type="submit" className="btns" value="Login" />
            </div>
          </fieldset>
        </form>
      </section>
    </main>
  );
}

export default Login;