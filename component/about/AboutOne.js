import React from 'react';
import FormOne from '../contact/FormOne';


const AboutOne = () => {
    return (
        <section className="section section-padding-equal bg-color-light">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-us">
                            <div className="section-heading heading-left mb-0">
                                <span className="subtitle">About Us</span>
                                <h2 className="title mb--40">We do design, code &amp; develop.</h2>
                                <p>The digital platform opens opportunities for business to target and expand their reach on a larger scale than compared to traditional business methods. </p>
                                <p>As most of the population today is inclined towards digitalization, we stand out to be pioneers in marketing various businesses online and helping brands reach their potential customers and clients.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-6 offset-xl-1">
                        <div className="contact-form-box">
                            <h3 className="title">Get a free Keystroke quote now</h3>
                           <FormOne />
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group-6 list-unstyled">
                <li className="shape shape-1"><img src="/images/others/bubble-7.png" alt="Bubble" /></li>
                <li className="shape shape-2"><img src="/images/others/line-4.png" alt="line" /></li>
                <li className="shape shape-3"><img src="/images/others/line-5.png" alt="line" /></li>
            </ul>
        </section>
    )
}

export default AboutOne;