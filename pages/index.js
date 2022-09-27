import React from "react";
import Head from "next/head";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import AboutOne from "../component/about/AboutOne";
import BannerOne from "../component/banner/BannerOne";
import BlogOne from "../component/blog/BlogOne";
// import BrandOne from "../component/brand/BrandOne";
import CounterUpOne from "../component/counterup/CounterUpOne";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
// import PricingOne from "../component/pricing/PricingOne";
// import ProjectOne from "../component/project/ProjectOne";
import ServicePropOne from "../component/service/ServicePropOne";
import TestimonialOne from "../component/testimonial/TestimonialOne";
import SectionTitle from "../elements/section-title/SectionTitle";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";

export default function Home() {
  return (
    <>
    <Head>
    <title>Digital Marketing Agency | Hextrap Solutions</title>
          <meta
            name="keywords"
            content="digital marketing agency,digital marketing services,digital marketing company, digital marketing website,digital marketing platforms, digital marketing for real estate, social media marketing packages, website development design, website development and design, digital marketing, social media marketing, web development, digital marketing packages, graphic design portfolio, search engine optimization website, search engine optimization specialist, search engine optimization price, search engine optimize, seo analyst, seo analysis, seo services, seo optimization, seo website, seo strategy, search engine optimization, search engine optimization digital marketing, search engine optimization for business, graphic design website, graphic design services, graphic design near me, graphic design agency, graphic design marketing"
          />
          <meta
            name="description"
            content="Hextrap Solutions is a complete digital marketing agency. We offer services like digital marketing, website development & design, social media marketing, SEO."
          />
    </Head>
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderOne />
        <BannerOne />
        <div className="section section-padding-2 bg-color-dark">
          <div className="container">
            <SectionTitle
              subtitle="What We Can Do For You"
              title="Services we can help you with"
              description=""
              textAlignment="heading-light-left"
              textColor=""
            />
            <div className="row">
              <ServicePropOne
                colSize="col-xl-4 col-md-6"
                serviceStyle=""
                itemShow="12"
              />
            </div>
          </div>
          <ul className="list-unstyled shape-group-10">
            <li className="shape shape-1">
              <img src="/images/others/line-9.png" alt="Circle" />
            </li>
            <li className="shape shape-2">
              <img src="/images/others/bubble-42.png" alt="Circle" />
            </li>
            <li className="shape shape-3">
              <img src="/images/others/bubble-43.png" alt="Circle" />
            </li>
          </ul>
        </div>
        <AboutOne />
        {/* <ProjectOne /> */}
        <CounterUpOne />
        <TestimonialOne />
        {/* <div className="section bg-color-light section-padding">
          <div className="container">
            <SectionTitle
              subtitle="Pricing Plan"
              title="We’ve built solutions for..."
              description="Flexible pricing options for freelancers
                        and design teams."
              textAlignment=""
              textColor=""
            />
            <PricingOne />
          </div>
          <ul className="list-unstyled shape-group-3">
            <li className="shape shape-1">
              <img src="/images/others/line-1.png" alt="shape" />
            </li>
            <li className="shape shape-2">
              <img src="/images/others/bubble-4.png" alt="shape" />
            </li>
          </ul>
        </div> */}
        {/* <BrandOne /> */}
        <BlogOne />
        <CtaLayoutOne />
        <FooterOne parentClass="" />
      </main>
    </>
  );
}
