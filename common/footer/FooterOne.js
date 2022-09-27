import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedin,
  FaInstagram,
  FaVimeoV,
  FaDribbble,
  FaBehance,
  FaEnvelopeOpen,
} from "react-icons/fa";
import ServiceData from "../../data/service/ServiceMain.json";
import { slugify } from "../../utils";

const getServiceData = ServiceData;

const FooterOne = ({ parentClass }) => {
  return (
    <footer className={`footer-area ${parentClass}`}>
      <div className="container">
        <div className="footer-top">
          <div className="footer-social-link">
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://www.facebook.com/hextrap"
                  className="text-decoration-none"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/HextrapSolution"
                  className="text-decoration-none"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://in.pinterest.com/hextrapsolutions/"
                  className="text-decoration-none"
                >
                  <FaPinterestP />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/hextrap/"
                  className="text-decoration-none"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/hextrap_solutions/"
                  className="text-decoration-none"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://dribbble.com/hextrap_solutions"
                  className="text-decoration-none"
                >
                  <FaDribbble />
                </a>
              </li>
              <li>
                <a
                  href="https://www.behance.net/hextrapsolution/"
                  className="text-decoration-none"
                >
                  <FaBehance />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-main">
          <div className="row">
            <div className="col-xl-6 col-lg-5">
              <div className="footer-widget border-end">
                <div className="footer-newsletter">
                  <h2 className="title">Get in touch!</h2>
                  <p>Need something? Hextrap solution is happy to help you!</p>
                  <form>
                    <div className="input-group">
                      <span className="mail-icon">
                        <FaEnvelopeOpen />{" "}
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email address"
                      />
                      <button className="subscribe-btn" type="submit">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="row">
                <div className="col-sm-6">
                  <div className="footer-widget">
                    <h6 className="widget-title">Services</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        {getServiceData.slice(0, 5).map((data, index) => (
                          <li key={index}>
                            <Link href={`/${slugify(data.title)}`}>
                              <a className="text-decoration-none">
                                {data.title}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="footer-widget">
                    <h6 className="widget-title">Resourses</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        <li>
                          <Link href="/about">
                            <a className="text-decoration-none">About Us</a>
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link href="/blog">
                            <a className="text-decoration-none">Blog</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog">
                            <a className="text-decoration-none">Our Work</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="footer-widget">
                    <h6 className="widget-title">Support</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        <li>
                          <Link href="/contact">
                            <a className="text-decoration-none">Contact</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/privacy-policy">
                            <a className="text-decoration-none">
                              Privacy Policy
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/terms-and-conditions">
                            <a className="text-decoration-none">
                              Terms & Conditions
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-md-6">
              <div className="footer-copyright">
                <span className="copyright-text">
                  © {new Date().getFullYear()}. All rights reserved by{" "}
                  <a href="https://hextrap.com/">Hextrap</a>.
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-bottom-link">
                <ul className="list-unstyled">
                  <li>
                    <Link href="/privacy-policy">
                      <a className="text-decoration-none">Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-and-conditions">
                      <a className="text-decoration-none">Terms & Conditions</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
