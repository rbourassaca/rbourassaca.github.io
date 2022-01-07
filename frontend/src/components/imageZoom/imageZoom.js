import React from "react"
import Img from "gatsby-image"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

const ImageZoom = ({ image }) => {
  return (
    <Zoom
      overlayBgColorStart="rgba(0,0,0,0.8)"
      overlayBgColorEnd="rgba(0,0,0,0.8)"
    >
      <Img fluid={image.childImageSharp.fluid} />
    </Zoom>
  )
}

export default ImageZoom
