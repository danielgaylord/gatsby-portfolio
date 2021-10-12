import React from 'react';
import { StaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import styled from 'styled-components';

const MusingStyles = styled.div`
  a {
    text-decoration: none;
  }

  .musing-container {
    display: inline-block;
    padding-bottom: 2rem;
    padding-top: 2rem;
    width: 100%;
  }
  
  .musing-pic {
    float: right;
    width: 30%;
    max-height: 20rem;
  }
  .musing-text {
    float: left;
    width: 60%;
  }

  @media screen and (max-width: 960px) {
    .musing-pic {
      float: none;
      margin: auto;
      display: block;
      width: 50%;
      margin-bottom: 2rem;
    }
    .musing-text {
      float: none;
      margin: auto;
      width: 90%;
    }
  }
`;

export default function MusingsPage() {
  return (
    <StaticQuery
      query = {graphql`
        {
          allSanityPost {
            edges {
              node {
                id
                slug {
                  current
                }
                title
                body {
                  children {
                    text
                    marks
                  }
                }
                author {
                  name
                }
                mainImage {
                  asset {
                    gatsbyImageData(placeholder: BLURRED, fit: FILLMAX)
                  }
                }
              }
            }
          }
        }
      `}

      render={data => {
        return (
          <MusingStyles>
            <div className="page-top center">
              <p className="headline">My collections of thoughts. Not a blog (maybe a blog...)</p>
            </div>
            <React.Fragment>
              {data.allSanityPost.edges.map(post => (
                <div className="musing-container">
                  <Link to={post.node.slug.current} key={post.node.id}>
                    <GatsbyImage image={post.node.mainImage.asset.gatsbyImageData} alt="post image, see image note(s)" className="musing-pic"/>
                    <div className="musing-text">
                      <h2>{post.node.title}</h2>
                      <p><small>By {post.node.author.name}</small></p>
                      <p>{post.node.body[0].children[0].text}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </React.Fragment>
          </MusingStyles>
        )
      }}
    />
  )
}