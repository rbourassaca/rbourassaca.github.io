/*
 * Hook sur mesure afin de trouver composant React de Strapi.
 *
 * Les composants compatibles avec Strapi doivent :
 * - être importé au début du hook
 * - être exporté dans le switch
 */
import PropTypes from "prop-types"
import RichText from "../components/strapi/richText"
import OfferedServices from "../components/strapi/offeredServices/offeredServices"
import OEmbed from "../components/strapi/oEmbed/oEmbed"
import Gallery from "../components/strapi/gallery/gallery"
import Table from "../components/strapi/table/table"

export const useStrapiComponents = (content, images) => {
  content.forEach(item => {
    switch (item.strapi_component) {
      case "page.rich-text":
        item.strapi_component = () => RichText({ content: item.content })
        break
      case "page.offered-services":
        item.strapi_component = () =>
          OfferedServices({ services: item.services, images: images })
        break
      case "page.o-embed":
        item.strapi_component = () => OEmbed({ url: item.url })
        break
      case "page.gallery":
        item.strapi_component = () => Gallery({ images: images })
        break
      case "page.table":
        item.strapi_component = () => Table({ items: item.tableRow })
        break
    }
  })

  return content
}

useStrapiComponents.propTypes = {
  content: PropTypes.object.isRequired,
  images: PropTypes.array,
}
