const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://mattzuckermann.dev",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    siteUrl,
    title: `Zuckermann | Portfolio`,
    description: `Showcase of accomplishments and projects by Matt Zuckermann`,
    author: `Matt Zuckermann`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
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
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/resume`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zuckermann Portfolio`,
        short_name: `MZ Site`,
        start_url: `/?homescreen=1`,
        background_color: `#014949`,
        theme_color: `#e4d2d1`,
        display: `minimal-ui`,
        icon: "src/images/zuckermannHeadShotSquare.png",
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
  ],
}
