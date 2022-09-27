import React from 'react';
import Link from 'next/link';



const BreadCrumbOne = ({title, page}) => {
    return (
        <div className="breadcrum-area">
            <div className="container">
                <div className="breadcrumb">
                    {/* <ul className="list-unstyled">
                        <li>
                            <Link href="/"><a>Home</a></Link>
                        </li>
                        <li className="active" dangerouslySetInnerHTML={{__html: page}}></li>
                    </ul> */}
                    <h1 className="title h2" dangerouslySetInnerHTML={{__html: title}}></h1>
                </div>
            </div>
            <ul className="shape-group-8 list-unstyled">
                <li className="shape shape-1"><img src="/images/others/bubble-9.png" alt="Bubble" /></li>
                <li className="shape shape-2"><img src="/images/others/bubble-11.png" alt="Bubble" /></li>
                <li className="shape shape-3"><img src="/images/others/line-4.png" alt="Line" /></li>
            </ul>
        </div>
    )
}

export default BreadCrumbOne;