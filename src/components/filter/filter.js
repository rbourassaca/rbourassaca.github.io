import React, { useState } from "react";
import Panel from "../panel";
import Button from "../button";

const Filter = ({ categories, setProjectState, projects }) => {
  const [toggle, setToggle] = useState([]);

  const filterCategories = (id) => {
    if (toggle.includes(id) === false) {
      setToggle((prevState) => [...prevState, id]);
      setProjectState((prevState) => [
        ...prevState.filter((item) => {
          let result = false;
          item.categories.forEach((cat) => {
            if (result === false) {
              result = cat.categories_id.id === id;
            }
          });
          return result;
        }),
      ]);
    } else {
      setToggle((prevState) => [
        ...prevState.filter((item) => {
          return item !== id;
        }),
      ]);
      setProjectState((prevState) => {
        let arr = [...new Set([...prevState, ...projects])];
        if (toggle.length > 1) {
          return arr.filter((item) => {
            let result = false;
            item.categories.forEach((cat) => {
              if (result === false) {
                result = cat.categories_id.id !== id;
              }
            });
            return result;
          });
        } else {
          return arr;
        }
      });
    }
  };

  return (
    <Panel title={"Filtrer les éléments"}>
      <p>Catégories:</p>
      <div className={"flex flex-row space-x-2 items-center"}>
        {categories.map((cat) => (
          <Button
            key={cat.id}
            highlightColor={cat.color}
            text={cat.title}
            action={() => filterCategories(cat.id)}
            toggle={toggle.includes(cat.id)}
          />
        ))}
      </div>
    </Panel>
  );
};

export default Filter;
