import React from "react";

type TagsProps = {
	title: string;
	color: string;
};

const Tag = ({ title, color }: TagsProps) => {
	return (
		<span
			className={
				"flex flex-row items-center bg-gray-100 dark:bg-gray-700 pt-1 pb-1 pl-4 pr-4 rounded-full text-xs"
			}
			style={{ backgroundColor: color }}
		>
			{title}
		</span>
	);
};

export default Tag;
