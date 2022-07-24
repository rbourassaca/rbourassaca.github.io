import React from "react";
import Panel from "../panel";
import Button from "../button";

const Filter = ({ categories }) => {
  return (
    <Panel title={"Filtrer les éléments"}>
      <div className={"flex flex-row space-x-2"}>
        {categories.map((cat) => (
          <Button key={cat.id} highlightColor={cat.color} text={cat.title} />
        ))}
      </div>
    </Panel>
  );
};

export default Filter;
