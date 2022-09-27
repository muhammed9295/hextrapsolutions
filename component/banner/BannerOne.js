import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import  Link  from "next/link";



export default function BannerOne() {
  return (
    <div className="banner banner-style-1">
      <div className="container">
        <div className="row align-items-end align-items-xl-start">
          <div className="col-lg-6">
            <div className="banner-content">
              {/* <AnimationOnScroll
                animateIn="fadeInUp"
                animateOnce={true}
                delay={0}
              > */}
                <h1 className="title">
                Connecting customers with your brand.
                </h1>
                <span className="subtitle">
                Our focus lies in bringing success to the brands we work with.
                </span>
                <Link href="/contact">
                  <a className="axil-btn btn-fill-primary btn-large text-decoration-none">Get Started</a>
                </Link>
              {/* </AnimationOnScroll> */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-thumbnail">
              <AnimationOnScroll
                animateIn="zoomIn"
                duration={2}
                delay={0}
                animateOnce={true}
              >
                <div className="large-thumb">
                  <img src="/images/banner/window.png" alt="Laptop" />
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn="slideInRight"
                duration={2}
                delay={0}
                animateOnce={true}
              >
                <div className="large-thumb-2">
                  <img src="/images/banner/flying.png" alt="Laptop" />
                </div>
              </AnimationOnScroll>
              <ul className="list-unstyled shape-group">
                <li className="shape shape-1">
                  <AnimationOnScroll
                    animateIn="slideInLeft"
                    duration={1}
                    delay={0}
                    animateOnce={true}
                  >
                    <img src="/images/banner/chat-group.png" alt="chat" />
                  </AnimationOnScroll>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ul className="list-unstyled shape-group-21">
        <li className="shape shape-1">
          <img src="/images/others/bubble-39.png" alt="Bubble" />
        </li>
        <li className="shape shape-2">
          <img src="/images/others/bubble-38.png" alt="Bubble" />
        </li>
        <li className="shape shape-3">
          <img src="/images/others/bubble-14.png" alt="Bubble" />
        </li>
        <li className="shape shape-4">
          <img src="/images/others/bubble-14.png" alt="Bubble" />
        </li>
        <li className="shape shape-5">
          <img src="/images/others/bubble-14.png" alt="Bubble" />
        </li>
        <li className="shape shape-6">
          <img src="/images/others/bubble-40.png" alt="Bubble" />
        </li>
        <li className="shape shape-7">
          <img src="/images/others/bubble-41.png" alt="Bubble" />
        </li>
      </ul>
    </div>
  );
};


