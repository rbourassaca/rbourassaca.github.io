import React, { useState } from "react";
import ProfilePicture from "./picture";
import Cover from "./cover";
import Socials from "../socials";
import Filter from "../filter";
import Project from "../project";
import ReactMarkdown from "react-markdown";
import Panel, { PanelContainer } from "../panel";
import { orderProjects } from "../../lib/filter/orderProjects";
import { ProjectType } from "../project/type";
import { useProfileData } from "../../hooks/useProfileData";

const Profile = () => {
	const profileData = useProfileData()
	const proj:[] = [];
	const [projects, setProjects] = useState(orderProjects(proj));
	return (
		<>
			<Cover picture={profileData.coverImage} title={"Image d'entête"} />
			<ProfilePicture picture={profileData.profilePicture} alt={"Image du profile"} />
			<h1 className={"font-bold text-3xl text-center ml-8 mr-8 mt-1"}>
				{profileData.name}
			</h1>
			<div
				className={
					"flex flex-col space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0 pt-8 pb-8"
				}
			>
				<PanelContainer className={"w-full lg:w-80"}>
					<Panel title={"À propos"}>
						<ReactMarkdown>{profileData.bio}</ReactMarkdown>
						<Socials email={profileData.email} links={profileData.socialMedia} />
					</Panel>
				</PanelContainer>
				<PanelContainer className={"w-full"}>
					{projects.length > 0 ? (
						<>
							<Filter
								categories={cat}
								setProjectState={setProjects}
								projects={proj}
							/>
							{projects.map((project: ProjectType) => (
								<Project key={project.id} project={project} />
							))}
						</>
					) : (
						<p>Il n'y a aucun projet à présenter pour l'instant.</p>
					)}
				</PanelContainer>
			</div>
		</>
	);
};

export default Profile;
