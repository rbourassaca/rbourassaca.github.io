import * as React from "react";
import Template from "./../template";
import Seo from "../components/seo";
import Profile from "../components/profile";

const IndexPage = () => {
	return (
		<Template>
			<Seo />
			<Profile />
		</Template>
	);
};

export default IndexPage;
