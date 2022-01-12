import React from "react"
import PropTypes from "prop-types"
import ReactPlayer from "react-player"
import "./oEmbed.scss"

const OEmbed = ({ url }) => {
  if (url.includes("spotify.com")) {
    const info = url.split("/")
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
      <section className="container">
        <ReactPlayer url={url} />
      </section>
    )
  }
}

OEmbed.propTypes = {
  url: PropTypes.string.isRequired,
}

export default OEmbed
