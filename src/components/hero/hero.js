import React from "react"
import Img from "gatsby-image"
import { Container } from "react-bootstrap"

import "./hero.scss"

const Hero = (props) =>{
    return(
        <section className="hero">
            <Container>
                {props.logo &&
                    <Img fluid={props.logo} alt="Logo du site web"/>
                }
                {props.title &&
                    <h1 className="page-title">{props.title}</h1>
                }
                {props.subtitle &&
                    <h2 className="page-subtitle">{props.subtitle}</h2>
                }
            </Container>
        </section>
    )
}

export default Hero;