import React from "react";
import useResources from "../../hooks/UseResources";
export default function HelpPage() {
  const resourses = useResources("HelpText");
  if (!resourses) return null;
  function createMarkup(content) {
    return { __html: content };
  }
  return (
    <div
      className="p-5"
      dangerouslySetInnerHTML={createMarkup(resourses.Text)}
    />
  );
}
