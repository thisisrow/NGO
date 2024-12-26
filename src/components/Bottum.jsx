import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import './com.css'; // Custom CSS file for styling

const Bottum = () => {
  return (
    <footer className="footer-container py-4">
      <div className="container">
        <div className="row">
          {/* Contact Information */}
          <div className="col-md-4">
            <h4 className="footer-title">Contact Information</h4>
            <p><FaPhoneAlt /> <span>8483041355 / 7021795042 / 9881278576</span></p>
            <p><FaEnvelope /> <span>neetaprasad70@yahoo.com</span></p>
            <p><FaMapMarkerAlt /> <span>SUSHIRMALA FOUNDATION, SHOP 11, SHUBHLAXMI SHOPPING CENTRE, VASANT NAGRI, VASAI EAST, PALGHAR - 401208</span></p>
            <p>Working Hours: Mon-Fri: 1.30 pm to 6 pm</p>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4">
            <h4 className="footer-title">Follow Us</h4>
            <ul className="social-links list-unstyled">
                <li><a href="https://www.facebook.com/RegdNGO?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer " className="Facebook"><FaFacebook /> Facebook</a></li>
              <li><a href="https://www.youtube.com/@sushirmalafoundationtogetherwe" target="_blank" rel="noopener noreferrer " className="YouTube"><FaYoutube /> YouTube</a></li>
              <li><a href="https://www.instagram.com/sushirmalafoundation2022/?igsh=dGxwcmNha2pjZ3V3" target="_blank" rel="noopener noreferrer " className="Instagram"><FaInstagram /> Instagram</a></li>
            </ul>
          </div>

          {/* Map Embed */}
          <div className="col-md-4">
            <h4 className="footer-title">Location</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7526.425990427948!2d72.830847!3d19.403201!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDI0JzEyLjEiTiA3MsKwNDknNTkuNSJF!5e0!3m2!1sen!2sin!4v1735214119174!5m2!1sen!2sin"
              className="footer-map"
              title="Foundation Location"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Footer Note */}
        <div className="footer-note text-center mt-4">
          <p>© 2024 Sushirmala Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Bottum;
