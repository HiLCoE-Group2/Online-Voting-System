import React from 'react';
import './Feedback.css';
import Navigation from '../Navigation/Navigation';


function Feedback() { 
  const handleSubmit = (e) => {
    e.preventDefault();
    const feedback = e.target.feedback.value;
    console.log("Feedback submitted:", feedback);
    alert("Thank you for your feedback!");
  };

  return (
     
     <div>
    <Navigation />
   
      
      <div className="cont">
        
        <form id="feedbacks" className="feedback" onSubmit={handleSubmit}>
          <label htmlFor="feedback">We appreciate your feedback.</label><br/><br/>
          <p id="par">
            We are always looking for ways to improve our website and services. 
            Please share your thoughts, suggestions, or any issues you encountered while using our platform.
            Thank you for helping us enhance your experience!
          </p><br/>
          <textarea
            name="feedback"
            id="feedback"
            cols="50"
            rows="10"
            placeholder="Help us improve"
          ></textarea><br/>
          <input type="submit" id="submit" />
        </form>
      </div>
     </div>
  );
}

export default Feedback;
