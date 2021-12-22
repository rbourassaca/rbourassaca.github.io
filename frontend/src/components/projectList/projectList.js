import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "react-bootstrap"
import Project from "./project/project.js"
import PropTypes from "prop-types"

const ProjectList = ({ projects }) => {
  const data = useStaticQuery(graphql`
    query {
      strapiFrontendSettings {
        defaultThumbnail {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <section className="list">
      <Container>
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <Project
              project={project}
              key={index}
              defaultThumbnail={
                data.strapiFrontendSettings.defaultThumbnail.localFile
                  .childImageSharp.fluid
              }
            />
          ))
        ) : (
          <p>Il n'y a pas de projets...</p>
        )}
      </Container>
    </section>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
}

export default ProjectList
