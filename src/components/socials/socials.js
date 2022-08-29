import React from "react";
import {
  Facebook,
  Github,
  Instagram,
  Tiktok,
  Youtube,
  Email,
  Default,
} from "../icons";

const Socials = ({ links, email }) => {
  return (
    <div className={"flex flex-row justify-center space-x-3 items-center"}>
      {email ? (
        <a href={"mailto:" + email} className={"block w-10"}>
          <Email />
        </a>
      ) : (
        ""
      )}
      {links.map((link) => {
        let Icon;
        switch (new URL(link.url).host.replace("www.", "").split(".")[0]) {
          case "facebook":
            Icon = Facebook;
            break;
          case "github":
            Icon = Github;
            break;
          case "instagram":
            Icon = Instagram;
            break;
          case "tiktok":
            Icon = Tiktok;
            break;
          case "youtube":
            Icon = Youtube;
            break;
          default:
            Icon = Default;
            break;
        }
        return (
          <a
            key={link.url}
            href={link.url}
            target={"_blank"}
            rel="noreferrer"
            className={"block w-10"}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

export default Socials;