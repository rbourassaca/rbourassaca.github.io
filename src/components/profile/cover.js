import React from "react";

const Cover = () => {
	return (
		<div
			className={
				"bg-white dark:bg-gray-800 h-40 lg:h-80 w-full bg-no-repeat bg-cover bg-center"
			}
			style={{
				backgroundImage:
					"url(https://source.unsplash.com/category/wallpaper/1200x800)",
			}}
		></div>
	);
};

export default Cover;
