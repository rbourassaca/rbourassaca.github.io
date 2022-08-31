import React from "react";
import ReactMarkdown from "react-markdown";
import Panel from "../panel";

const Project = ({ project }) => {
	let highlightColor = [];
	project.categories.forEach(({ categories_id }) => {
		highlightColor.push(categories_id.color);
	});
	return (
		<Panel title={project.title} highlightColors={highlightColor}>
			<ReactMarkdown>{project.content}</ReactMarkdown>
		</Panel>
	);
};

export default Project;
