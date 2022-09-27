import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';
import ProcesstData from "../../data/process/WebauditProcess.json";
// import Tilty from 'react-tilty';

const getProcesstData = ProcesstData;

const WebauditProcess = () => {
    return (
        
        <div className="section section-padding bg-color-light pb--70">
            <SectionTitle 
                subtitle="Process"
                title="Our Web Audit process"
                description=""
                textAlignment=""
                textColor="mb--90"
            />
            <div className="container">
                {getProcesstData.map((data) => (
                    <div key={data.id} className={`process-work ${(data.id % 2  === 0) ? "content-reverse" : ""}`}>
                        {/* <Tilty perspective={2000}> */}
                            <div className="thumbnail">
                                <img src={ data.thumb} alt="Thumbnail" />
                            </div>
                        {/* </Tilty> */}
                    <div className="content">
                        <span className="subtitle">{data.subtitle}</span>
                        <h3 className="title">{data.title}</h3>
                        <p>{data.paragraph}</p>
                    </div>
                </div>
                ))}
            </div>
            <ul className="shape-group-17 list-unstyled">
                <li className="shape shape-1"><img src="/images/others/bubble-24.png" alt="Bubble" /></li>
                <li className="shape shape-2"><img src="/images/others/bubble-23.png" alt="Bubble" /></li>
                <li className="shape shape-3"><img src="/images/others/line-4.png" alt="Line" /></li>
                <li className="shape shape-4"><img src="/images/others/line-5.png" alt="Line" /></li>
                <li className="shape shape-5"><img src="/images/others/line-4.png" alt="Line" /></li>
                <li className="shape shape-6"><img src="/images/others/line-5.png" alt="Line" /></li>
            </ul>
        </div>
    )
}

export default WebauditProcess;