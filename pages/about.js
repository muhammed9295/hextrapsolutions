import React from 'react';
import Head from "next/head";
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import AboutThree from '../component/about/AboutThree';
import AboutFour from '../component/about/AboutFour';
import AboutFive from '../component/about/AboutFive';

export default function about() {
  return (
    <>
    <Head>
        <title>About us | Hextrap Solutions</title>
        <meta name="description" content="Hextrap Solutions is a complete DIGITAL MARKETING AGENCY established to aid businesses create their brand identity online." />        
      </Head>
      <ColorSwitcher />
      <main className="main-wrapper">
                <HeaderOne />
                <BcrumbBannerOne 
                title="One of the fastest growing agency"
                paragraph ="We design and develop web and mobile applications for our clients worldwide."
                styleClass="thumbnail-4"
                mainThumb="/images/banner/banner-thumb-new.png"
                />
                <AboutFour />
                <AboutThree />
                <AboutFive />                
                <CtaLayoutOne />
                <FooterOne parentClass="" />
            </main>
    </>
  )
}
