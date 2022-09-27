import React from 'react';
import  Link  from 'next/link';
import { FaAngleRight } from "react-icons/fa";
import BlogData from "../../data/blog/BlogData.json";


const allBlogData = BlogData;

const BlogListOne = ({colSize, itemShow}) => {
    return (
        <>
            {allBlogData.slice(0, itemShow).map((data) => (
                <div className={`${colSize}`} key={data.id}>
                    <div className={`blog-list ${(data.id % 2  === 0) ? "border-start" : ""}`}>
                        <div className="post-thumbnail">
                            <Link href={`/blog-details/${data.id}`}><a className='text-decoration-none'>
                                <img src={`${data.thumb}`} alt="Blog Post" /></a>
                            </Link>
                        </div>
                        <div className="post-content">
                            <h5 className="title">
                                <Link href={`/${data.id}`}><a className='text-decoration-none'>
                                    {data.title}</a>
                                </Link>
                            </h5>
                            <p>{data.excerpt}</p>
                            <Link href={`/${data.id}`}><a className='text-decoration-none more-btn'>
                                Learn more <FaAngleRight /></a>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default BlogListOne;