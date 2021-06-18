import React from "react";

import { ContactPageTemplate } from "../../templates/contact";

const ContactPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  return <ContactPageTemplate {...data} />;
};

export default ContactPagePreview;
