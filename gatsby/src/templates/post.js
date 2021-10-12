import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react'

const PostStyles = styled.div`
    .emoji {
        font-size: 3rem;
        padding-bottom: .5rem;
    }
    .tooltip {
        position: relative;
        display: inline-block;
        cursor: help;
    }
    .tooltip .tooltiptext {
        visibility: hidden;
        width: 12rem;
        background-color: black;
        color: #fff;
        text-align: center;
        font-size: 1.5rem;
        padding: .5rem 0;
        border-radius: 6px;
        top: 100%;
        left: 50%;
        margin-left: -6rem;
        position: absolute;
        z-index: 1;
    }
    .tooltip:hover .tooltiptext {
        visibility: visible;
    }
    .tooltip .tooltiptext::after {
        content: " ";
        position: absolute;
        bottom: 100%;
        left: 50%;
        margin-left: -.5rem;
        border-width: .5rem;
        border-style: solid;
        border-color: transparent transparent black transparent;
    }
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
            <p className="center">Published by <span className="tooltip"><GatsbyImage image={props.pageContext.authorImage} alt={props.pageContext.author} className="author-pic"/><span className="tooltiptext">{props.pageContext.author}</span></span> on {props.pageContext.published}</p>
            <p className="center">Filed under {props.pageContext.categories.map((item, index) => (<span class="emoji tooltip">{(index ? ' ' : '') + item.emoji}<span class="tooltiptext">{item.title}</span></span>))}</p>
        </PostStyles>
    )
}
