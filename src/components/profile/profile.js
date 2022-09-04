import React, { useState } from "react";
import ProfilePicture from "./picture";
import Cover from "./cover";
import Socials from "../socials";
import Filter from "../filter";
import Project from "../project";
import { graphql, useStaticQuery } from "gatsby";
import ReactMarkdown from "react-markdown";
import Panel, { PanelContainer } from "../panel";
import { orderProjects } from "../../lib/filter/orderProjects";

const Profile = () => {
	const {
		directus: {
			frontendSettings: { ...fs },
			categories: [...cat],
			projects: [...proj],
		},
	} = useStaticQuery(graphql`
		query {
			directus {
				frontendSettings {
					name
					bio
					socialMedia
					email
					profile {
						id
						title
						imageFile {
							childImageSharp {
								gatsbyImageData
							}
						}
					}
				}
				categories {
					id
					color
					title
				}
				projects {
					id
					slug
					title
					status
					oEmbed
					content
					date_created
					gallery {
						directus_files_id {
							id
						}
					}
					categories {
						categories_id {
							id
							title
							color
						}
					}
					tags {
						tags_id {
							id
							title
							color
						}
					}
				}
			}
		}
	`);
	const [projects, setProjects] = useState(orderProjects(proj));
	return (
		<div className="max-w-screen-xl m-auto pl-4 pr-4 sm:pl-8 sm:pr-8">
			<Cover />
			<ProfilePicture picture={fs.profile.imageFile} alt={fs.profile.title} />
			<h1 className={"font-bold text-3xl text-center ml-8 mr-8 mt-1"}>
				{fs.name}
			</h1>
			<div
				className={
					"flex flex-col space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0 pt-8 pb-8"
				}
			>
				<PanelContainer className={"w-full lg:w-80"}>
					<Panel title={"À propos"}>
						<ReactMarkdown>{fs.bio}</ReactMarkdown>
						<Socials email={fs.email} links={fs.socialMedia} />
					</Panel>
				</PanelContainer>
				<PanelContainer className={"w-full"}>
					<Filter
						categories={cat}
						setProjectState={setProjects}
						projectState={projects}
						projects={proj}
					/>
					{projects.map((project) => (
						<Project key={project.id} project={project} />
					))}
				</PanelContainer>
			</div>
		</div>
	);
};

export default Profile;
