import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';

const Datas = [
    {
        id: 1,
        title: "Exceed clients’ and colleagues’ expectations",
        para: "Yes, we agree that there are many marketing agencies that do the same thing. But what have we got to offer you? What makes us different from others?"
    },
    {
        id: 2,
        title: "Take ownership and question the status quo in a constructive manner",
        para: "We offer you complete digital marketing package all in one place at the best price."
    },
    {
        id: 3,
        title: "Be brave, curious and experiment – learn from all successes and failures",
        para: "We keep updating our marketing strategies and use them for our clients to create valuable business that get desired results."
    },
    {
        id: 4,
        title: "Act in a way that makes all of us proud",
        para: "We make every penny count by respecting our clients investment and involve them throughout the marketing journey to help them understand it better."
    },
    {
        id: 5,
        title: "Build an inclusive, transparent and socially responsible culture",
        para: "We develop growth-oriented online marketing campaigns that  have only goal: To increase your revenues through qualified customers"
    }
]




const AboutThree = () => {
    return (
        <div className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20">
            <div className="container">
                <SectionTitle 
                    subtitle="Our Values"
                    title="Why should you work with us?"
                    description=""
                    textAlignment="heading-left heading-light-left mb--100"
                    textColor=""
                />

                <div className="row">
                    {Datas.map((data) => (
                        <div className="col-lg-4" key={data.id}>
                            <div className="about-quality">
                                <h3 className="sl-number">{data.id}</h3>
                                <h5 className="title">{data.title}</h5>
                                <p>{data.para}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <ul className="list-unstyled shape-group-10">
                <li className="shape shape-1"><img src="/images/others/circle-1.png" alt="Circle" /></li>
                <li className="shape shape-2"><img src="/images/others/line-3.png" alt="Circle" /></li>
                <li className="shape shape-3"><img src="/images/others/bubble-5.png" alt="Circle" /></li>
            </ul>
        </div>
    )
}

export default AboutThree;