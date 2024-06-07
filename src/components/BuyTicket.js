import React from 'react'

function BuyTicket() {
  return (
<div>
  {/*Page Title*/}
  <section className="page-title gallery-bg" >
    <div className="anim-icons full-width">
      <span className="icon icon-bull-eye" />
      <span className="icon icon-dotted-circle" />
    </div>
    <div className="auto-container">
      <div className="title-outer">
        <h1>Price Plan</h1>
        <ul className="page-breadcrumb">
          <li><a href="index.html">Home</a></li>
          <li>Price Plan</li>
        </ul> 
      </div>
    </div>
  </section>
  {/*End Page Title*/}
  {/* Pricing Section Two*/}
  <section className="pricing-section-two">
    <div className="auto-container">
      <div className="sec-title text-center">
        <span className="sub-title">GET TICKET</span>
        <h2>Explore Flexible Pricing Plans <br />Choose a Ticket</h2>
        <span className="divider" />
      </div>
      <div className="row">
        {/* Pricing block */}
        <div className="pricing-block-two col-lg-4 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
          <div className="inner-box">
            <div className="title-box">
              <span className="title">Regular Plan</span>
              <h3>Standard Pass</h3>
            </div>
            <div className="price-box">
              <div className="price"><sup>$</sup>200</div>
            </div>
            <ul className="features">
              <li>Concert Attendance</li>
              <li>20 Lottery Ticket</li>
              <li>Priority Seating</li>
              <li>5 Person Entry</li>
              <li>Certificate</li>
              <li>T-Shart</li>
            </ul>
            <div className="btn-box">
              <button className="theme-btn btn-style-one"><span className="btn-title">Buy Ticket</span></button>
            </div>
          </div>
        </div>
        {/* Pricing block */}
        <div className="pricing-block-two tagged col-lg-4 col-md-12 col-sm-12 wow fadeInUp">
          <div className="inner-box">
            <div className="title-box">
              <span className="title">Business Plan</span>
              <h3>Flexible Pass</h3>
            </div>
            <div className="price-box">
              <div className="price"><sup>$</sup>400</div>
            </div>
            <ul className="features">
              <li>Concert Attendance</li>
              <li>20 Lottery Ticket</li>
              <li>Priority Seating</li>
              <li>5 Person Entry</li>
              <li>Certificate</li>
              <li>T-Shart</li>
            </ul>
            <div className="btn-box">
              <button className="theme-btn btn-style-two"><span className="btn-title">Buy Ticket</span></button>
            </div>
          </div>
        </div>
        {/* Pricing block */}
        <div className="pricing-block-two col-lg-4 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
          <div className="inner-box">
            <div className="title-box">
              <span className="title">Enterprise Plan</span>
              <h3>Fabulously Pass</h3>
            </div>
            <div className="price-box">
              <div className="price"><sup>$</sup>600</div>
            </div>
            <ul className="features">
              <li>Concert Attendance</li>
              <li>20 Lottery Ticket</li>
              <li>Priority Seating</li>
              <li>5 Person Entry</li>
              <li>Certificate</li>
              <li>T-Shart</li>
            </ul>
            <div className="btn-box">
              <button className="theme-btn btn-style-one"><span className="btn-title">Buy Ticket</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Pricing Section */}
  {/* Call to Action Two */}
  <section className="call-to-action-two buy__ticket__bg" >
    <div className="auto-container">
      <div className="row">
        <div className="content-column col-lg-6 offset-lg-6">
          <div className="content-box wow fadeInUp">
            <span className="sub-title">GET EXPERIENCE</span>
            <h2>Shift Your Perspective on Digital Business</h2>
            <span className="text">How you transform your business as technology, consumer, habits industry dynamic s change? Find out from those leading the charge.</span>
            <a href="buy-ticket.html" className="theme-btn btn-style-two"><span className="btn-title">Buy Ticket</span></a>
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
            <a href="buy-ticket.html" className="theme-btn btn-style-one mt-4"><span className="btn-title">Buy Ticket</span></a>
          </div>
        </div>
        {/* Title Column */}
        <div className="title-column col-xl-9 col-lg-8 col-md-12">
          <div className="sponsors-outer">
            <div className="row">
              {/* Client Block */}
              <div className="client-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight">
                <figure className="image-box"><a href="#"><img src={process.env.PUBLIC_URL + "assets/images/clients/1.jpg" } /></a></figure>
              </div>
              {/* Client Block */}
              <div className="client-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="300ms">
                <figure className="image-box"><a href="#"><img src={process.env.PUBLIC_URL + "assets/images/clients/2.jpg" } /></a></figure>
              </div>
              {/* Client Block */}
              <div className="client-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="600ms">
                <figure className="image-box"><a href="#"><img src={process.env.PUBLIC_URL + "assets/images/clients/3.jpg" } /></a></figure>
              </div>
              {/* Client Block */}
              <div className="client-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="900ms">
                <figure className="image-box"><a href="#"><img src={process.env.PUBLIC_URL + "assets/images/clients/4.jpg" } /></a></figure>
              </div>
              {/* Client Block */}
              <div className="client-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="1200ms">
                <figure className="image-box"><a href="#"><img src={process.env.PUBLIC_URL + "assets/images/clients/5.jpg" } /></a></figure>
              </div>
              {/* Client Block */}
              <div className="client-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="1500ms">
                <figure className="image-box"><a href="#"><img src={process.env.PUBLIC_URL + "assets/images/clients/6.jpg" } /></a></figure>
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

export default BuyTicket