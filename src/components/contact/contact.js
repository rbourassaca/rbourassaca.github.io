import React from "react"
import { Container, Form, Button } from "react-bootstrap"
import "./contact.scss"

const Contact = () => {
    return(
        <Container>
            <Form>
                <Form.Group controlId="name">
                    <Form.Label>Nom:</Form.Label>
                    <Form.Control type="text" required placeholder="Entrer votre nom"/>
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" required placeholder="Entrer votre email"/>
                </Form.Group>
                <Form.Group controlId="message">
                    <Form.Label>Message:</Form.Label>
                    <Form.Control as="textarea" required rows={5} placeholder="Entrer votre message"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Envoyer
                </Button>
            </Form>
        </Container>
    )
}

export default Contact