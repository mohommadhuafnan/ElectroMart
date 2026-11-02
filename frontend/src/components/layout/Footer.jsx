import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Logo } from '../common/Logo';

export const Footer = () => {
  return (
    <footer className="footer nwm-premium-footer">
      <div className="container-fluid px-header">
        <div className="nwm-footer-main">
          <div className="nwm-footer-grid">
            {/* Column 1: Brand & Social */}
            <div className="nwm-footer-col brand-col">
              <div className="nwm-footer-brand">
                <Logo variant="footer" />
                <div className="nwm-footer-slogan">Elevating Your Everyday</div>
              </div>
              <p className="nwm-footer-about">
                ElectroMart is the ultimate destination for high-quality electronics. We offer a wide range of products including TVs, washing machines, LED lights, solar lights, electrical accessories, kitchen appliances, and home appliances to elevate your lifestyle.
              </p>
              <div className="nwm-footer-social">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/+94777666961"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 2c-5.508 0-9.985 4.477-9.985 9.985 0 1.761.459 3.479 1.332 4.992L2 22.181l5.352-1.332c1.464.799 3.123 1.22 4.679 1.22 5.508 0 9.985-4.477 9.985-9.985S17.539 2 12.031 2zm5.795 14.123c-.244.686-1.42 1.311-1.954 1.393-.509.078-1.173.111-1.899-.123-.443-.142-1.015-.332-1.761-.656-3.136-1.365-5.183-4.526-5.34-4.736-.157-.21-1.272-1.693-1.272-3.23 0-1.537.804-2.296 1.09-2.607.287-.311.624-.389.832-.389.208 0 .416.002.598.011.192.01.448-.073.7.535.261.63.889 2.167.967 2.324.078.157.13.342.026.551-.104.21-.157.34-.312.524-.157.184-.33.41-.471.551-.157.157-.321.328-.138.643.184.315.819 1.349 1.758 2.186 1.209 1.077 2.228 1.411 2.543 1.568.315.157.5-.026.685-.236.184-.21.785-.914.994-1.227.208-.313.416-.261.7-.157.287.104 1.817.857 2.13 1.013.313.157.521.236.599.367.078.131.078.761-.166 1.447z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="nwm-footer-col">
              <h3 className="nwm-footer-title">Quick Links</h3>
              <ul className="nwm-footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Column 3: Customer Support */}
            <div className="nwm-footer-col">
              <h3 className="nwm-footer-title">Support</h3>
              <ul className="nwm-footer-links">
                <li><Link to="/track-order">Track My Order</Link></li>
                <li><Link to="/about">Privacy Policy</Link></li>
                <li><Link to="/about">Refund and Returns Policy</Link></li>
                <li><Link to="/about">Terms and Conditions</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact & Support */}
            <div className="nwm-footer-col contact-col">
              <h3 className="nwm-footer-title">Get In Touch</h3>
              <div className="nwm-footer-contact">
                {/* 1. Address */}
                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="info">
                    <span>Location</span>
                    <p>
                      <a
                        href="https://maps.app.goo.gl/nfYoB94uYBMCxnvq9"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#ffffff', textDecoration: 'none' }}
                      >
                        57, 1st Cross Street,<br />
                        Vavuniya, Sri Lanka, 43000
                      </a>
                    </p>
                  </div>
                </div>

                {/* 2. Email */}
                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail size={20} />
                  </div>
                  <div className="info">
                    <span>Email Address</span>
                    <p>
                      <a
                        href="mailto:support@electromart.lk"
                        style={{ color: '#ffffff', textDecoration: 'none' }}
                      >
                        support@electromart.lk
                      </a>
                    </p>
                  </div>
                </div>

                {/* 3. Phone / WhatsApp */}
                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone size={20} />
                  </div>
                  <div className="info">
                    <span>Phone / WhatsApp</span>
                    <p>
                      <a
                        href="https://wa.me/+94777666961"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#ffffff', textDecoration: 'none' }}
                      >
                        +94 77 766 6961
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar (Exact MetaBuy Layout) */}
        <div className="nwm-footer-bottom">
          <div className="footer-bottom-row">
            {/* Left: Copyright */}
            <div className="copyright-col">
              <p className="copyright">
                &copy; {new Date().getFullYear()} <strong>ElectroMart</strong>. All rights reserved.
              </p>
            </div>

            {/* Center: Coursework Project Credit */}
            <div className="designer-col">
              <p className="nwm-designer-credit">
                Designed and Developed for{' '}
                <span className="credit-link">
                  CIS 22032 &bull; SEUSL Faculty of Technology
                </span>
              </p>
            </div>

            {/* Right: Payment Badges */}
            <div className="payment-col">
              <div className="nwm-payment-badges">
                <span className="payment-badge">Cash on Delivery</span>
                <span className="payment-badge">Visa / MasterCard</span>
                <span className="payment-badge">Bank Transfer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
