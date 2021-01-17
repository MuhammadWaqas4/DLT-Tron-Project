import React from 'react';
const Footer = () =>{
    return(
        <>
          <footer class="section section-separated py-lg">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <img src="images/logo.png" alt="footer logo" class="img-fluid mb-4"/>
                    <p class="footer__info--text">Wave Exchange is the fastest and most scalable digital asset, enabling real-time global payments anywhere in the world.
                    </p>
                    <ul class="social__links">
                        <li>
                            <a href="#">
								<img src="images/facebook-icon.svg" alt="fb" class="img-fluid"/>
								</a>
                        </li>
                        <li>
                            <a href="#">
								<img src="images/twitter-icon.svg" alt="tw" class="img-fluid"/>
								</a>
                        </li>
                        <li>
                            <a href="#">
								<img src="images/linked-in-icon.svg" alt="in" class="img-fluid"/>
								</a>
                        </li>
                        <li>
                            <a href="#">
								<img src="images/github-icon.svg" alt="gh" class="img-fluid"/>
								</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6 col-lg-4">
                    <p class="footer-col__head">Contact Us</p>
                    <div class="contact__address">
                        <p> 330 Franklin Road,
                            <br/> Suite 135A, Brentwood,
                            <br/> TN 37027-5237
                        </p>
                        <p> Phone: 615.555.5555</p>
                        <p> Email: <a href="#" class="__cf_email__">info@gmail.com</a></p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <p class="footer-col__head">Quick Links</p>
                    <div class="row">
                        <div class="col-md-6">
                            <ul class="footer__links">
                                <li>
                                    <a href="#">ABOUT</a>
                                </li>
                                <li>
                                    <a href="#">FEATURES</a>
                                </li>
                                <li>
                                    <a href="#">TOKENS</a>
                                </li>
                                <li>
                                    <a href="#">ROAD MAP</a>
                                </li>
                                <li>
                                    <a href="#">WHITEPAPER</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <ul class="footer__links">
                                <li>
                                    <a href="#">HELP</a>
                                </li>
                                <li>
                                    <a href="#">TERMS OF USE</a>
                                </li>
                                <li>
                                    <a href="#">PRIVACY POLICY</a>
                                </li>
                                <li>
                                    <a href="#">AGREEMENTS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center mt-5">
                <p class="copyright__text mb-0"><small>Copyright © Wave Exchange All rights reserved.</small></p>
            </div>
        </div>
    </footer>
        </>

    );
}

export default Footer;