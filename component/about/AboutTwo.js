import React from 'react';
import FormOne from '../contact/FormOne';
import Accordion from 'react-bootstrap/Accordion';
import { FaSearch, FaLightbulb, FaBullseye } from 'react-icons/fa';


const AboutTwo = () => {
    return (
        <div className="section-padding">
            <div className="container">
            <div className="row">
                    <div className="col-lg-6">
                        <div className="why-choose-us">
                            <div className="section-heading heading-left">
                                <span className="subtitle">About Us</span>
                                <h3 className="title">Why Hextrap Solutions?</h3>
                                <p>We at Hextrap Solutions offer our clients All in One marketing solutions to get them the desired results on various digital channels. We apply our consumer-centric and result driven approach to keep our clients stay ahead of their competition.</p>
                            </div>
                            <Accordion defaultActiveKey="1">    
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><FaSearch /> Analyze</Accordion.Header>
                                    <Accordion.Body>
                                    Firstly we conduct an in depth study of any business and  analyze it's pain points to draft out it's actual needs.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><FaLightbulb /> Strategy</Accordion.Header>
                                    <Accordion.Body>
                                    Next we build a strong result driving strategy that will drive our clients real results from not just one but all platforms. We understand that each brand is different and hence we customise our plans to meet the requirements of every  business.  
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header><FaBullseye /> Action</Accordion.Header>
                                    <Accordion.Body>
                                    Finally we put our hard build strategies into action to reap the results our clients desire. We ensure that our actions have positive reactions that will grow any brand.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 offset-xl-1">
                        <div className="contact-form-box shadow-box mb--30">
                            <h3 className="title">Get a free Keystroke quote now</h3>
                            <FormOne />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutTwo;