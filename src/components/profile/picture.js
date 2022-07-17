import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

const ProfilePicture = ({ picture, alt }) => {
  picture = getImage(picture);
  return (
    <div className={"flex justify-center"}>
      <GatsbyImage
        alt={alt}
        image={picture}
        className={
          "rounded-full -top-20 -mb-20 aspect-square w-56 border-4 border-white"
        }
      />
    </div>
  );
};

export default ProfilePicture;
