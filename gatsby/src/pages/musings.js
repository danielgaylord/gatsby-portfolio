import React from 'react';
import { StaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import styled from 'styled-components';

const MusingStyles = styled.div`
  a {
    text-decoration: none;
  }

  .musing-container {
    padding-bottom: 2rem;
    padding-top: 2rem;
  }
  
  .musing-pic {
    float: right;
    width: 30%;
  }
  .musing-text {
    float: right;
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
  const query = graphql`
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
              }
            }
            author {
              name
            }
          }
        }
      }
    }
  `

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
                publishedAt(formatString: "MM/DD/YYYY")
                categories {
                  title
                }
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
                <Link to={post.node.slug.current} key={post.node.id} className="musing-container">
                  <GatsbyImage image={post.node.mainImage.asset.gatsbyImageData} alt="Workstation that is not my own...only a place holder" className="musing-pic"/>
                  <div className="musing-text">
                    <h2>{post.node.title}</h2>
                    <p><small>By {post.node.author.name}</small></p>
                    <p>{post.node.body[0].children[0].text}</p>
                  </div>
                </Link>
              ))}
            </React.Fragment>
          </MusingStyles>
        )
      }}
    />
  )
}