import React from "react";
import backgroundHighlightColors from "../../lib/backgroundHighlightColors";

const Button = ({ highlightColor, text, action, toggle }) => {
  let colorClass = backgroundHighlightColors(highlightColor);
  return (
    <button
      className={
        "group flex flex-row items-center space-x-1 bg-gray-100 dark:bg-gray-700 pt-1 pb-1 pl-4 pr-4 rounded-full transition-colors" +
        (toggle
          ? " " +
            colorClass.backgroundHighlightColor +
            " " +
            colorClass.backgroundHighlightColorDark
          : " " + colorClass.backgroundHighlightColorHover)
      }
      onClick={action}
    >
      <span
        className={
          "w-2 h-2 rounded-full group-hover:bg-gray-100 dark:group-hover:bg-gray-700 " +
          (toggle
            ? "bg-gray-100 dark:bg-gray-700"
            : colorClass.backgroundHighlightColor)
        }
      />
      <p className={"capitalize"}>{text}</p>
    </button>
  );
};

export default Button;
