import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
      <>        
      <footer className="footer2">
                
            <div className="footer__container2">



                <div className="footer__section2">

               <div className="social-icons">
                        <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                  </div>

                </div>

                <div className="footer__section2">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About US</a></li>
                        <li><a href="/Achievement">Achievement</a></li>
                        <li><a href="/contact">Contact</a></li>
                       
                    </ul>
                </div>
                
                <div className="footer__section2">
                    <h3>Contact Us</h3>
                    <p>Kusum Vihar, Koylanagar <br />Dhanbad, Jharkhand  826005</p>
                    <p>Email: 66308@cbseshiksha.in</p>
                    <p>Phone:0326-2230713</p>
                </div>


           
            </div>
        </footer>
        <div className="footer__bottom2">
                <p>&copy; 2024 DOON PUBLIC SCHOOL. All rights reserved.</p>
            </div>
        </>

    );
};

export default Footer;
