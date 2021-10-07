import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react'

const PostStyles = styled.div`
    .post-pic {
        display: block;
        margin: auto;
        width: 50%;
    }
    .author-pic {
        width: 4rem;
        border-radius: 50%;
        transform: translateY(-1rem);
    }
    .post-text {
        padding-top: 2rem;
        padding-bottom: 2rem;
        margin: auto;
        width: 90%;
    }
`;

export default function MusingsPage(props) {
    return (
        <PostStyles>
            <GatsbyImage image={props.pageContext.image} alt="Mostly unrelated opening picture for flair purposes" className="post-pic"/>
            <div className="page-top center">
                <p className="headline">{props.pageContext.title}</p>
            </div>
            <BlockContent className="post-text" blocks={props.pageContext.content} />
            <p className="center">Published by <GatsbyImage image={props.pageContext.authorImage} alt={props.pageContext.author} className="author-pic"/> on {props.pageContext.published}</p>
            <p className="center">Filed under {props.pageContext.categories.map((item, index) => (<em>{(index ? ', ' : '') + item.title}</em>))}</p>
        </PostStyles>
    )
}
