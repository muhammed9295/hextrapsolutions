import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import BcrumbBannerOne from "../elements/breadcrumb/BcrumbBannerOne";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
// import SectionTitle from "../elements/section-title/SectionTitle";
// import ProjectPropOne from "../component/project/itemProp/ProjectPropOne";
import { slugify } from "../utils";
import ServiceData from "../data/service/ServiceMain.json";
import ProjectData from "../data/project/ProjectData.json";
import AboutTwo from "../component/about/AboutTwo";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import WebauditProcess from "../component/process/WebauditProcess";

const allServiceData = ServiceData;
const getProjectData = ProjectData;

export default function WebAuditReport() {
  const params = useRouter();
  const serviceSlug = params.slug;

  const getServiceData = allServiceData.filter(
    (data) => slugify(data.title) === serviceSlug
  );
  const detailsService = getServiceData[0];

  return (
    <>
    <Head>
        <title>Web Audit Report | Hextrap Solutions</title>
        <meta
          name="description"
          content="Hextrap Solutions is a complete DIGITAL MARKETING AGENCY established to aid businesses create their brand identity online."
        />
      </Head>
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderOne />
        <BcrumbBannerOne
          title="Web Audit Report"
          // paragraph ={detailsService.description}
          styleClass=""
          mainThumb="/images/banner/web-audit-report.png"
        />
        <AboutTwo />

        <WebauditProcess />
        {/* <div className="section section-padding">
          <div className="container">
            <SectionTitle
              subtitle="Our Project"
              title="Featured Designs"
              description=""
              textAlignment=""
              textColor=""
            />
            <div className="row row-35">
              {getProjectData.slice(0, 2).map((data) => (
                <div className="col-md-6" key={data.id}>
                  <ProjectPropOne projectStyle="" portfolio={data} />
                </div>
              ))}
            </div>
          </div>
          <ul className="shape-group-16 list-unstyled">
            <li className="shape shape-1">
              <img src="/images/others/circle-2.png" alt="circle" />
            </li>
            <li className="shape shape-3">
              <img src="/images/others/bubble-1.png" alt="Line" />
            </li>
          </ul>
        </div> */}
        <CtaLayoutOne />
        <FooterOne parentClass="" />
      </main>
    </>
  );
}
