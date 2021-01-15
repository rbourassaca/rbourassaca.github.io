import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Embed from "./embed/embed.js"
import Info from "./info/info.js"
import ProjectImage from "./projectImage/projectImage.js"

const ProjectInfo = ({project}) => {
    const projectAcf = project["acf_"+project.contentType.node.name]
    var embed = null
    var info = {}
    var description = null
    var images = null

    switch(project.contentType.node.name){
        case "audio":
            embed = projectAcf.liensProjet
            info["Type"] = projectAcf.type
            info["Rôle(s) dans le projet"] = projectAcf.roleDansLeProjet
            info["Logiciel(s) utilisé"] = projectAcf.logicielsUtilise
            description = {__html: projectAcf.description}
            images = projectAcf.photos
            break
        case "video":

            break
        case "web":

            break
        default:
            break
    }

    console.log(projectAcf)

    return(
        <Container>
            {info &&
                <section>
                    <Row>
                        {embed &&
                            <Col lg="8">
                                {embed.map((link, index) => (
                                    <Embed link={link.oembed}/>
                                    ))}
                            </Col>
                        }
                        <Col>
                            <Info info={info}/>
                        </Col>
                    </Row>
                </section>
            }
            {description &&
                <section>
                    <Row>
                        <Col lg="4">
                            <h3>Description</h3>
                        </Col>
                        <Col>
                            <div dangerouslySetInnerHTML={description}/>
                        </Col>
                    </Row>
                </section>
            }
            {images &&
                <section>
                    <Row>
                        <Col lg="12">
                            {images.map((image, index) => (
                                <ProjectImage image={image}/>
                            ))}
                        </Col>
                    </Row>
                </section>
            }
        </Container>
    )
}

export default ProjectInfo