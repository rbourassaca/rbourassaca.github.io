import React from "react";
import ProfilePicture from "./picture";
import Cover from "./cover";
import Socials from "./socials";
import { graphql, useStaticQuery } from "gatsby";
import ReactMarkdown from "react-markdown";

const Profile = () => {
  const {
    directus: {
      frontendSettings: { ...data },
    },
  } = useStaticQuery(graphql`
    query {
      directus {
        frontendSettings {
          name
          bio
          socialMedia
          email
          profile {
            id
            title
            imageFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);
  return (
    <>
      <Cover />
      <ProfilePicture
        picture={data.profile.imageFile}
        alt={data.profile.title}
      />
      <div className={"p-4 text-center flex flex-col space-y-3"}>
        <p className={"font-bold text-3xl text-center"}>{data.name}</p>
        <ReactMarkdown>{data.bio}</ReactMarkdown>
        <p>
          Contact:&nbsp;
          <a href={"mailto:" + data.email} className={"font-bold"}>
            {data.email}
          </a>
        </p>
        <Socials links={data.socialMedia} />
      </div>
    </>
  );
};

export default Profile;
