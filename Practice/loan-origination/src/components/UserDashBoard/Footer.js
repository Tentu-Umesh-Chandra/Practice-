import React from 'react';

function Footer() {
  return (
    <footer className="sc-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4 mb-md-0">
            <div className="footer-section">
              <h5>About Us</h5>
              <p>We're a leading international banking group, with a presence in some of the world's most dynamic markets.</p>
              <div className="social-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4 mb-md-0">
            <div className="footer-section">
              <h5>Products</h5>
              <a href="#">Personal Loans</a>
              <a href="#">Home Loans</a>
              <a href="#">Vehicle Loans</a>
              <a href="#">Credit Cards</a>
              <a href="#">Savings Accounts</a>
            </div>
          </div>
          <div className="col-md-3 mb-4 mb-md-0">
            <div className="footer-section">
              <h5>Support</h5>
              <a href="#">Contact Us</a>
              <a href="#">FAQs</a>
              <a href="#">Branch Locator</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-section">
              <h5>Contact Information</h5>
              <p><i className="fas fa-map-marker-alt me-2"></i> Standard Chartered Tower, India</p>
              <p><i className="fas fa-phone me-2"></i> +91 90000 90000</p>
              <p><i className="fas fa-envelope me-2"></i> support@sc.com</p>
            </div>
          </div>
        </div>
        <div className="row copyright">
          <div className="col-md-6">
            <p>&copy; 2025 Standard Chartered Bank. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="footer-links">
              <a href="#">Terms of Use</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Security</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;