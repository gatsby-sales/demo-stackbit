import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  const headComponents = [
    <link
      rel="stylesheet"
      key="inter-stylesheet"
      href="https://rsms.me/inter/inter.css"
    />,
  ];
  setHeadComponents(headComponents);
};
