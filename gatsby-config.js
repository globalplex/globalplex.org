module.exports = {
  siteMetadata: {
    title: "Globalplex",
    description:
      "Globalplex aims to effectively equip people to excel in life and expand their influence",
    siteUrl: "https://globalplex.org",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    "gatsby-transformer-remark",
  ],
};
