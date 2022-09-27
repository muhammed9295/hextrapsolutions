import React from "react";
import Link from "next/link";

const AboutFive = () => {
  return (
    <div className="section-padding-equal">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="about-team">
              <div className="thumbnail">
                <img src="/images/banner/banner-thumb-new-3.png" alt="thumbnail" />
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-team">
              <div className="section-heading heading-left">
                <span className="subtitle">What we do?</span>
                <h2 className="custom-tagline mb-4">
                Think Digital, Think Hextrap.
                </h2>
                <p>
                  Our focus lies in bringing success to the brands we work with.
                  We target our audiences online through various marketing
                  channels to bring our clients leads and returns on investment.
                  We don't just market any business but also make full efforts
                  to create brand identity that will impact globally. The
                  digital platform opens opportunities for business to target
                  and expand their reach on a larger scale than compared to
                  traditional business methods.
                </p>
                <Link href="/contact">
                  <a className="axil-btn btn-large btn-fill-primary text-decoration-none">
                    Get in Touch
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFive;
