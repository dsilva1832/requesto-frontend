import React from 'react'

function Footer() {
  return (
    <div id='footer'>
      <footer style={{backgroundColor:'#1e1e24' /*'black'*/}} className="text-white text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            {/* About section */}
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-3">About Us</h5>
              <p>
                Requesto bridges the gap between those who <strong>need</strong> and those who <strong>can help</strong>.  
                Whether it's lending a book, sharing notes, or offering small assistance,  
                our goal is to make sharing simple, secure, and meaningful.

              </p>
            </div>

            {/* Quick Links */}
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-3">Quick Links</h5>
              <ul className="list-unstyled mb-0">
                <li><a href="/" className="text-white text-decoration-none">Home</a></li>
                <li><a href="/provide" className="text-white text-decoration-none">Provide</a></li>
                <li><a href="/request" className="text-white text-decoration-none">Request</a></li>
                <li><a href="" className="text-white text-decoration-none">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-3">Contact</h5>
              <p>Email: info@requesto.com</p>
              <p>Phone: +91 9848220394</p>
              <p>Location: Kochi, Kerala</p>
            </div>
          </div>
        </div>

        <div className="text-center p-3">
          &copy;Requesto-November 2025, All Rights Reserved to &reg;Alwin Joseph Dsilva
        </div>
      </footer>
    </div>
  )
}

export default Footer