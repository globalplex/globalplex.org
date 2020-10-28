import CMS from "netlify-cms-app";

import IndexPagePreview from "./preview-templates/IndexPagePreview";
import AboutPagePreview from "./preview-templates/AboutPagePreview";
import ServicesPagePreview from "./preview-templates/ServicesPagePreview";
import TestimonialsPagePreview from "./preview-templates/TestimonialsPagePreview";
import ContactPagePreview from "./preview-templates/ContactPagePreview";

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("services", ServicesPagePreview);
CMS.registerPreviewTemplate("testimonials", TestimonialsPagePreview);
CMS.registerPreviewTemplate("contact", ContactPagePreview);
