import {graphql, useStaticQuery} from "gatsby";

export const useProjectData = () => {
	const {
		allFile: {
			nodes: [
				...projects
			]
		}
	} = useStaticQuery(graphql`
		query Projects {
			allFile(
				filter: {sourceInstanceName: {eq: "projects"}, ext: {in: [".md", ".mdx"]}}
			) {
				nodes {
					childMdx {
						frontmatter {
							title
							categories
							tags
						}
						body
					}
				}
			}
		}
	`)
	return projects
}