import React from "react"
import { Container } from "react-bootstrap"
import "./contact.scss"

const Contact = () => {
    return(
        <Container>
            <form>
                <label>Votre nom:
                    <input type="text" name="name" id="name"/>
                </label>
                <label>Votre email:
                    <input type="email" name="email" id="email"/>
                </label>
                <label>Votre message:
                    <textarea name="message" rows="5"/>
                </label>
            </form>
        </Container>
    )
}

export default Contact