import React from 'react'

function Gallery() {
  return (
<div>
  {/*Page Title*/}
  <section className="page-title gallery-bg">
    <div className="anim-icons full-width">
      <span className="icon icon-bull-eye" />
      <span className="icon icon-dotted-circle" />
    </div>
    <div className="auto-container">
      <div className="title-outer">
        <h1>Gallery</h1>
        <ul className="page-breadcrumb">
          <li><a href="index.html">Home</a></li>
          <li>Gallery</li>
        </ul> 
      </div>
    </div>
  </section>
  {/*End Page Title*/}
  {/* Gallery Section */}
  <section className="gallery-section style-two">
    <div className="auto-container">
      <div className="row">
        {/* Gallery Block */}
        <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
          <div className="image-box">
            <figure className="image"><img src={process.env.PUBLIC_URL + "assets/images/gallery/1.jpg" } /></figure>
            <div className="overlay-box">
              <div className="icon"><img src={process.env.PUBLIC_URL + "assets/images/icons/logo.png" } /></div>
              <h3><a href="schedule-detail.html">Conference Hall</a></h3>
              <span className="text">Event # 15</span>
            </div>
          </div>
        </div>
        {/* Gallery Block */}
        <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
          <div className="image-box">
            <figure className="image"><img src={process.env.PUBLIC_URL + "assets/images/gallery/2.jpg" } /></figure>
            <div className="overlay-box">
              <div className="icon"><img src={process.env.PUBLIC_URL + "assets/images/icons/logo.png" } /></div>
              <h3><a href="schedule-detail.html">Conference Hall</a></h3>
              <span className="text">Event # 15</span>
            </div>
          </div>
        </div>
        {/* Gallery Block */}
        <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
          <div className="image-box">
            <figure className="image"><img src={process.env.PUBLIC_URL + "assets/images/gallery/3.jpg" } /></figure>
            <div className="overlay-box">
              <div className="icon"><img src={process.env.PUBLIC_URL + "assets/images/icons/logo.png" } /></div>
              <h3><a href="schedule-detail.html">Conference Hall</a></h3>
              <span className="text">Event # 15</span>
            </div>
          </div>
        </div>
        {/* Gallery Block */}
        <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
          <div className="image-box">
            <figure className="image"><img src={process.env.PUBLIC_URL + "assets/images/gallery/4.jpg" } /></figure>
            <div className="overlay-box">
              <div className="icon"><img src={process.env.PUBLIC_URL + "assets/images/icons/logo.png" } /></div>
              <h3><a href="schedule-detail.html">Conference Hall</a></h3>
              <span className="text">Event # 15</span>
            </div>
          </div>
        </div>
        {/* Gallery Block */}
        <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
          <div className="image-box">
            <figure className="image"><img src={process.env.PUBLIC_URL + "assets/images/gallery/5.jpg" } /></figure>
            <div className="overlay-box">
              <div className="icon"><img src={process.env.PUBLIC_URL + "assets/images/icons/logo.png" } /></div>
              <h3><a href="schedule-detail.html">Conference Hall</a></h3>
              <span className="text">Event # 15</span>
            </div>
          </div>
        </div>
        {/* Gallery Block */}
        <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
          <div className="image-box">
            <figure className="image"><img src={process.env.PUBLIC_URL + "assets/images/gallery/6.jpg" } /></figure>
            <div className="overlay-box">
              <div className="icon"><img src={process.env.PUBLIC_URL + "assets/images/icons/logo.png" } /></div>
              <h3><a href="schedule-detail.html">Conference Hall</a></h3>
              <span className="text">Event # 15</span>
            </div>
          </div>
        </div>
        {/* Gallery Block */}
        <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
          <div className="image-box">
            <figure className="image"><img src={process.env.PUBLIC_URL + "assets/images/gallery/7.jpg" } /></figure>
            <div className="overlay-box">
              <div className="icon"><img src={process.env.PUBLIC_URL + "assets/images/icons/logo.png" } /></div>
              <h3><a href="schedule-detail.html">Conference Hall</a></h3>
              <span className="text">Event # 15</span>
            </div>
          </div>
        </div>
        {/* Gallery Block */}
        <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
          <div className="image-box">
            <figure className="image"><img src={process.env.PUBLIC_URL + "assets/images/gallery/8.jpg" } /></figure>
            <div className="overlay-box">
              <div className="icon"><img src={process.env.PUBLIC_URL + "assets/images/icons/logo.png" } /></div>
              <h3><a href="schedule-detail.html">Conference Hall</a></h3>
              <span className="text">Event # 15</span>
            </div>
          </div>
        </div>
      </div>
      <div className="styled-pagination">
        <ul>
          <li className="prev-post"><a href="#"><span className="fa fa-angle-left" /></a></li>
          <li><a href="#">1</a></li>
          <li className="active"><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li className="next-post"><a href="#"><span className="fa fa-angle-right" /> </a></li>
        </ul>
      </div>
    </div>
  </section>
  {/* End Gallery Section */}
  {/* Call to Action Two */}
  <section className="call-to-action-two bg-gallery-exp">
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

export default Gallery