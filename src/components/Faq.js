import React from 'react'

function Faq() {
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
        <h1>FAQ’s</h1>
        <ul className="page-breadcrumb">
          <li><a href="index.html">Home</a></li>
          <li>FAQ’s</li>
        </ul> 
      </div>
    </div>
  </section>
  {/*End Page Title*/}
  {/* FAQ's section */}
  <section className="faq-section">
    <div className="auto-container">
      <div className="sec-title text-center">
        <span className="sub-title">Some FAQ’s</span>
        <h2>General Questions</h2>
        <span className="divider" />
      </div>
      <div className="row">
        <div className="col-lg-6">
          {/*Accordian Box*/}
          <ul className="accordion-box">
            {/*Block*/}
            <li className="accordion block active-block">
              <div className="acc-btn active">How can I attend a Pre-conference Workshop? <span className="icon fa fa-plus" /></div>
              <div className="acc-content current">
                <div className="content">
                  <p>Learning Lab registrations will also be rolled over to 2022 conference. The learning lab workshop schedule will be revised for 2022, and we will announce the new schedule when it is available.</p>
                </div>
              </div>
            </li>
            {/*Block*/}
            <li className="accordion block">
              <div className="acc-btn">Why is the hotel expensive? <span className="icon fa fa-plus" /></div>
              <div className="acc-content">
                <div className="content">
                  <p>Learning Lab registrations will also be rolled over to 2022 conference. The learning lab workshop schedule will be revised for 2022, and we will announce the new schedule when it is available.</p>
                </div>
              </div>
            </li>
            {/*Block*/}
            <li className="accordion block">
              <div className="acc-btn">What goes into a hotel contract? <span className="icon fa fa-plus" /></div>
              <div className="acc-content">
                <div className="content">
                  <p>Learning Lab registrations will also be rolled over to 2022 conference. The learning lab workshop schedule will be revised for 2022, and we will announce the new schedule when it is available.</p>
                </div>
              </div>
            </li>
            {/*Block*/}
            <li className="accordion block">
              <div className="acc-btn">How are conference hotels chosen? <span className="icon fa fa-plus" /></div>
              <div className="acc-content">
                <div className="content">
                  <p>Learning Lab registrations will also be rolled over to 2022 conference. The learning lab workshop schedule will be revised for 2022, and we will announce the new schedule when it is available.</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-lg-6">
          {/*Accordian Box*/}
          <ul className="accordion-box">
            {/*Block*/}
            <li className="accordion block active-block">
              <div className="acc-btn active">What About My Learning Lab Workshop Options? <span className="icon fa fa-plus" /></div>
              <div className="acc-content current">
                <div className="content">
                  <p>Learning Lab registrations will also be rolled over to 2022 conference. The learning lab workshop schedule will be revised for 2022, and we will announce the new schedule when it is available.</p>
                </div>
              </div>
            </li>
            {/*Block*/}
            <li className="accordion block">
              <div className="acc-btn"> How Do I Rollover My Conference Registration? <span className="icon fa fa-plus" /></div>
              <div className="acc-content">
                <div className="content">
                  <p>Learning Lab registrations will also be rolled over to 2022 conference. The learning lab workshop schedule will be revised for 2022, and we will announce the new schedule when it is available.</p>
                </div>
              </div>
            </li>
            {/*Block*/}
            <li className="accordion block">
              <div className="acc-btn">How Do i Cancel My Hotel Reservation? <span className="icon fa fa-plus" /></div>
              <div className="acc-content">
                <div className="content">
                  <p>Learning Lab registrations will also be rolled over to 2022 conference. The learning lab workshop schedule will be revised for 2022, and we will announce the new schedule when it is available.</p>
                </div>
              </div>
            </li>
            {/*Block*/}
            <li className="accordion block">
              <div className="acc-btn">When is The Next APQC Conference? <span className="icon fa fa-plus" /></div>
              <div className="acc-content">
                <div className="content">
                  <p>Learning Lab registrations will also be rolled over to 2022 conference. The learning lab workshop schedule will be revised for 2022, and we will announce the new schedule when it is available.</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* End FAQ's section */}
  {/* Faq Form Section */}
  <section className="faq-form-section">
    <div className="auto-container">
      <div className="sec-title text-center">
        <span className="sub-title">Tell Us now</span>
        <h2>Your Question</h2>
        <span className="divider" />
      </div>
      {/* Faq Form */}
      <div className="faq-form">
        <form method="post" action="https://themecraze.net/html/volia/index.html">
          <div className="row">
            <div className="form-group col-lg-6 col-md-12">
              <input type="text" name="username" placeholder="Name" required />
            </div>
            <div className="form-group col-lg-6 col-md-12">
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group col-lg-12 col-md-12">
              <textarea name="message" placeholder="Your Question" defaultValue={""} />
            </div>
            <div className="form-group col-lg-12 col-md-12 text-center">
              <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">Submit Now</span></button>
            </div> 
          </div>
        </form>
      </div>
    </div>
  </section>
  {/*End Contact Section */}
  {/* Call to Action Two */}
  <section className="call-to-action-two faq-bg">
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

export default Faq