import React from "react";
import useResources from "../../hooks/UseResources";
export default function WogInfoPage() {
  const resourses = useResources("WhatIsWordOfGodText");
  if (!resourses) return null;
  function createMarkup(content) {
    return { __html: content };
  }
  return (
    <div
      className="p-5 mb-5 pb-5"
      dangerouslySetInnerHTML={createMarkup(resourses.Text)}
    />
  );
}
