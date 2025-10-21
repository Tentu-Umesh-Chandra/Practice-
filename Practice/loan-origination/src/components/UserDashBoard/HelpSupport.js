import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function HelpSupport() {
  const [contactInfo] = useState({
    address: 'Standard Chartered Tower, India',
    phone: '+91 90000 90000',
    email: 'support@sc.com',
    workingHours: {
      weekdays: 'Monday - Friday: 9:00 AM - 5:00 PM',
      saturday: 'Saturday: 9:00 AM - 1:00 PM'
    }
  });

  const [faqs] = useState([
    {
      id: 1,
      question: 'How long does loan approval take?',
      answer: 'Loan approval typically takes 3-5 business days after all required documents are submitted.'
    },
    {
      id: 2,
      question: 'What documents are required for loan application?',
      answer: 'Required documents include identity proof, address proof, income proof, and bank statements. Specific requirements vary by loan type.'
    },
    {
      id: 3,
      question: 'Can I track my application status?',
      answer: 'Yes, you can track your application status in the "My Applications" section of your dashboard.'
    },
    {
      id: 4,
      question: 'What is the minimum CIBIL score required?',
      answer: 'We typically require a minimum CIBIL score of 650, but this may vary based on the loan type and amount.'
    }
  ]);

  const [supportForm, setSupportForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setSupportForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would submit to backend
    alert('Your query has been submitted successfully! We will get back to you soon.');
    setSupportForm({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      <Header />
      
      <main className="container my-4">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-4">Help & Support</h1>
          </div>
        </div>

        <div className="row">
          {/* Contact Information */}
          <div className="col-md-6 mb-4">
            <div className="card dashboard-card h-100">
              <div className="card-header">
                <i className="fas fa-phone-alt me-2"></i> Contact Information
              </div>
              <div className="card-body">
                <div className="contact-info">
                  <div className="d-flex align-items-center mb-4">
                    <div className="contact-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h5>Address</h5>
                      <p className="mb-0">{contactInfo.address}</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center mb-4">
                    <div className="contact-icon bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div>
                      <h5>Phone Number</h5>
                      <p className="mb-0">{contactInfo.phone}</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center mb-4">
                    <div className="contact-icon bg-info text-white rounded-circle d-flex align-items-center justify-content-center me-3">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h5>Email Address</h5>
                      <p className="mb-0">{contactInfo.email}</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center">
                    <div className="contact-icon bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-3">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div>
                      <h5>Working Hours</h5>
                      <p className="mb-0">{contactInfo.workingHours.weekdays}</p>
                      <p className="mb-0">{contactInfo.workingHours.saturday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="col-md-6 mb-4">
            <div className="card dashboard-card h-100">
              <div className="card-header">
                <i className="fas fa-question-circle me-2"></i> Frequently Asked Questions
              </div>
              <div className="card-body">
                <div className="accordion" id="faqAccordion">
                  {faqs.map((faq, index) => (
                    <div key={faq.id} className="accordion-item">
                      <h2 className="accordion-header" id={`faq${faq.id}`}>
                        <button 
                          className={`accordion-button ${index === 0 ? '' : 'collapsed'}`} 
                          type="button" 
                          data-bs-toggle="collapse" 
                          data-bs-target={`#collapse${faq.id}`}
                        >
                          {faq.question}
                        </button>
                      </h2>
                      <div 
                        id={`collapse${faq.id}`} 
                        className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} 
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Form */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="card dashboard-card">
              <div className="card-header">
                <i className="fas fa-headset me-2"></i> Get in Touch
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">Full Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="name"
                        value={supportForm.name}
                        onChange={handleFormChange}
                        required 
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email"
                        value={supportForm.email}
                        onChange={handleFormChange}
                        required 
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="subject" 
                      name="subject"
                      value={supportForm.subject}
                      onChange={handleFormChange}
                      required 
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea 
                      className="form-control" 
                      id="message" 
                      name="message"
                      rows="5" 
                      value={supportForm.message}
                      onChange={handleFormChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit Query</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default HelpSupport;