module.exports = {
  siteMetadata: {
    title: `Walter Selvakumar`,
    description: `Portfolio website of Walter Vetrivel Selvakumar, a web developer`,
    author: `Walter Selvakumar`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
  ],
};
