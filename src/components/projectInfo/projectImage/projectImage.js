import React from "react"
import { Col } from "react-bootstrap"
import Img from "gatsby-image"

const ProjectImages = ({image}) => {
    return(
        <Col lg="3">
            <Img fluid={image.localFile.childImageSharp.fluid}/>
        </Col>
    )
}

export default ProjectImages