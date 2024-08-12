import React from 'react'
import './footer.css'
function Footern() {
  return (
    <div className='pt-8'>
    <hr/>
    <footer className="footer">
      <div className="container">
        <div className="footer-section">   

          <h4>Company</h4>
          <ul>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Careers</a></li>
            <li><a href="/">Press</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Product</h4>
          <ul>
            <li><a href="/">Features</a></li>
            <li><a href="/">Pricing</a></li>
            <li><a href="/">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Help Center</a></li>
            <li><a href="/">Community</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>support@nexorand.com</li>
            <li>+1 (234) 567-890</li>
            <li>123 Creator St, Web City, 12345</li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        © 2024 Nexorand. All rights reserved.
      </div>
    </footer>
       
    </div>
  )
}

export default Footern;