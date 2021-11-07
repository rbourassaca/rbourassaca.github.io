import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faLinkedin, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons'
import ArrowDown from "./arrowDown"

import "./hero.scss"



const Hero = (props) =>{
    let social = [];
    //TODO: Ajuster la requête du CMS
/*
    const query = useStaticQuery(graphql `
        query MyQuery {
            wp{
                heroSettings{
                    reseauxSociaux{
                        liens{
                            reseau
                            lien
                        }
                    }
                }
            }
        }
    `)
*/
    [].map((item, index) => {
        switch(item.reseau){
            case "Facebook":
                social.push({"link" : item.lien, "icon" : faFacebookF, "title" : item.reseau});
                break;
            case "Instagram":
                social.push({"link" : item.lien, "icon" : faInstagram, "title" : item.reseau});
                break;
            case "LinkedIn":
                social.push({"link" : item.lien, "icon" : faLinkedin, "title" : item.reseau});
                break;
            case "Youtube":
                social.push({"link" : item.lien, "icon" : faYoutube, "title" : item.reseau});
                break;
            case "GitHub":
                social.push({"link" : item.lien, "icon" : faGithub, "title" : item.reseau});
                break;
            default:
                social.push({"link" : item.lien, "icon" : faGlobe, "title" : item.reseau});
                break;
        }
        return null;
    })

    return(
        <section className="hero">
            <Img fluid={props.background} className="background"/>
            <aside>
                <ul>
                    {social.map((item, index) =>
                      <li key={index}>
                          <a href={item.link} target="_blank" rel="noreferrer" title={item.title}>
                              <FontAwesomeIcon icon={item.icon}/>
                          </a>
                      </li>
                    )}
                </ul>
            </aside>
            <Container>
                {props.logo &&
                    <Img fluid={props.logo} alt="Logo du site web" className="logo"/>
                }
            </Container>
            <div className="inner">
                    {props.title &&
                        <h1 className="page-title">{props.title}</h1>
                    }
                    {props.subtitle &&
                        <h2 className="page-subtitle">{props.subtitle}</h2>
                    }
            </div>
            <ArrowDown />
        </section>
    )
}

export default Hero;