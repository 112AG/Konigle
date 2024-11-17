import React from 'react'
import './HelpQuestion.css'

function HelpQuestion() {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className='hquestion-main top-padding'>
      <div className="hquestion-container">
        <h1 className='hquestion-heading'>How can we help you?</h1>
        <div className="hquestion-input-container">
          <input type="text" className='hquestion-input' placeholder='Search' /> 
          <i className="ri-search-line hquestion-search-icon"></i>
        </div>
        </div>
        <div className="hquestion-form page-pad">
          <p className='hquestion-notfound'>No help pages found</p>
    <div className="form-container">
        <h1 className='hquestion-headingTwo'>Ask for help</h1>
        <form id="helpForm" onSubmit={handleSubmit}>
        <div className="form-group">
                <label htmlFor="name" className="required">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Your full name" 
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="email" className="required" >Email</label>
                <input 
                    className='hquestion-email'
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Your email address on you can be reached" 
                    required
                />
            </div>

            <div className="form-group">
              <label htmlFor="category" className="required">Category</label>
              <select className='hquestion-select' id="category" name="category" required defaultValue="">
                <option value="" disabled>Select a category</option>
                <option value="technical">Technical Support</option>
                <option value="billing">Billing</option>
                <option value="general">General Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
                <label htmlFor="subject" className="required">Subject</label>
                <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    placeholder="What can we help you with?" 
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                className='hquestion-textarea'
                    id="message" 
                    name="message" 
                    placeholder="Briefly describe your request"
                ></textarea>
            </div>

            <button className='hquestion-btn' type="submit">Submit</button>
        </form>
    </div>
        </div>
    </div>
  )
}

export default HelpQuestion