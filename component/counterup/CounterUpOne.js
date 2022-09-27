import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';
import CounterUp from '../../component/counterup/CounterUp';


const CounterUpOne = () => {
    return (
        <div className="section section-padding bg-color-dark">
            <div className="container">
            <SectionTitle 
                    subtitle="Featured Case Study"
                    title="Design startup movement"
                    description="Our focus lies in bringing success to the brands we work with. We target our audiences online through various marketing channels to bring our clients leads and returns on investment."
                    textAlignment="heading-light"
                    textColor=""
                />
                <div className="row">
                    <CounterUp colSize="col-lg-3 col-6" layoutStyle="" evenTopMargin="" />
                </div>
            </div>
        </div>
    )
}


export default CounterUpOne;