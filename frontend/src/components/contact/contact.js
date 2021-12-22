import React from "react"
import { Container } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import "./contact.scss"

const Contact = () => {
  const query = useStaticQuery(graphql`
    query Contact {
      strapiFrontendSettings {
        contactEmail
      }
    }
  `)

  return (
    <Container>
      {query.strapiFrontendSettings.contactEmail !== null && (
        <p>
          Courriel:{" "}
          <a
            href={`mailto:${query.strapiFrontendSettings.contactEmail}?subject=Formulaire de contact rbourassa.ca`}
          >
            {query.strapiFrontendSettings.contactEmail}
          </a>
        </p>
      )}
    </Container>
  )
}

export default Contact
