import React from "react";
import logo1 from "../../img/logo1.png";
import harpa_logo from "../../img/harpa_logo.png";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="one">
          <div class="logo-container">
            <img src={logo1} alt="BNCA Logo" />
          </div>
          <div class="subscribe-container">
            <h2>SUBSCRIBE OUR NEWSLETTER</h2>
            <form action="#" method="post">
              <input type="email" name="email" placeholder="enter your email" />
              <button type="submit">➤</button>
            </form>
          </div>
          <div class="info-container">
            <p>
              Endowed with an excellent infrastructure, scholarly faculty, great
              legacy of MKSSS towards empowering women through education, we at
              BNCA are committed to empowerment of girls in the challenging
              field of Architecture, and its facets.
            </p>
          </div>
        </div>
        <div className="two">
          <div className="up1">
            <p>ABOUT</p>
            <p>AboutCollege</p>
            <p>Mission&Vision</p>
            <p>Downloads</p>
          </div>
          <div className="down">
            <p>
              <div
                className="address"
                style={{
                  position: "relative",
                  bottom: "35px",
                  fontSize: "14px",
                }}
              >
                ADDRESS
              </div>
              Mksss Dr. Bhanuben Nanavati College of Architecture For WomenBNCA
              Campus, Karve Nagar,Pune 411052, India+912025474062
              +912025476966mail@bnca.ac.in
            </p>
          </div>
        </div>
        <div className="three">
          <div class="footer-section links">
            {/* <h3>QUICK LINKS</h3> */}
            <ul>
              <li> QUICK LINKS</li>
              <li>Announcements</li>
              <li>Alumni</li>
              <li>NAAC</li>
              <li>e-Portfolio</li>
              <li>Grievance</li>
            </ul>
          </div>

          <div class="footer-section infra">
            <h3>INFRASTRUCTURE</h3>
            <ul>
              <li>Announcements</li>
              <li>Alumni</li>
              <li>NAAC</li>
              <li>e-Portfolio</li>
              <li>Grievance</li>
            </ul>
          </div>

          <div class="footer-section social-media">
            <h3>SOCIAL MEDIA</h3>
            <div className="icons">
              <a href="#">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyhQR7_xjKk9nQ0P3LqYGhSHN_EGzDZ6rNKQ&usqp=CAU"
                  alt="Instagram"
                />
              </a>
              <a href="#">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_2U4EAT8w9vKgzefq9LgLiPa5fKFQ6DnVcQ&usqp=CAU"
                  alt="LinkedIn"
                />
              </a>
              <a href="#">
                <img
                  src="https://www.iconpacks.net/icons/1/free-facebook-icon-90-thumb.png"
                  alt="Facebook"
                />
              </a>
              <a href="#">
                <img
                  src="https://i.pinimg.com/originals/6c/1d/50/6c1d504b01b8849f0b2c8f1ce50f133f.png"
                  alt="Twitter"
                />
              </a>
            </div>
          </div>

          <div class="footer-section credits">
            <img src={harpa_logo} alt="Harpa" width="104px" height="147px" />
          </div>
        </div>
      </div>
      <div className="bottum">
              <li>Privacy Policy</li>
              <li>Term & Conditions</li>
              <li>Cookie Policy</li>
              <li>Sitemap</li>
              <li>© BNCA 2023ALL RIGHTS RESERVED</li>
      </div>
    </>
  );
}
export default Footer;
