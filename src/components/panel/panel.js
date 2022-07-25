import React from "react";
import backgroundHighlightColors from "../../lib/backgroundHighlightColors";

const Panel = ({ children, className, title, highlightColors }) => {
  if (typeof highlightColors !== "undefined") {
    if (Array.isArray(highlightColors)) {
    } else {
      highlightColors = [highlightColors];
    }
  } else {
    highlightColors = [];
  }
  return (
    <div
      className={
        "bg-white border border-gray-100 dark:border-gray-900 dark:bg-gray-800 rounded shadow-lg flex flex-col space-y-3 p-8 h-fit " +
        className
      }
    >
      <h2 className={"text-xl font-bold flex flex-row items-center capitalize"}>
        {highlightColors.map((color, i) => {
          color = backgroundHighlightColors(color);
          return (
            <span
              key={i}
              className={
                "w-2 h-2 rounded-full mr-2 " + color.backgroundHighlightColor
              }
            />
          );
        })}

        {title}
      </h2>
      {children}
    </div>
  );
};

export default Panel;
