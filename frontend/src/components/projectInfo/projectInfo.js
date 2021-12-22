import React from "react"
import PropTypes from "prop-types"
import { Container, Row, Col } from "react-bootstrap"
import Embed from "./embed/embed.js"
import Info from "./info/info.js"
import ProjectImage from "./projectImage/projectImage.js"
import Masonry from "react-masonry-css"
import "./masonry.scss"

const ProjectInfo = ({ project }) => {
  let description
  let images
  return (
    <Container>
      <section>
        <Row>
          <Col lg="7">
            {project.Oembed.map((embed, i) => (
              <Embed link={embed.link} key={i} />
            ))}
          </Col>

          <Col></Col>
        </Row>
      </section>
      {/* {description && (
        <section>
          <Row>
            <Col lg="4">
              <h3>Description</h3>
            </Col>
            <Col>
              <div dangerouslySetInnerHTML={description} />
            </Col>
          </Row>
        </section>
      )}
      {images && (
        <section>
          <Masonry
            breakpointCols={{ default: 4, 992: 2, 576: 1 }}
            className="masonry-grid"
            columnClassName="masonry-grid-col"
          >
            {images.map((image, index) => (
              <ProjectImage image={image} key={index} />
            ))}
          </Masonry>
        </section>
      )} */}
    </Container>
  )
}

ProjectInfo.propTypes = {
  project: PropTypes.object.isRequired,
}

export default ProjectInfo
