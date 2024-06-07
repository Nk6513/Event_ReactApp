import React from 'react'

function Contact() {
  return (
   <div>
  {/*Page Title*/}
  <section className="page-title about-bgt" >
    <div className="anim-icons full-width">
      <span className="icon icon-bull-eye" />
      <span className="icon icon-dotted-circle" />
    </div>
    <div className="auto-container">
      <div className="title-outer">
        <h1>Contact</h1>
        <ul className="page-breadcrumb">
          <li><a href="index.html">Home</a></li>
          <li>Contact</li>
        </ul> 
      </div>
    </div>
  </section>
  {/*End Page Title*/}
  {/* Contact Section */}
  <section className="contact-section">
    <div className="auto-container">
      <div className="sec-title text-center">
        <span className="sub-title">GET IN TOUCH</span>
        <h2>If Contact With Us Send Detail</h2>
        <span className="divider" />
      </div>
      <div className="contact-form">
        <form method="post" action="https://themecraze.net/html/volia/sendemail.php" id="contact-form">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
              <div className="input-outer">
                <input type="text" name="username" placeholder="Name" required />
                <span className="icon fa fa-user" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
              <div className="input-outer">
                <input type="email" name="email" placeholder="Email" required />
                <span className="icon fa fa-envelope" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
              <div className="input-outer">
                <input type="text" name="phone" placeholder="Phone" required />
                <span className="icon fa fa-phone" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
              <div className="input-outer">
                <input type="text" name="subject" placeholder="Subject" required />
                <span className="icon fa fa-pencil-alt" />
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
              <textarea name="message" placeholder="Message" defaultValue={""} />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 form-group text-center">
              <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">Submit Now</span></button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
  {/*End Contact Page Section */}
  {/* Map Section */}
  <section className="map-section">
    <div className="auto-container">
      <div className="row clearfix">
        <div className="contact-column col-lg-5 col-md-12 col-sm-12 order-2">
          <div className="inner-column">
            <div className="sec-title">
              <span className="sub-title">QUICK CONTACT</span>
              <h2>Need Help? Contact Us</h2>
              <span className="divider" />
              <div className="text">Available to our business customers 24 hours a day.</div>
            </div>
            <ul className="contact-info">
              <li>
                <span className="icon fa fa-map-marker-alt" /> 
                <h4>Our Location:</h4>
                <p>27 Division St, New York, NY 10002, United States.</p>
              </li>
              <li>
                <span className="icon fa fa-phone-volume" /> 
                <h4>24/7 Hotline:</h4>
                <p>+8 (123) 985 789,  +8 (123) 985 535</p>
              </li>
              <li>
                <span className="icon fa fa-envelope" /> 
                <h4>Email:</h4>
                <p><a href="mailto:newyork@example.com">volia.newyork@gmail.com</a></p>
              </li>
            </ul>
          </div>
        </div>
        {/* Form Column */}
        <div className="map-column col-lg-7 col-md-12 col-sm-12">
          {/*Map Outer*/}
          <div className="map-outer">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805184.6331292129!2d144.49266890254142!3d-37.97123689954809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1574408946759!5m2!1sen!2s" allowFullScreen />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End Map Section */}
  {/* Subscribe Section Two */}
  <section className="subscribe-section-two">
    <div className="auto-container">
      <div className="content-box">
        <div className="sec-title text-center light">
          <span className="sub-title">Get The Latest Updates</span>
          <h2>Signup For Newsletter</h2>
          <div className="divider" />
        </div>
        <div className="newsletter-form-two">
          <form method="post" action="https://themecraze.net/html/volia/blog.html">
            <div className="form-group">
              <input type="email" name="field-name" defaultValue placeholder="Signup For Newsletter" required />
              <button type="submit" className="theme-btn btn-style-two"><span className="btn-title">Subscribe</span></button>
            </div>
          </form>
        </div>
        <div className="text">If You Want to Update For on Our Site a#<a href="#">Subscribe</a> Now.</div>
      </div>
    </div>
  </section>
  {/*End Subscribe Section Two */}
</div>

  )
}

export default Contact