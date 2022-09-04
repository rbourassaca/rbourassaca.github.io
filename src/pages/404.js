import * as React from "react";
import { Link } from "gatsby";
import Template from "../template";
import Seo from "../components/seo";

const NotFoundPage = () => {
	return (
		<Template>
			<Seo title={"404"} />
			<main className="pt-8 text-center">
				<h1 className="text-8xl font-bold">404</h1>
				<p>
					La page que vous cherchez n'existe pas. Vous pouvez retourner à l'
					<Link to="/">accueil</Link>.
				</p>
			</main>
		</Template>
	);
};

export default NotFoundPage;
