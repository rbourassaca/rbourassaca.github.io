import React from "react"
import { Container } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import "./contact.scss"

const Contact = () => {
    const query = useStaticQuery(graphql `
        query Contact{
            wp{
                contactSettings{
                    contact{
                        email
                        phone
                    }
                }
            }
        }
    `)

    return(
        <Container>
            {query.wp.contactSettings.contact.email !== null && <p>Courriel: <a href={`mailto:${query.wp.contactSettings.contact.email}?subject=Formulaire de contact rbourassa.ca`}>{query.wp.contactSettings.contact.email}</a></p>}
            {query.wp.contactSettings.contact.phone !== null && <p>Téléphone: <a href={`tel:${query.wp.contactSettings.contact.phone}`}>{query.wp.contactSettings.contact.phone}</a></p>}
        </Container>
    )
}

export default Contact