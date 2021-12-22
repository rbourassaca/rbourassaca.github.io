import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
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
  faTiktok,
} from "@fortawesome/free-brands-svg-icons"
import ArrowDown from "./arrowDown"
import "./hero.scss"

const Hero = ({ title, subtitle, background, logo }) => {
  const data = useStaticQuery(graphql`
    query social {
      strapiFrontendSettings {
        socialLinks {
          link
          name
        }
      }
    }
  `)
  data.strapiFrontendSettings.socialLinks.map(item => {
    switch (item.name) {
      case "facebook":
        item.icon = faFacebookF
        break
      case "instagram":
        item.icon = faInstagram
        break
      case "linkedIn":
        item.icon = faLinkedin
        break
      case "youtube":
        item.icon = faYoutube
        break
      case "gitHub":
        item.icon = faGithub
        break
      case "tikTok":
        item.icon = faTiktok
        break
    }
  })
  return (
    <section className="hero">
      <Img fluid={background} className="background" />
      {data.strapiFrontendSettings.socialLinks && (
        <aside>
          <ul>
            {data.strapiFrontendSettings.socialLinks.map((item, index) => (
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
}

export default Hero
