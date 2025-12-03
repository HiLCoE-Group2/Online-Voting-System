import React, { useEffect, useRef } from 'react';
import { OTPHandler} from './shift';
import './Forget_password.css';

function Forget_Password() {
   const otpHandlerRef = useRef(null);

  useEffect(() => {
    otpHandlerRef.current = new OTPHandler();
    otpHandlerRef.current.initializeOTPInputs();

    return () => {
      if (otpHandlerRef.current) {
        otpHandlerRef.current.cleanup();
      }
    };
  }, []);
 const changePanel = (panelId) => {
    if (otpHandlerRef.current) {
      otpHandlerRef.current.showPanel(panelId, panelId === 'panel02', 60);
    }
  };
   return(
    <div className="containnn">
  <form id="panel01" className="panell activee">
    <fieldset className='fieldsett'>
      <h1 className='h'>Forget password</h1>
      <label htmlFor="email" id="emails" className='lab'>Email</label>
      <input type="email" name="email" id="emaill" placeholder="abebe@gmail.com" required />
      <br /><br />
      <button type="button" id="emailForm" className="btnn" onClick={() => changePanel('panel02')}>Send</button>
    </fieldset>
  </form>
  <br />
  
  <form id="panel02" className="panell">
    <fieldset className='fieldsett'>
      <h2 className='h'>Enter OTP</h2>
      <p className='p'> Please enter the one-time password (OTP) that is sent to your email.</p>
      <div id="otp-box">
        <input type="text" maxLength="1" className="otp-input" name="otp1" required />
        <input type="text" maxLength="1" className="otp-input" name="otp2" required />
        <input type="text" maxLength="1" className="otp-input" name="otp3" required />
        <input type="text" maxLength="1" className="otp-input" name="otp4" required />
      </div>
    
      <div className="otp-container">
        <p className='p'>Time: <span id="timer">60</span></p>
        <div id="resend_otp">
          <a href="#" id="sendOTPLink">Resend OTP ?</a>
        </div>
      </div>
      <br />
      <button type="submit" id="otpForm" className="btnn" onClick={(e) => { e.preventDefault(); changePanel('panel03'); }}>Verify OTP</button>
    </fieldset>
  </form>
  <br />
  
  <form id="panel03" className="panell">
    <fieldset className='fieldsett'>
      <h2 className='h'>Reset Password</h2>
      <div className="reset">
        <label htmlFor="passwordds" className='labb'>Password</label>
        <input type="password" id="passwordds" name="password" className="passwordds" required />
      </div>
      <div className="reset">
        <label htmlFor="confirm_password" className='labb'>Confirm Password</label>
        <input type="password" id="confirm_passwordds" name="password" required />
      </div>
      <div className="reset">
        <input type="button" className="btnn" id="updateForm" value="Save" />
      </div>
    </fieldset>
  </form>
 </div>
   );
  }
  export default Forget_Password;