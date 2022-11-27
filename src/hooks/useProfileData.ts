import {graphql, useStaticQuery} from "gatsby";

export const useProfileData = () => {
	const {
		file: {
			childMdx: {
				frontmatter: {
					...profileData
				}
			}
		}
	} = useStaticQuery(graphql`
		query Info {
			file(ext: {eq: ".md"}, name: {eq: "info"}) {
				childMdx {
					frontmatter {
						name
						bio
						email
						socialMedia
						coverImage {
							childImageSharp {
								gatsbyImageData
							}
						}
						profilePicture {
							childImageSharp {
								gatsbyImageData
							}
						}
					}
				}
			}
		}
	`)
	return profileData
}