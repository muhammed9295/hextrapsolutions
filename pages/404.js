import React from 'react';
import Head from "next/head";
import Link from "next/link";
import HeaderOne from '../common/header/HeaderOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function PageNotFound() {
  return (
    <>
    <Head>
        <title>404 - Page not found | Hextrap Solutions</title>
        <meta
          name="description"
          content="Hextrap Solutions is a complete DIGITAL MARKETING AGENCY established to aid businesses create their brand identity online."
        />
      </Head>
      <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <div className="error-page onepage-screen-area">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-6">
                        <AnimationOnScroll  animateIn="slideInUp" duration={1} delay={300} animateOnce={true}>
                            <div className="content">
                                <h2 className="title">Page not found</h2>
                                <p>The page you are looking could not be found, sorry!</p>
                                <Link href="/" ><a className="axil-btn btn-fill-primary">Go Back</a></Link>
                            </div>
                        </AnimationOnScroll>
                        </div>
                        <div className="col-lg-6">
                        <AnimationOnScroll  animateIn="zoomIn" duration={1} delay={300} animateOnce={true}>
                            <div className="thumbnail">
                                <img src="/images/others/404.png" alt="404" />
                            </div>
                        </AnimationOnScroll>
                        </div>
                        </div>
                    </div>
                    <ul className="shape-group-8 list-unstyled">
                        <li className="shape shape-1">
                            <img src="/images/others/bubble-9.png" alt="Bubble" />
                        </li>
                        <li className="shape shape-2">
                            <img src="/images/others/bubble-27.png" alt="Bubble" />
                        </li>
                        <li className="shape shape-3">
                            <img src="/images/others/line-4.png" alt="Line" />
                        </li>
                    </ul>
                </div>
            </main>
    </>
  )
}
