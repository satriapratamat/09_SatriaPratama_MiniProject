import React from 'react';
import "../assets/css/Footer.css";
import { Link, NavLink } from "react-router-dom";

function Footer() {
    return (
        <>
        <div className="container-flex footer-content">
            <footer className="py-5">
                <div className="row">
                <div className="col-2">
                    <h5>Products</h5>
                    <ul className="nav flex-column nav-link-content">
                    <li className="nav-item2 mb-2"><a href="#" className="nav-link footer-nav p-0 ">Careers</a></li>
                    <li className="nav-item2 mb-2"><a href="#" className="nav-link footer-nav p-0 ">Blog</a></li>
                    <li className="nav-item2 mb-2"><a href="#" className="nav-link footer-nav p-0 ">Design</a></li>
                    <li className="nav-item2 mb-2"><a href="#" className="nav-link footer-nav p-0 ">Success</a></li>
                    </ul>
                </div>

                <div className="col-2">
                    <h5>Features</h5>
                    <ul className="nav flex-column nav-link-content">
                    <li className="nav-item2 mb-2"><a href="#" className="nav-link footer-nav p-0 ">API</a></li>
                    <li className="nav-item2 mb-2"><a href="#" className="nav-link footer-nav p-0 ">Tools</a></li>
                    <li className="nav-item2 mb-2"><a href="#" className="nav-link footer-nav p-0 ">Pricing</a></li>
                    </ul>
                </div>

                <div className="col-2">
                    <h5>About Us</h5>
                    <ul className="nav flex-column nav-link-content">
                    <li className="nav-item2 mb-2"><a href="#" className="nav-link footer-nav p-0 ">Who are we</a></li>
                    <li className="nav-item2 mb-2"><a href="#" className="nav-link footer-nav p-0 ">Contact Us</a></li>
                    <li className="nav-item2 mb-2"><a href="#" className="nav-link footer-nav p-0 ">FAQs</a></li>
                    </ul>
                </div>

                <div className="col-4 offset-1">
                    <form>
                    <h5>Subscribe to our newsletter</h5>
                    <p className="subs-desc">Monthly digest of whats new and exciting from us.</p>
                    <div className="d-flex w-100 gap-2">
                        <label for="newsletter1" className="visually-hidden">Email address</label>
                        <input id="newsletter1" type="text" className="form-control email-subs" placeholder="Email address"/>
                        <button className="btn btn-primary btn-footer" type="button">Subscribe</button>
                    </div>
                    </form>
                </div>
                </div>

                <div className="d-flex justify-content-between py-4 my-4 border-top">
                <p>© 2021 Company, Inc. All rights reserved.</p>
                <ul className="list-unstyled d-flex">
                    <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use href="#twitter"></use></svg></a></li>
                    <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use href="#instagram"></use></svg></a></li>
                    <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use href="#facebook"></use></svg></a></li>
                </ul>
                </div>
            </footer>
        </div>
        </>
    )
}

export default Footer