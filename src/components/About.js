import React from 'react'

function About() {
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
        <h1>About Us</h1>
        <ul className="page-breadcrumb">
          <li><a href="/">Home</a></li>
          <li>About Us</li>
        </ul> 
      </div>
    </div>
  </section>
  {/*End Page Title*/}
  {/* About Section Two */}
  <section className="about-section-two">
    <div className="anim-icons">
      <span className="icon icon-circle-3" />
      <span className="icon icon-circle-4" />
    </div>
    <div className="auto-container">
      <div className="row">
        {/* Content Column */}
        <div className="content-column col-lg-8 col-md-12 col-sm-12">
          <div className="inner-column">
            <div className="sec-title">
              <span className="sub-title">Get the latest info about</span>
              <h2>Conference For Solving <br />Problems For Your Business</h2>
              <span className="divider" />
              <div className="text">Influential media, entertainment &amp; technology show inspirational speakers including game changing not just a large-scale conference, but a large educational hub on digital technologies for business, where people communicate, get inspired and find ready-made.</div>
            </div>
          </div>
        </div>
        {/* Date Column */}
        <div className="date-column col-lg-4 col-md-12 col-sm-12">
          <div className="date-box-outer">
            {/* Date Box Two / Yellow  */}
            <div className="date-box-one bg_yellow order-2">
              <span className="day">18</span>
              <span className="month">September</span>
              <span className="title">Conferance Day Now </span>
            </div>
            {/* Date Box One / Blue  */}
            <div className="date-box-one">
              <span className="day">17</span>
              <span className="month">September</span>
              <span className="title">Exhibition and Side Events</span>
            </div>
          </div>
        </div>
      </div>
      {/* Fact Counter Two */}
      <div className="fact-counter-two">
        <div className="row clearfix">
          {/*Column*/}
          <div className="counter-column col-lg-3 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="count-box">
                <span className="count-text" data-speed={3000} data-stop={54}>15</span>
                <span className="counter-title">Speakers</span>
              </div>
            </div>
          </div>
          {/*Column*/}
          <div className="counter-column col-lg-3 col-md-6 col-sm-12" data-wow-delay="300ms">
            <div className="inner-box">
              <div className="count-box">
                <span className="count-text" data-speed={3000} data-stop={600}>200</span>
                <span className="counter-title">Tickets</span>
              </div>
            </div>
          </div>
          {/*Column*/}
          <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow zoomIn" data-wow-delay="600ms">
            <div className="inner-box">
              <div className="count-box">
                <span className="count-text" data-speed={3000} data-stop={18}>18</span>
                <span className="counter-title">Sponsors</span>
              </div>
            </div>
          </div>
          {/*Column*/}
          <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow zoomIn" data-wow-delay="900ms">
            <div className="inner-box">
              <div className="count-box">
                <span className="count-text" data-speed={3000} data-stop={35}>30</span>
                <span className="counter-title">Sessions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video Box Outer */}
      <div className="video-box-outer">
        {/* Video Box */}
        <div className="video-box-one order-2">
          <figure className="image"><img src={process.env.PUBLIC_URL + "assets/images/resource/image-1.jpg"} /></figure>
          <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="lightbox-image play-btn wow fadeIn" data-wow-delay="500ms"><i className="icon flaticon-play-button-1" /></a>
        </div>
        {/* Info Box */}
        <div className="info-box-one">
          <div className="inner-box">
            <h4>Mind Blowing Was Last Year 2020</h4>
            <p>We have dedicated tracks for every industry Whether you want to hire tech’s top talent meet with the policymakers.</p>
            <a href="buy-ticket.html" className="theme-btn btn-style-two"><span className="btn-title">Book Ticket</span></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End About Section Two */}
  {/* Fun Fact Section */}
  <section className="fun-fact-section">
    <div className="auto-container">
      <div className="fact-counter">
        <div className="row clearfix">
          {/*Column*/}
          <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow zoomIn">
            <div className="inner-box">
              <div className="count-box">
                <span className="icon bg-1" />
                <span className="count-text" data-speed={3000} data-stop={94}>94</span>
              </div>
              <span className="counter-title">Meeting Tickets Affirmed </span>
            </div>
          </div>
          {/*Column*/}
          <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow zoomIn" data-wow-delay="300ms">
            <div className="inner-box">
              <div className="count-box">
                <span className="icon bg-2" />
                <span className="count-text" data-speed={3000} data-stop={28}>28</span>
              </div>
              <span className="counter-title">Universally Capable Speakers </span>
            </div>
          </div>
          {/*Column*/}
          <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow zoomIn" data-wow-delay="600ms">
            <div className="inner-box">
              <div className="count-box">
                <span className="icon bg-3" />
                <span className="count-text" data-speed={3000} data-stop={35}>35</span>
              </div>
              <span className="counter-title">Food Espresso and Studio Breaks </span>
            </div>
          </div>
          {/*Column*/}
          <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow zoomIn" data-wow-delay="900ms">
            <div className="inner-box">
              <div className="count-box">
                <span className="icon bg-4" />
                <span className="count-text" data-speed={3000} data-stop={65}>65</span>
              </div>
              <span className="counter-title">Supporters Prepared To Take an interest</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End Fun Fact Section */}
  {/* Feature Section Three*/}
  <section className="feature-section-three">
    <div className="auto-container">
      <div className="row">
        {/*Feature Block*/}
        <div className="feature-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
          <div className="inner-box">
            <div className="icon-box"><i className="icon flaticon-certificate-1" /></div>
            <h4>Confirm Speakers</h4>
            <p>Dolor sit amet consectetur elit sed eiusmod tempor in idunt labore cdet dolore magna aliqua.</p>
            <a href="#" className="theme-btn btn-style-one"><span className="btn-title">More Detail <i className="fa fa-angle-double-right" /></span></a>
          </div>
        </div>
        {/*Feature Block*/}
        <div className="feature-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
          <div className="inner-box">
            <div className="icon-box"><i className="icon flaticon-idea" /></div>
            <h4>Best Digital Ideas</h4>
            <p>Dolor sit amet consectetur elit sed eiusmod tempor in idunt labore cdet dolore magna aliqua.</p>
            <a href="#" className="theme-btn btn-style-one"><span className="btn-title">More Detail <i className="fa fa-angle-double-right" /></span></a>
          </div>
        </div>
        {/*Feature Block*/}
        <div className="feature-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
          <div className="inner-box">
            <div className="icon-box"><i className="icon flaticon-meeting" /></div>
            <h4>Networking People</h4>
            <p>Dolor sit amet consectetur elit sed eiusmod tempor in idunt labore cdet dolore magna aliqua.</p>
            <a href="#" className="theme-btn btn-style-one"><span className="btn-title">More Detail <i className="fa fa-angle-double-right" /></span></a>
          </div>
        </div>
        {/*Feature Block*/}
        <div className="feature-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
          <div className="inner-box">
            <div className="icon-box"><i className="icon flaticon-inspiration" /></div>
            <h4>Inspiring Keynotes</h4>
            <p>Dolor sit amet consectetur elit sed eiusmod tempor in idunt labore cdet dolore magna aliqua.</p>
            <a href="#" className="theme-btn btn-style-one"><span className="btn-title">More Detail <i className="fa fa-angle-double-right" /></span></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Feature Section */}
  
  <section className="testimonial-section ">
    <div className="auto-container">
      <div className="sec-title text-center">
        <span className="sub-title">Testimonial</span>
        <h2>Why Our Customer Love Vics</h2>
        <span className="divider" />
        <div className="text">VICS has 3+ years of experience with providing wide <br />area of specialty services works with full satisfaction therefore All love VICS</div>
      </div>
      
    </div>
  </section>
  {/*End Testimonial Section */}
  {/* Call to Action Two */}
  <section className="call-to-action-two about-bg" >
    <div className="auto-container">
      <div className="row">
        <div className="content-column col-lg-6 offset-lg-6">
          <div className="content-box wow fadeInUp">
            <span className="sub-title">GET EXPERIENCE</span>
            <h2>Shift Your Perspective on Digital Business</h2>
            <span className="text">How you transform your business as technology, consumer, habits industry dynamic s change? Find out from those leading the charge.</span>
            <a href="#" className="theme-btn btn-style-two"><span className="btn-title">Buy Ticket</span></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Call to Action Two */}
  {/*Clients Section*/}
  <section className="clients-section alternate2">
    <div className="auto-container">
      <div className="row">
        {/* Title Column */}
        <div className="title-column col-xl-3 col-lg-4 col-md-12">
          <div className="sec-title">
            <span className="sub-title">Clients</span>
            <h2>Our Official <br />Sponsors</h2>
            <div className="divider" />
            <div className="text">We have dedicated tracks for every industry Whether you want to hire tech’s top talent.</div> 
            <a href="#" className="theme-btn btn-style-one mt-4"><span className="btn-title">Buy Ticket</span></a>
          </div>
        </div>
        {/* Title Column */}
        <div className="title-column col-xl-9 col-lg-8 col-md-12">
          <div className="sponsors-outer">
            <div className="row">
              {/* Client Block */}
              <div className="client-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight">
                <figure className="image-box"><a href="#"><img src={process.env.PUBLIC_URL + "assets/images/clients/1.jpg"} /></a></figure>
              </div>
              {/* Client Block */}
              <div className="client-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="300ms">
                <figure className="image-box"><a href="#"><img src={process.env.PUBLIC_URL + "assets/images/clients/2.jpg"} /></a></figure>
              </div>
              {/* Client Block */}
              <div className="client-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="600ms">
                <figure className="image-box"><a href="#"><img src={process.env.PUBLIC_URL + "assets/images/clients/3.jpg"} /></a></figure>
              </div>
              {/* Client Block */}
              <div className="client-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="900ms">
                <figure className="image-box"><a href="#"><img src={process.env.PUBLIC_URL + "assets/images/clients/4.jpg"} /></a></figure>
              </div>
              {/* Client Block */}
              <div className="client-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="1200ms">
                <figure className="image-box"><a href="#"><img src={process.env.PUBLIC_URL + "assets/images/clients/5.jpg"} /></a></figure>
              </div>
              {/* Client Block */}
              <div className="client-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="1500ms">
                <figure className="image-box"><a href="#"><img src={process.env.PUBLIC_URL + "assets/images/clients/6.jpg"} /></a></figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End Clients Section*/}
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
          <form method="post" action="#">
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

export default About