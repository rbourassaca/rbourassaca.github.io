import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import React from "react";

type props = {
	picture: ImageDataLike;
	title: string;
};

const Cover = ({ picture, title }: props) => {
	let pictureObj: any = getImage(picture);
	return (
		<GatsbyImage
			alt={title}
			image={pictureObj}
			className={
				"bg-white dark:bg-gray-800 h-40 lg:h-80 w-full rounded-b bg-no-repeat bg-cover bg-center"
			}
		/>
	);
};

export default Cover;
