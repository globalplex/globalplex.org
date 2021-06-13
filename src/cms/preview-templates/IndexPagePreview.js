import React from "react";

import { IndexPageTemplate } from "../../templates/index";

import { getAssets } from "../../utils/functions";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  getAssets(data, getAsset);

  return <IndexPageTemplate {...data} />;
};

export default IndexPagePreview;
