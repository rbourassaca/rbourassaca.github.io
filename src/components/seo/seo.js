import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Head = ({ title }) => {
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
	return title ? <title>{title + " | " + name}</title> : <title>{name}</title>;
};

export default Head;
