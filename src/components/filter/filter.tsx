import React, { useState } from "react";
import Panel from "../panel";
import Button from "../button";
import filterCategories from "../../lib/filter";
import { ProjectType } from "../project/type";

type FilterType = {
	categories: [
		{
			id: string;
			color: string;
			title: string;
		}
	];
	setProjectState: Function;
	projects: ProjectType;
};

const Filter = ({ categories, setProjectState, projects }: FilterType) => {
	const [toggle, setToggle] = useState<[string?]>([]);

	return (
		<Panel title={"Filtrer les éléments"}>
			<p>Catégories:</p>
			<div className={"flex flex-row space-x-2 items-center"}>
				{categories.map((cat) => (
					<Button
						key={cat.id}
						highlightColor={cat.color}
						text={cat.title}
						action={() =>
							filterCategories(
								cat.id,
								toggle,
								setToggle,
								setProjectState,
								projects
							)
						}
						toggle={toggle.includes(cat.id)}
					/>
				))}
			</div>
		</Panel>
	);
};

export default Filter;
