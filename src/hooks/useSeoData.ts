import {graphql, useStaticQuery} from "gatsby";

export const useSeoData = () => {
	const {
		file: {
			childMdx: {
				frontmatter: {
					...seoData
				}
			}
		}
	} = useStaticQuery(graphql`
		query Seo {
			file(ext: {eq: ".md"}, name: {eq: "seo"}) {
				childMdx {
					frontmatter {
						siteName
					}
				}
			}
		}
	`)
	return seoData
}