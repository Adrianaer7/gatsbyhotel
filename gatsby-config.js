module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,  //es un plugin que permite acceder a los archivos del sistema
      options: {
        name: `images`, //es el nombre de la carpeta de donde voy a acceder a las imagenes. Se puede cambiar el nombre
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`, //estos dos plugins me permiten optimizar el tamaño de mis imagenes en localhost:___graphql
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "d642a2c8e54a692f99982b567c3815"  //traigo el token de la datocms (read-only API token)
      }
    }
  ],
}
