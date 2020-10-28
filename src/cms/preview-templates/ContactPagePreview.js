import React from "react";

import { ContactPageTemplate } from "../../templates/contact";

const ContactPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  return <ContactPageTemplate {...data} />;
};

export default ContactPagePreview;
