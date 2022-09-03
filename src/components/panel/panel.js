import React from "react";

const Panel = ({ children, className, title, highlightColors }) => {
	return (
		<div
			className={
				"bg-white border border-gray-100 dark:border-gray-900 dark:bg-gray-800 rounded shadow-lg flex flex-col space-y-3 p-8 h-fit " +
				className
			}
		>
			<h2 className={"text-xl font-bold flex flex-row items-center capitalize"}>
				{typeof highlightColors !== "undefined" &&
					highlightColors.map((color, i) => {
						return (
							<span
								key={i}
								className={"w-2 h-2 rounded-full mr-2"}
								style={{ backgroundColor: color }}
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
