import React from "react"
import { Container } from "react-bootstrap"
import Project from "./project/project.js"

const ProjectList = ({projects, archive}) => {
    return (
        <section class="list">
            <Container>
                {projects.map((project, index) =>
                    <Project project={project} key={index} archive={archive}/>
                    )}
            </Container>    
        </section>
    )
}

export default ProjectList