import React from "react";
import ReactMarkdown from "react-markdown";
import Panel from "../panel";
import Tag from "../tag";

type ProjectType = {
	project: {
		categories: [
			{
				categories_id: {
					color: string;
					id: string;
					title: string;
				};
			}
		];
		content: string;
		date_created: string;
		gallery: [];
		id: string;
		oEmbed: [];
		slug: string;
		status: string;
		tags: [
			{
				tags_id: {
					color: string;
					id: string;
					title: string;
				};
			}
		];
		title: string;
	};
};

const Project = ({ project }: ProjectType) => {
	console.log(project);
	let highlightColor: [string?] = [];
	project.categories.forEach(({ categories_id }) => {
		highlightColor.push(categories_id.color);
	});
	return (
		<Panel title={project.title} highlightColors={highlightColor}>
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
