import React from "react"
import ReactPlayer from "react-player/lazy"
import "./embed.scss"

const Embed = ({ link }) => {
  if (link.includes("spotify.com")) {
    const info = link.split("/")
    return (
      <iframe
        src={`https://open.spotify.com/embed/${info[info.length - 2]}/${
          info[info.length - 1]
        }`}
        width="100%"
        height="350"
        frameBorder="0"
        allow="encrypted-media"
        title="Chanson"
      />
    )
  } else {
    return (
      <ReactPlayer url={link} width="100%" controls="true" className="embed" />
    )
  }
}

export default Embed
