import React from 'react';
import Link from 'next/link';
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';


const AboutFour = () => {
    return (
            <div className="section section-padding case-study-featured-area">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-7 col-lg-6">
                        <div className="case-study-featured-thumb text-start">
                        <img src="/images/banner/banner-thumb-new-2.png" alt="travel" />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="case-study-featured">
                        <div className="section-heading heading-left">
                            <span className="subtitle">Who we are</span>
                            <h2 className="custom-tagline mb-4">Building a platform for world changers</h2>
                            <p>Hextrap Solutions is a complete DIGITAL MARKETING AGENCY established to aid businesses create their brand identity online.</p>
                            <p>As most of the population today is inclined towards digitalization, we stand out to be pioneers in marketing various businesses online and helping brands reach their potential customers and clients.</p>
                            {/* <Link href="#"><a className="axil-btn btn-fill-primary btn-large text-decoration-none">Read More</a></Link> */}
                        </div>
                        <div className="case-study-counterup">
                            <div className="single-counterup">
                            <h2 className="count-number">
                            <TrackVisibility once>
                                {({isVisible}) => (
                                    <span className="number count">
                                        {isVisible ? <CountUp end="3" duration={1} /> : null}
                                    </span>
                                )}  
                            </TrackVisibility>
                            <span className="symbol">+</span>
                            </h2>
                            <span className="counter-title">Years on the market</span>
                            </div>
                            <div className="single-counterup">
                            <h2 className="count-number">
                            <TrackVisibility once>
                                {({isVisible}) => (
                                    <span className="number count">
                                        {isVisible ? <CountUp end="10" duration={1} /> : null}
                                    </span>
                                )}  
                            </TrackVisibility>
                            <span className="symbol">+</span>
                            </h2>
                            <span className="counter-title">Projects delivered so far</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutFour;