import React from 'react';
import './Registration.css';
import Image from '../Icon_and_image/Ethiopia (Addis Ababa) (2).jpg';

function Registration() {
    return(
      
         <div className="Reg_container">
    <section className="image">
      <img src={Image} alt="Ethiopian flag" className='Image'/>
    </section>

    <section className="formssss">
      <form id="registrationForm">
        <fieldset className='fieldsets'>
          <legend className='legends'>Registration</legend>

          <div className="div10">
            <label htmlFor="first_name" className="lab1">First Name</label>
            <input type="text"  id="first_name" name="first_name" className="first_name" size="25" required/>
          </div>

          <div className="div20" id="mname">
             <label htmlFor="middle_name" className="lab11">Middle Name</label>
            <input type="text"   id="middle_name" name="middle_name" className="middle_name" size="22" required/>
            
          </div>

          <div className="div33">
            <label htmlFor="phone" className='Phone'>Phone Number</label>
            <input type="tel"  id="phone" name="phone" className="phone"/>
          </div>

          <div className="div44" id='em'>
             <label htmlFor="email" className='Email'>Email</label>
             <input type="email" className="email" id="email" size="30" required/>
          </div>
             
          <div className="div50" id="rad">
            <label htmlFor="gender" className='gender'id='GEN'> Gender</label>
            <input type="radio" className="gender" name="gender" id="gender"/>
            <label htmlFor="male" className='gender'> Male</label>
            <input type="radio" className="gender" name="gender" id="gender"/>
            <label htmlFor="female" className='gender'>Female</label>
          </div>
      
           <div className="div60">
             <label htmlFor="fin" className='FIN'>FIN</label>
             <input type="text" className="fin" name="fin" id="fin" required/>
          </div>

          <div className="div70">
            <label htmlFor="password" className='Password'>Password</label>
            <input type="password" id="password" name="password" className="password"required/>
          </div>

         <div className="div80">
            <label htmlFor="confirm_password" className='conf_Password'>Confirm Password</label>
            <input type="password" id="confirm_password" name="confirm_password" className="confirm_password"required/>
          </div>
          
          <div className="div90">
               <input type="submit" className="btn" value="Submit"/>
          </div>
        </fieldset>
      </form>
      </section>
       </div>
    );
}
export default Registration;