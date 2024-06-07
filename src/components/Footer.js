import React from "react";

function Footer() {
  return (
    <div>
      <footer className="main-footer">
        <div className="auto-container">
          {/* Footer Content */}
          <div className="footer-content wow fadeInUp">
            <div className="text-center">
              <div className="footer-logo">
                <a href="#">
                  <img
                    src={process.env.PUBLIC_URL + "assets/images/logo-2.png"}
                  />
                </a>
              </div>
              <div className="text">
                We have very good strength in innovative technology and tools
                with over 3 years of experience. We makes long-term investments
                goal in global companies in different sectors, mainly in
                Pakistan and other countries.
              </div>
            </div>
            <ul className="social-icon-two">
              <li>
                <a href="#">
                  <span className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-pinterest" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-dribbble" />
                </a>
              </li>
            </ul>
            <ul className="contact-list-one">
              <li>
                <i className="flaticon-location" /> Jowar, Buner, Pakistan{" "}
                <strong>Address</strong>
              </li>
              <li>
                <i className="flaticon-alarm-clock-1" />
                Monday - Friday 9am - 6pm <strong>Timing</strong>
              </li>
              <li>
                <i className="flaticon-email-1" />{" "}
                <a href="mailto:nasirkhanbuneri117@gmail.com">
                  nasirkhanbuneri117@gmail.com
                </a>{" "}
                <strong>Mail to us</strong>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="inner-container">
              <ul className="footer-nav">
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
              <div className="copyright-text">
                <p>
                  Copyright © 2022 All Rights Reserved by{" "}
                  <a href="#">Nasir Khan</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
