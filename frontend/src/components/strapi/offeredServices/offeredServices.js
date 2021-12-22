import React from "react"
import Img from "gatsby-image"
import { Container, Row } from "react-bootstrap"
import ReactMarkdown from "react-markdown"
import "./offeredServices.scss"
import { graphql, useStaticQuery } from "gatsby"

const OfferedServices = ({ services }) => {
  const { allFile } = useStaticQuery(graphql`
    query files {
      allFile {
        nodes {
          id
          childImageSharp {
            fixed(width: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)

  services.map(service => {
    if (service.logo.localFile___NODE !== undefined) {
      service.logo = allFile.nodes.find(
        file => file.id === service.logo.localFile___NODE
      )
    }
  })

  return (
    <section className="offeredServices">
      <Container>
        <h2>Services offerts</h2>
        <Row>
          {services.map((service, index) => (
            <figure key={index} className={"col-lg-" + 12 / services.length}>
              <Img
                fixed={service.logo.childImageSharp.fixed}
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

export default OfferedServices
