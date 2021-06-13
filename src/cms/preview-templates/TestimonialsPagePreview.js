import React from "react";

import { TestimonialsPageTemplate } from "../../templates/testimonials";

import { getAssets } from "../../utils/functions";

const TestimonialsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  getAssets(data, getAsset);

  return <TestimonialsPageTemplate {...data} />;
};

export default TestimonialsPagePreview;
