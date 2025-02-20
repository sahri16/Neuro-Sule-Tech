import "../App.css"


function Footer() {
<footer>
        <video autoPlay loop muted playsInline className="background-video-footer">
          <source src="/assets/159052-818026310_small.mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay-footer"></div>
        <div className="footer-content">
          <div className="top-footer">
            <div className='footer-logo'>
              <img src="/assets/logo-Borcelle.svg" alt="" />
              <p>Transforming Ideas into Digital Excellence. Elevate your online presence with our innovative solutions and strategic digital services.</p>
              <div className="social-icon">
                <i className="bx bxl-twitter"></i>
                <i className="bx bxl-facebook"></i>
                <i className="bx bxl-telegram"></i>
                <i className="bx bxl-linkedin"></i>
                <i className="bx bxl-instagram"></i>
              </div>
            </div>

           <div className="footer-text">
           <div className='footer-service ser-com'>
              <h3>Services</h3>
              <ul>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Wordpress website</a></li>
                <li><a href="#">E-commerce Solutions</a></li>
                <li><a href="#">Shopify store</a></li>
                <li><a href="#">Digital Markting</a></li>
                <li><a href="#">Graphic Desiging</a></li>
                <li><a href="#">UI/UX Designing</a></li>
              </ul>
            </div>
            <div className='footer-company ser-com'>
              <h3>Company</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfoilo</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
           </div>
          </div>
          <div className="divider"></div>
          <div className="bottom-footer">
            <p>© 2025 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
  }
  export default Footer;
  