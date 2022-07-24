import React from "react";
import ProfilePicture from "./picture";
import Cover from "./cover";
import Socials from "../socials";
import Filter from "../filter";
import { graphql, useStaticQuery } from "gatsby";
import ReactMarkdown from "react-markdown";
import Panel, { PanelContainer } from "../panel";

const Profile = () => {
  const {
    directus: {
      frontendSettings: { ...fs },
      categories: [...cat],
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
        categories {
          id
          color
          title
        }
      }
    }
  `);
  return (
    <div className={"h-screen"}>
      <Cover />
      <ProfilePicture picture={fs.profile.imageFile} alt={fs.profile.title} />
      <h1 className={"font-bold text-3xl text-center ml-8 mr-8"}>{fs.name}</h1>
      <div
        className={
          "flex flex-col space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0 m-8"
        }
      >
        <PanelContainer className={"w-full lg:w-1/4"}>
          <Panel title={"À propos"}>
            <ReactMarkdown>{fs.bio}</ReactMarkdown>
            <Socials email={fs.email} links={fs.socialMedia} />
          </Panel>
        </PanelContainer>
        <PanelContainer className={"w-full"}>
          <Filter categories={cat} />
          <Panel title={"Example 01"} highlightColor={"#84CC16"}>
            <p>... example 01</p>
          </Panel>
          <Panel title={"Example 02"}>
            <p>... example 02</p>
          </Panel>
          <Panel title={"Example 03"}>
            <p>... example 03</p>
          </Panel>
        </PanelContainer>
      </div>
    </div>
  );
};

export default Profile;
