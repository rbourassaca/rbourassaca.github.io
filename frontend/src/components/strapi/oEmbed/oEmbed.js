import React from "react"
import PropTypes from "prop-types"
import ReactPlayer from "react-player"

const OEmbed = ({ url }) => {
  return (
    <section className="container">
      <ReactPlayer url={url} />
    </section>
  )
}

OEmbed.propTypes = {
  url: PropTypes.string.isRequired,
}

export default OEmbed
