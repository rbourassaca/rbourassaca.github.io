import React from "react";
import { useSeoData } from "../../lib/hooks/useSeoData";

type SeoType = {
	title?: string;
};

const Head = ({ title }: SeoType) => {
	const seoData = useSeoData()
	return title ? <title>{title + " | " + seoData.site_name}</title> : <title>{seoData.site_name}</title>;
};

export default Head;
