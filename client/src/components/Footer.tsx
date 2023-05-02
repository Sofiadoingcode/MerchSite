import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Social Media</h4>
            <p>
              NOT DONE
            </p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <a href="/">Home</a><br/>
              <a href="/shop">Shop</a>
              
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: sofiastuntscontact@gmail.com</p>
      
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SofiaStunts. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;