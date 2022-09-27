import React from 'react';
import Head from "next/head";
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import FormTwo from '../component/contact/FormTwo';
import SectionTitle from '../elements/section-title/SectionTitle';
import ContactLocation from '../component/contact/ContactLocation';

export default function Contact() {
  return (
    <>
    <Head>
        <title>Contact | Hextrap Solutions</title>
        <meta name="description" content="Hextrap Solutions is a complete DIGITAL MARKETING AGENCY established to aid businesses create their brand identity online." />        
      </Head>
      <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BreadCrumbOne 
                title="Contact"
                page="Contact"
                />

            <div className="section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="contact-form-box shadow-box mb--30">
                                <h3 className="title">Get a free Hextrap quote now</h3>
                                <FormTwo />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 offset-xl-1">
                            <div className="contact-info mb--100 mb_md--30 mt_md--0 mt--150">
                                <h4 className="title">Phone</h4>
                                <p>Our customer care is open from Mon-Sat, 10:00 am to 6:00 pm</p>
                                <h4><a className="phone-number text-decoration-none" href="tel:+919972218671">(+91) 99 72 21 8671</a></h4>
                            </div>
                            <div className="contact-info mb--30">
                                <h4 className="title">Email</h4>
                                <p>Our support team will get back to in 48-h during standard business hours.</p>
                                <h4><a className="phone-number text-decoration-none" href="mailto:info@example.com">info@hextrap.com</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="list-unstyled shape-group-12">
                    <li className="shape shape-1"><img src="/images/others/bubble-2.png" alt="Bubble" /></li>
                    <li className="shape shape-2"><img src="/images/others/bubble-1.png" alt="Bubble" /></li>
                    <li className="shape shape-3"><img src="/images/others/circle-3.png" alt="Circle" /></li>
                </ul>
            </div>

            <div className="section section-padding bg-color-dark overflow-hidden">
                <div className="container">
                    <SectionTitle 
                        subtitle="Find Us"
                        title="Our office"
                        description=""
                        textAlignment="heading-light-left"
                        textColor=""
                    />
                    <div className="row">
                        <ContactLocation />
                    </div>
                </div>
                <ul className="shape-group-11 list-unstyled">
                    <li className="shape shape-1"><img src="/images/others/line-6.png" alt="line" /></li>
                    <li className="shape shape-2"><img src="/images/others/circle-3.png" alt="line" /></li>
                </ul>
            </div>

            <FooterOne parentClass="pt--150 pt_lg--100 pt_md--80 pt_sm--60" />
            </main>
    </>
  )
}
