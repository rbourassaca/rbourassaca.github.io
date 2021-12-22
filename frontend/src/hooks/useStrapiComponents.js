/*
 * Hook sur mesure afin de trouver composant React de Strapi.
 *
 * Les composants compatibles avec Strapi doivent :
 * - être importé au début du hook
 * - être exporté dans le switch
 */
import RichText from "../components/strapi/richText"
import OfferedServices from "../components/strapi/offeredServices/offeredServices"

export const useStrapiComponents = content => {
  content.forEach(item => {
    switch (item.strapi_component) {
      case "page.rich-text":
        item.strapi_component = () => RichText({ content: item.content })
        break
      case "page.offered-services":
        item.strapi_component = () =>
          OfferedServices({ services: item.services })
        break
    }
  })

  return content
}
