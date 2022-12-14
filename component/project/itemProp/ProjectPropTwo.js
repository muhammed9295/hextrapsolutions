import React from 'react';
import  Link  from 'next/link';
import { slugify } from '../../../utils';


const PropOne = ({projectStyle, portfolio}) => {
	
    return (
		<>
			<div className={`project-grid ${projectStyle}`}>
				<div className="thumbnail">
				<Link href={process.env.PUBLIC_URL + `/project-details/${slugify(portfolio.title)}`}>
					<a><img src={process.env.PUBLIC_URL + portfolio.image} alt="icon" /></a>
				</Link>
				</div>
				<div className="content">
				<span className="subtitle">
					{portfolio.category.map((cat, i) => (
						<span key={i}>{cat}</span>
					))}
				</span>
				<h3 className="title"> 
					<Link href={process.env.PUBLIC_URL + `/project-details/${slugify(portfolio.title)}`}><a>{portfolio.title}</a></Link>
				</h3>
				</div>
			</div>
		</>
    )
}

export default PropOne;