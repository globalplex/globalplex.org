import React from "react";

export const formatParagraph = (str) => (
  <>
    {str.split("\n").map((item, idx) => (
      <p key={idx}>{item}</p>
    ))}
  </>
);

export const getId = (str) =>
  str.toLowerCase().replace(/\W/g, " ").replace(/ /g, "-");

export const getAssets = (obj, getAsset) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] && typeof obj[key] === "object") {
      getAssets(obj[key], getAsset);
      return;
    } else if (key.toLowerCase().endsWith("image")) {
      obj[key] = getAsset(obj[key]);
    }
  });
};
