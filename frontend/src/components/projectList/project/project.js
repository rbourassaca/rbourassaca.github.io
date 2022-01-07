import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Row, Col } from "react-bootstrap"
import ReactMarkDown from "react-markdown"
import PropTypes from "prop-types"

import "./project.scss"

const Project = ({ project, index, defaultThumbnail }) => {
  let description
  if (project.content.length > 0) {
    project.content.map(item => {
      if (item.strapi_component === "page.rich-text") {
        description = item.content
      }
    })
  }
  return (
    <div className="project" key={index}>
      <Row>
        <Col md={8} className="info">
          <div>
            <Link to={project.slug}>
              <h2>{project.name}</h2>
            </Link>
            <ReactMarkDown>{description}</ReactMarkDown>
          </div>
        </Col>
        <Col>
          {project.featuredImage !== undefined ? (
            <Img
              fluid={project.featuredImage.node.localFile.childImageSharp.fluid}
            />
          ) : (
            <Img fluid={defaultThumbnail} />
          )}
        </Col>
      </Row>
    </div>
  )
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  defaultThumbnail: PropTypes.object.isRequired,
}

export default Project
