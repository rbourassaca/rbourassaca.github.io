import * as React from "react";
import { Link } from "gatsby";
import Seo from "../components/seo";

const NotFoundPage = () => {
	return (
		<>
			<Seo title={"404"} />
			<main>
				<p>
					La page que vous cherchez n'existe pas. Vous pouvez retourner à l'
					<Link to="/">accueil</Link>.
				</p>
			</main>
		</>
	);
};

export default NotFoundPage;
