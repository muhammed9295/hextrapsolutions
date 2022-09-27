import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';
import TestimonialPropOne from './TestimonialPropOne';

const TestimonialOne = () => {
    return (
        <div className="section section-padding">
            <div className="container">
                <SectionTitle 
                    subtitle="Testimonial"
                    title="From getting started"
                    description="Find out what our clients have to say about us in the testimonials below."
                    textAlignment="heading-left"
                    textColor=""
                />
                <div className="row">
                    <TestimonialPropOne colSize="col-lg-4" itemShow="2"/>
                </div>
            </div>
            <ul className="shape-group-4 list-unstyled">
                <li className="shape-1">
                    <img src="/images/others/bubble-1.png" alt="Bubble" />
                </li>
            </ul>
        </div>
    )
}

export default TestimonialOne;