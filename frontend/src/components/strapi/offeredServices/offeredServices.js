import React from "react"
import Img from "gatsby-image"
import { Container, Row } from "react-bootstrap"
import ReactMarkdown from "react-markdown"
import PropTypes from "prop-types"
import "./offeredServices.scss"

const OfferedServices = ({ services, images }) => {
  services.map(service => {
    service.logoSource = images.find(
      image => image.id === service.logo.localFile___NODE
    )
  })

  return (
    <section className="offeredServices">
      <Container>
        <h2>Services offerts</h2>
        <Row>
          {services.map((service, index) => (
            <figure key={index} className={"col-lg-" + 12 / services.length}>
              <Img
                fluid={service.logoSource.childImageSharp.fluid}
                alt={`Logo pour ${service.name}`}
              />
              <figcaption>
                <p>{service.name}</p>
                <ReactMarkdown>{service.description}</ReactMarkdown>
              </figcaption>
            </figure>
          ))}
        </Row>
      </Container>
    </section>
  )
}

OfferedServices.propTypes = {
  services: PropTypes.array.isRequired,
  images: PropTypes.array.isRequired,
}

export default OfferedServices
