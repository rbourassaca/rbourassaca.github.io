import React, { MouseEventHandler } from "react";

type ButtonType = {
	highlightColor: string;
	text: string;
	action: MouseEventHandler;
	toggle?: boolean;
};

const Button = ({ highlightColor, text, action, toggle }: ButtonType) => {
	return (
		<button
			className={
				"group flex flex-row items-center space-x-1 bg-gray-100 dark:bg-gray-700 pt-1 pb-1 pl-4 pr-4 rounded-full transition active:opacity-80"
			}
			style={toggle ? { backgroundColor: highlightColor } : undefined}
			onClick={action}
		>
			<span
				className={
					"w-2 h-2 rounded-full group-hover:bg-gray-100 dark:group-hover:bg-gray-700 bg-gray-100 dark:bg-gray-700"
				}
				style={!toggle ? { backgroundColor: highlightColor } : undefined}
			/>
			<p className={"capitalize"}>{text}</p>
		</button>
	);
};

export default Button;
