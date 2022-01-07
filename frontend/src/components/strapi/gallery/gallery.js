import React from "react"
import PropTypes from "prop-types"
import Masonry from "react-masonry-css"
import ImageZoom from "../../imageZoom/imageZoom"
import "./masonry.scss"

const Gallery = ({ images }) => {
  return (
    <section className="container">
      <Masonry
        breakpointCols={{ default: 4, 992: 2, 576: 1 }}
        className="masonry-grid"
        columnClassName="masonry-grid-col"
      >
        {images.map((image, index) => (
          <ImageZoom image={image} key={index} />
        ))}
      </Masonry>
    </section>
  )
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
}

export default Gallery
