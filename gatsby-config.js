module.exports = {
  siteMetadata: {
    title: `Zuckermann | Portfolio`,
    description: `Showcase of accomplishments and projects by Matt Zuckermann`,
    author: `Matt Zuckermann`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/docs`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-background-image`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: `./src/images/icons/font-awesome_user-circle.png`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#effffc`,
        theme_color: `#9e94a8`,
        display: `minimal-ui`,
        icon: `src/images/icons/font-awesome_user-circle.png`,
      },
    },
  ],
}
