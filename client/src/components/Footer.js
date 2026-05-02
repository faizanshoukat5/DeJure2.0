import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faFax,
  faGlobe,
  faLocationDot,
  // faAngleUp,
  faMobileScreenButton,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container py-5">
          <div className="row g-4 align-items-start">
            <div className="col-lg-4 text-center text-lg-start">
              <Link to="/" className="d-inline-block">
                <img
                  src="/assets/logo-dejure-maroon.svg"
                  className="img-fluid logo-image"
                  alt="DeJure Advocates & Legal Consultants logo"
                  style={{ height: '70px', width: 'auto', maxWidth: '480px' }}
                  loading="eager"
                  fetchpriority="high"
                />
              </Link>
              <p className="content pt-3">
                DeJure Advocates & Legal Consultants pairs courtroom insight
                with strategic advisory work across Pakistan. We maintain
                dedicated teams in Islamabad and Lahore to support complex
                mandates for businesses, investors, and public institutions.
              </p>
            </div>
            <div className="col-lg-4">
              <h6 className="footer-heading text-uppercase">Islamabad Office</h6>
              <ul className="footer-contact-list">
                <li>
                  <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
                  <span>H. #8, St. #38, F-6/1</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faMobileScreenButton} className="contact-icon" />
                  <a href="tel:+923009462171">Cell: +92 300 946 2171</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                  <a href="tel:+92518311961">Phone: +92 51 831 1961</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                  <a href="mailto:isb@dejure.pk">Email: isb@dejure.pk</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faGlobe} className="contact-icon" />
                  <a
                    href="https://www.dejure.pk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.dejure.pk
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h6 className="footer-heading text-uppercase">Lahore Office</h6>
              <ul className="footer-contact-list">
                <li>
                  <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
                  <span>36-C, FCC, Gulberg-IV</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faMobileScreenButton} className="contact-icon" />
                  <a href="tel:+923466002071">Cell: +92 346 6002071</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                  <a href="tel:+924232802885">Phone: +92 42 3280 2885</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faFax} className="contact-icon" />
                  <span>Fax: +92 42 3540 3607</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                  <a href="mailto:lhr@dejure.pk">Email: lhr@dejure.pk</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faGlobe} className="contact-icon" />
                  <a
                    href="https://www.dejure.pk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.dejure.pk
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row g-3 align-items-center pt-4 footer-meta">
            <div className="col-md-6 text-center text-md-start">
              <span className="d-inline-flex align-items-center">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <a href="mailto:info@dejure.pk" className="ps-2">
                  info@dejure.pk
                </a>
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end">
              {/* Sitemap link intentionally removed per design request */}
            </div>
          </div>
          <div className="row g-4 pt-4">
            <div className="col-md-6">
              <h6 className="mb-2">Islamabad</h6>
              <div className="map-embed map-embed-footer shadow-sm">
                <iframe
                  src="https://www.google.com/maps?q=House+8,+Street+38,+F-6/1,+Islamabad,+Pakistan&output=embed"
                  title="DeJure Advocates & Legal Consultants Islamabad Office on Google Maps"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-md-6">
              <h6 className="mb-2">Lahore</h6>
              <div className="map-embed map-embed-footer shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3402.2842857142857!2d74.3360634!3d31.5244617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDMxJzI4LjEiTiA3NMKwMjAnMTkuMSJF!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  title="DeJure Advocates & Legal Consultants Lahore Office on Google Maps"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll up */}
        {/* <div>
          <a
            href="#top"
            aria-label="Navigheaza in partea de sus"
            className="scroll-to-top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <FontAwesomeIcon icon={faAngleUp} className="up-icon" size="2x" />
          </a>
        </div> */}
        {/* WhatsAppWidget */}
        <div>
          <WhatsAppWidget
            phoneNo="+923466002071"
            position="right"
            iconSize="50"
            iconColor="white"
            iconBgColor="#25D366"
            headerIcon="/assets/logo-dejure-maroon.svg"
            headerTxtColor="white"
            headerBgColor="#550909"
            headerTitle="DeJure Advocates & Legal Consultants"
            headerCaption="Typically replies in minutes"
            bodyBgColor="#bbb"
            chatPersonName="Support"
            chatMessage={
              <>
                Hello,
                <br />
                <br /> How can we assist you today?
              </>
            }
            footerBgColor="#999"
            btnBgColor="#c2b697"
            btnTxtColor="black"
          />
        </div>
        {/* Copyright */}
        <div>
          <div className="bg-dark d-flex align-items-center justify-content-center">
            <hr></hr>
            <p className="copyright mb-0">
              ©2026 DeJure Advocates & Legal Consultants. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
