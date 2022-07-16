import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";

const Seo = ({ title }) => {
  const {
    directus: {
      frontendSettings: { name },
    },
  } = useStaticQuery(graphql`
    query {
      directus {
        frontendSettings {
          name
        }
      }
    }
  `);
  return title ? (
    <Helmet title={title + " | " + name} />
  ) : (
    <Helmet title={name} />
  );
};

export default Seo;
