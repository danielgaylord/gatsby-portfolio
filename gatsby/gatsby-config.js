require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `Dan Gaylord - Educator | Tinkerer`,
        siteUrl: `https://danielgaylord.github.io`,
        description: `This is the place I go to try new web things and share thoughts or anything else I feel people might not care about`
    },
    pathPrefix: "/gatsby-portfolio",
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Dan Gaylord - Educator | Tinkerer`,
                short_name: `DG Portfolio`,
                start_url: `/`,
                background_color: `#ffffff`,
                display: `minimal-ui`,
                icon: `src/assets/images/logo2-die.png`,
            },
        },
        {
            resolve: `gatsby-source-sanity`,
            options: {
                projectId: `aaw5oc1t`,
                dataset: `production`,
                token: process.env.SANITY_TOKEN,
            },
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
    ]
}