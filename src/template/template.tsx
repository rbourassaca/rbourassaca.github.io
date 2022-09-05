import React from "react";

type TemplateType = {
	children: React.ReactNode;
};

const Template = ({ children }: TemplateType) => {
	return (
		<div className="max-w-screen-xl m-auto pl-4 pr-4 sm:pl-8 sm:pr-8">
			{children}
		</div>
	);
};

export default Template;
