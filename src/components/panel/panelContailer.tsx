import React from "react";

export const PanelContainer = ({ children, className }) => {
  return (
    <div className={"flex flex-col space-y-8 " + className}>{children}</div>
  );
};
