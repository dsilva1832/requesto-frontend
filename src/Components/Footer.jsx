import React from 'react'

function Footer() {
  return (
    <>
      <footer className="bg-dark text-white text-center text-lg-start mt-5">
        <div className="container p-4">
          <div className="row">
            {/* About section */}
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-3">About Us</h5>
              <p>
                We are passionate about delivering the best digital solutions
                to help you grow and succeed in your online journey.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-3">Quick Links</h5>
              <ul className="list-unstyled mb-0">
                <li><a href="/" className="text-white text-decoration-none">Home</a></li>
                <li><a href="/lend" className="text-white text-decoration-none">Lend</a></li>
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

        <div className="text-center p-3 bg-secondary">
          &copy;Requesto-November 2025, All Rights Reserved to &reg;Alwin Joseph Dsilva
        </div>
      </footer>
    </>
  )
}

export default Footer