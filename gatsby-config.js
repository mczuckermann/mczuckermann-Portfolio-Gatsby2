module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `Web Development Portfolio of Matt Zuckermann.`,
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
        path: `${__dirname}/src/components/docs`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: `./src/images/font-awesome_user-circle.png`,
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
        icon: `src/images/font-awesome_user-circle.png`,
      },
    },
  ],
}
