import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import './Home.css';
import videoFile from '../Icon_and_image/WelcomeVideo.mp4';
import { checkVotingTime, initToggleAside } from './home';


function Home(){
     const [btnDisabled, setBtnDisabled] = useState(true);
  const [voteMsg, setVoteMsg] = useState("");

  const loadResults = () => {
    console.log("Results loaded");
  };

  useEffect(() => {
  const timeout = setTimeout(() => {
    checkVotingTime(setVoteMsg, setBtnDisabled, loadResults);
    initToggleAside(); 
  }, 0);

  const interval = setInterval(() => {
    checkVotingTime(setVoteMsg, setBtnDisabled, loadResults);
  }, 60000);


  return () => {
    clearInterval(interval);
    clearTimeout(timeout);
  };
}, []);



    const showPanel = (panelId, event) => {
    event.preventDefault();
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => panel.style.display = 'none');
    const panel = document.getElementById(panelId);
    if (panel) panel.style.display = 'block';
  };

    return (
         <div className="container">
      {/* Video Section */}
      <section className="vid">
        <video src={videoFile} alt="Welcome to Ethiopia" autoPlay loop muted />
      </section>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <section className="main_part">
        <main>
          {/* Overview */}
          <section className="overview">
            <h1>About the election</h1> <br/> <br/>
            <p>EthioVote is a secure and user-friendly online voting platform that
                 enables eligible citizens to register, log in, and cast their 
                 votes digitally, ensuring transparency and convenience. </p><br/><br/>
            <p>
                 Users receive a unique Voter ID to access their personal dashboard, 
                 view political parties, and submit their vote, with each voter allowed only 
                 one submission. 
            </p><br/><br/>
            <p>The system also offers secure password recovery via OTP
                  and allows users to provide feedback, emphasizing both security and
                   accessibility to make the election process efficient and trustworthy.</p>
          </section>

          {/* Instruction */}
          <section className="instruction">
            <h1>Instruction</h1><br/> <br/>
            <div className="instruction-links">
              <a href="#" onClick={(e) => showPanel('panel1', e)}>How to register?</a>
              <a href="#" onClick={(e) => showPanel('panel2', e)}>How to login?</a>
              <a href="#" onClick={(e) => showPanel('panel3', e)}>Forgot Password?</a>
              <a href="#" onClick={(e) => showPanel('panel4', e)}>How to vote?</a>
            </div>

            <section id="panel1" className="panel" >
              <h2>1. How to register</h2>
              <p>
                        To register and become a voter in the EthioVote system:
                        <dl>
                            <dt><b>Fill Out the Registration Form:</b></dt>
                            <dd>Provide your personal information, including your full name,
                       email address, phone number, and any other required details.</dd>
                       <dt><b>Submit the Form:</b></dt>
                       <dd>Once submitted, your information will be securely stored in our system.</dd>
                       <dt><b>Receive Your Voter ID:</b></dt>
                       <dd>After successful registration, you will be assigned a unique Voter ID. Keep this Voter ID safe 
                           it will be used to log in and cast your vote.</dd>
                        </dl>
                    </p>
            </section>

            <section id="panel2" className="panel">
              <h2>2. How to login</h2>
              <p>
                        To access your voting dashboard:
                    <ol>
                        <li>Enter your Voter ID and Password on the login page.</li>
                        <li>Click the Login button to continue.</li>
                         <li>If your credentials are correct, you will be redirected to your dashboard.</li>
                  </ol>
                    </p>
            </section>

            <section id="panel3" className="panel">
              <h2>3. Forgot Password</h2>
              <p>
                        If you’ve forgotten your password, follow these steps to reset it:
                        <ol>
                        <li>Click on the "Forget Password" on the login page.</li>
                        <li>You will be prompted to enter your registered email address.</li>
                        <li>An OTP (One-Time Password) will be sent to your email.
                            <br/><br/>
                            <strong><mark>Important:</mark> Check your spam.</strong>
                        </li><br/>
                        <li>Enter the OTP within the given time limit.</li>
                        <li>Once verified, you will be asked to enter a new password and confirm it.</li>
                        <li>After saving the new password, you can log in using your Voter ID and the new password.</li>
                    </ol>
                    </p>
            </section>

            <section id="panel4" className="panel">
              <h2>4. How to vote</h2>
              <p>
                        After logging in, follow these steps to cast your vote:
                        <ol>
                            <li>You will see a list of political parties with their descriptions.</li>
                            <li>Select the party you support by clicking the button.</li>
                            <li>If you have any comments or suggestions, you can also leave feedback on the dashboard after voting.</li>
                        </ol><br/>
                         <strong><mark>Important:</mark>
                            Voting is currently unavailable.
                             This may be because the election has not started or has already ended.
                             For the latest updates, please check the official news or announcements.
                        </strong><br/>
                        <strong><mark>Important:</mark> You are allowed to vote only once. Once you submit your vote, you cannot change or vote again.</strong>
                    </p>
          </section>
          </section>

          {/* Voting Info and Toggle Button */}

          <button id="toggleBtn" disabled={btnDisabled}>❮</button>
          <section className="info">
            <aside id="result">
              <h1 id="res">Result</h1>
              <p id="voteMsg">{voteMsg}</p>
            </aside>
          </section>
        </main>
      </section>
       
      {/* Footer */}
      <Footer />
    </div>
    );
}
export default Home;