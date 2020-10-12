import React from "react";

export const formatParagraph = (str) => (
  <>
    {str.split("\n").map((item) => (
      <p>{item}</p>
    ))}
  </>
);

export const getId = (str) =>
  str.toLowerCase().replace(/\W/g, " ").replace(/ /g, "-");
