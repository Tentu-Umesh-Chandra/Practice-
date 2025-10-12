import React from 'react';
import Header from './Header';
import Footer from './Footer';

function HelpSupport() {
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
                    <div className="contact-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h5>Address</h5>
                      <p className="mb-0">Standard Chartered Tower, India</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center mb-4">
                    <div className="contact-icon bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                      <i className="fas fa-phone"></i>
                    </div>
                    <div>
                      <h5>Phone Number</h5>
                      <p className="mb-0">+91 90000 90000</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center mb-4">
                    <div className="contact-icon bg-info text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h5>Email Address</h5>
                      <p className="mb-0">support@sc.com</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center">
                    <div className="contact-icon bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                      <i className="fas fa-clock"></i>
                    </div>
                    <div>
                      <h5>Working Hours</h5>
                      <p className="mb-0">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="mb-0">Saturday: 9:00 AM - 2:00 PM</p>
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
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faq1">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1">
                        How long does loan approval take?
                      </button>
                    </h2>
                    <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Loan approval typically takes 3-5 business days after all required documents are submitted.
                      </div>
                    </div>
                  </div>
                  
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faq2">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2">
                        What documents are required for loan application?
                      </button>
                    </h2>
                    <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Required documents include identity proof, address proof, income proof, and bank statements. Specific requirements vary by loan type.
                      </div>
                    </div>
                  </div>
                  
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faq3">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3">
                        Can I track my application status?
                      </button>
                    </h2>
                    <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Yes, you can track your application status in the "My Applications" section of your dashboard.
                      </div>
                    </div>
                  </div>
                  
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faq4">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4">
                        What is the minimum CIBIL score required?
                      </button>
                    </h2>
                    <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        We typically require a minimum CIBIL score of 650, but this may vary based on the loan type and amount.
                      </div>
                    </div>
                  </div>
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
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">Full Name</label>
                      <input type="text" className="form-control" id="name" required />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input type="email" className="form-control" id="email" required />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" className="form-control" id="subject" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="5" required></textarea>
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