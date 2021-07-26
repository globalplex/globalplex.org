module.exports = {
  siteMetadata: {
    title: "Globalplex",
    description:
      "Globalplex aims to effectively equip people to excel in life and expand their influence",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/solutions`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-medium",
      options: {
        username: "globalplex",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        stages: ["develop"],
        extensions: "js",
        exclude: [".cache", "node_modules", "public"],
        options: {
          failOnError: false,
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Montserrat:400,700", "Muli:700"],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
  ],
};
