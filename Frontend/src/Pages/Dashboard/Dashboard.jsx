import React from 'react';
import './Dashboard.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import am from '../Icon_and_image/am.jpg';
import DW from '../Icon_and_image/DW.jpg';
import kb from '../Icon_and_image/kb.jpg';
import sl from '../Icon_and_image/sl.jpg';

function Dashboard(){
    return(
         <div class="Das_container">
               <Navigation />
    
            <form className="can1 can">
                <h1> Unity Progress Party</h1>
            <img src={am} alt="Amira Bekele" className="imagge"/>
            <h2>Amira Bekele</h2>
            <p>An economist with 15 years of experience in public finance reform, 
                known for fighting corruption and promoting responsible spending. <br/> 
               <b>If Elected:</b>
                <ul>
                    <li>Establish a strong, independent anti-corruption commission.</li>
                    <li>Increase education funding by 20% in five years.</li>
                    <li>Launch small-business grants to create local jobs.</li>
                </ul> 
                <strong>Slogan: “Clean Hands, Bright Future.”</strong>
            </p>
            <button type="submit" name="id" value="1" className="voteBtn">Vote</button>
            </form>

            <form  className="can2 can">
                <h1>Green Future Movement</h1>
            <img src={DW} alt="Dawit Alemu" className="imagge"/>
            <h2>Dawit Alemu</h2>
            <p>
              An environmental activist and renewable energy engineer 
               with nationwide solar project experience. <br/> 
               <b>If Elected:</b>
               <ul>
                <li>Shift 50% of electricity to renewable energy within <br/> 10 years.</li>
                <li>Enforce strict pollution controls for industries.</li>
                <li>Create green jobs through eco-friendly industries.</li>
               </ul> 
               <strong>Slogan: “Powering Tomorrow, Protecting Today.”</strong>
            </p>
            <button type="submit" name="id" value="2" className="voteBtn">Vote</button>
            </form>
        
            <form className="can3 can">
                  <h1>People’s Freedom Alliance</h1>
            <img src={sl} alt="Selam Tadesse" className="imagge"/>
            <h2>Selam Tadesse</h2>
            <p>
                 A human rights lawyer passionate about transparency,
                  justice reform, and citizen participation. <br/> 
                  <b>If Elected:</b>
                  <ul>
                    <li>Strengthen press freedom and government transparency.</li>
                    <li>Reform courts to ensure fair, timely trials.</li>
                    <li>Establish public forums for policymaking input.</li>
                  </ul> 
                  <strong>Slogan: “Your Voice, Your Government.”</strong>
            </p>
            <button  type="submit" name="id" value="3" className="voteBtn">Vote</button>
            </form>
            <form className="can4 can">
                <h1>Innovation & Technology Party</h1>
            <img src={kb} alt="Kebede Meles" className="imagge"/>
            <h2>Kebede Meles</h2>
            <p>
             A tech entrepreneur who supports digital skills and technology 
             driven economic growth. <br/> 
             <b>If Elected:</b>
             <ul>
                <li>Provide universal internet access, including rural areas.</li>
                <li>Introduce coding and digital literacy in schools.</li>
                <li>Support tech innovations in healthcare, education, and transport.</li>
             </ul> 
             <strong>Slogan: “Innovation for All, Progress for Everyone.”</strong>
            </p>
            <button type="submit" name="id" value="4" className="voteBtn" >Vote</button>
            </form>
        <br/><br/>

        <Footer/>

     </div>
    );
}
export default Dashboard;