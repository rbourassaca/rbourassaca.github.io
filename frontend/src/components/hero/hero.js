import React from "react"
import Img from "gatsby-image"
import PropTypes, { string } from "prop-types"
import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import ArrowDown from "./arrowDown"
import "./hero.scss"

const Hero = ({ title, subtitle, background, logo, social }) => {
  return (
    <section className="hero">
      <Img fluid={background} className="background" />
      {social && (
        <aside>
          <ul>
            {social.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  title={item.title}
                >
                  <FontAwesomeIcon icon={item.icon} />
                </a>
              </li>
            ))}
          </ul>
        </aside>
      )}
      {logo && (
        <Container>
          <Img fluid={logo} alt="Logo du site web" className="logo" />
        </Container>
      )}
      {title && (
        <div className="inner">
          <h1 className="page-title">{title}</h1>
          {subtitle && <h2 className="page-subtitle">{subtitle}</h2>}
        </div>
      )}
      <ArrowDown />
    </section>
  )
}

Hero.propType = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  background: PropTypes.object.isRequired,
  logo: PropTypes.object,
  social: PropTypes.array,
}

export default Hero
