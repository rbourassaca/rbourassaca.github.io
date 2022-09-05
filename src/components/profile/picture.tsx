import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import React from "react";

type ProfilePictureType = {
	picture: ImageDataLike;
	alt: string;
};

const ProfilePicture = ({ picture, alt }: ProfilePictureType) => {
	let pictureObj: any = getImage(picture);
	return (
		<div className={"flex justify-center"}>
			<GatsbyImage
				alt={alt}
				image={pictureObj}
				className={
					"rounded-full -top-20 -mb-20 aspect-square w-56 border-4 border-gray-100 dark:border-gray-900"
				}
			/>
		</div>
	);
};

export default ProfilePicture;
