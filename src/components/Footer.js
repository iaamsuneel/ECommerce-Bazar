import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    return (<>
        <div class="demooo">
            <div class="app-store-wrap"><img alt=""
                src="https://inszn-ecom.s3.amazonaws.com/3d32f42a-511e-4f4b-968c-6ecb6fe2fcd1.png" /></div>
        </div>
        <footer className="footer">
            <div className="container">
                <div className="footer-area">
                    <div className="footer-block">
                        <div className="footer-box shop-row">

                            <h3>ABOUT</h3>

                            <ul>
                                <li><Link to="/page/aboutUs">About Bazaar</Link></li>
                                <li><Link to="/page/support">support</Link></li>
                                <li><Link to="/blog">Blogs</Link></li>
                                <li><Link to="/career">Careers</Link></li>
                                <li><Link to="/contactUs">Contact Us</Link></li>
                            </ul>
                        </div>

                        <div className="footer-box shop-row">
                            <h3>HELP CENTER</h3>

                            <ul>
                                <li><Link to="/page/cancellationReturns">Cancellation &amp; Returns</Link></li>
                                <li><Link to="/page/how-it-work">How It Works</Link></li>
                                <li><Link to="/page/how-to-sell">Become A Seller</Link></li>
                                <li><Link to="/page/localBazaar">Local Bazaar</Link></li>
                                <li><Link to="/page/order-tracking">Shipping</Link></li>
                                <li><Link to="/page/payments">Payments</Link></li>
                            </ul>
                        </div>

                        <div className="footer-box shop-row">
                            <h3>MY ACCOUNT</h3>

                            <ul>
                                <li><Link to="/chats/all">Messages</Link></li>
                                <li><Link to="/profile/wishList">Favourites</Link></li>
                            </ul>
                        </div>

                        <div className="footer-box shop-row">
                            <h3>POLICY</h3>

                            <ul>
                                <li><Link to="/page/cancellationReturns">Return Policy</Link></li>
                                <li><Link to="/page/privacy">Privacy</Link></li>
                                <li><Link to="/page/security">Security</Link></li>
                                <li><Link to="/page/sitemap">Sitemap</Link></li>
                                <li><Link to="/page/terms">Terms Of Use</Link></li>
                            </ul>
                        </div>

                        <div className="footer-box shop-row">
                            <h3>TOP CATEGORIES</h3>

                            <ul>
                                <li><Link to="/product-listing-page/Beauty?category=beauty">Beauty</Link></li>
                                <li><Link to="/product-listing-page/Electronics?category=electronics">Electronics</Link></li>
                                <li><Link to="/product-listing-page/Home?category=home">Home</Link></li>
                                <li><Link to="/product-listing-page/Kids?category=kids">Kids</Link></li>
                                <li><Link to="/product-listing-page/Men?category=men">Men</Link></li>
                                <li><Link to="/product-listing-page/Sports?category=sports">Sports</Link></li>
                                <li><Link to="/product-listing-page/Women?category=women">Women</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-box footer-logowrap " style={{ margin: "20px 0 25px" }}><span className="logo-className"><Link to="/"><img
                    src="http://45.65.41.90:6060/public/assets/images/footer-logo.png" style={{ maxWidth: '210px' }} />
                </Link> </span>

                    <div className="header-sell"><Link to="#">Sell with us</Link></div>
                </div>
            </div>

            <div className="copyright-block">
                <div className="container"><span className="copyright-info">Copyright © 2022 Bazaar Inc. All rights reserved&nbsp;
                   < Link to="/policy">Privacy Policy</Link><Link to="/terms">Terms of Service</Link>
                     <Link to="/license">Licenses/ Disclosures</Link> </span>

                    <div className="media">
                        <div className="footer-address">Sahiti Vijay 66, 5th Floor,&nbsp;Jubli Enclave Hi-Tech City,&nbsp;Hyderabad
                            TS,&nbsp;500081</div>

                        <div className="footer-social">
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-instagram"></i>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>)
}
export default Footer;