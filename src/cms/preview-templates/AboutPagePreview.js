import React from "react";

import { AboutPageTemplate } from "../../templates/about";

import { getAssets } from "../../utils/functions";

const AboutPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  getAssets(data, getAsset);

  return <AboutPageTemplate {...data} />;
};

export default AboutPagePreview;
