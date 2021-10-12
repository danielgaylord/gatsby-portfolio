exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
  
    const result = await graphql(`
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
                            emoji
                        }
                        _rawBody
                        author {
                            name
                            image {
                                asset {
                                    gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
                                }
                            }
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
    `)
  
    if (result.errors) {
      throw result.errors
    }
  
    const posts = result.data.allSanityPost.edges || []
    posts.forEach((edge, index) => {
      const path = `/musings/${edge.node.slug.current}`
  
      createPage({
        path,
        component: require.resolve('./src/templates/post.js'),
        context: {
            slug: edge.node.slug.current,
            id: edge.node.id,
            title: edge.node.title,
            author: edge.node.author.name,
            authorImage: edge.node.author.image.asset.gatsbyImageData,
            published: edge.node.publishedAt,
            categories: edge.node.categories,
            content: edge.node._rawBody,
            image: edge.node.mainImage.asset.gatsbyImageData,
        },
      })
    })
  }