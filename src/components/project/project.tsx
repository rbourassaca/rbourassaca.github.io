import React from "react";
import ReactMarkdown from "react-markdown";
import Panel from "../panel";
import Tag from "../tag";
import { ProjectType } from "./type";

interface ProjectInterface {
	project: ProjectType;
}

const Project = ({ project }: ProjectInterface) => {
	let highlightColor: [string?] = [];
	project.categories.forEach(({ categories_id }) => {
		highlightColor.push(categories_id.color);
	});
	return (
		<Panel
			title={project.title}
			highlightColors={highlightColor}
			className={"hover:border-gray-300 hover:dark:border-gray-700 hover:cursor-pointer"}
		>
			{project.tags.length > 0 && (
				<div className="flex flex-row space-x-2 items-center">
					{project.tags.map((tag) => (
						<Tag
							key={tag.tags_id.id}
							title={tag.tags_id.title}
							color={tag.tags_id.color}
						/>
					))}
				</div>
			)}
			<ReactMarkdown>{project.content}</ReactMarkdown>
		</Panel>
	);
};

export default Project;