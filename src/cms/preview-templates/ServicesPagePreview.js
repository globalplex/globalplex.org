import React from "react";

import { ServicesPageTemplate } from "../../templates/services";

import { getAssets } from "../../utils/functions";

const ServicesPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  getAssets(data, getAsset);

  return <ServicesPageTemplate {...data} />;
};

export default ServicesPagePreview;
