# rbourassa.github.io

***

## Introduction
Ceci est le répertoire git de mon site web.
Le dossier CMS contient le système de gestion de données [Strapi](https://strapi.io/) et le dossier frontend contient l'interface du site web utilisant [Gatsby](https://www.gatsbyjs.com/).

***

## Comment utiliser le projet
### Développement
1. Installer des dépendances avec `npm install`.
2. Démmarer le serveur de développement avec `npm run develop`.
3. Configurer [Strapi](http://localhost:1337/admin).
   1. Créer un compte administrateur.
   2. Ajouter un rôle dans `Settings > Users & permissions plugin > Roles`.
   3. Donner les permission requises par le frontend au rôle créer.
   4. Créer un compte dans `Collection Types > Users` et lui donner le rôle créer.
4. Entrer le nom et le mot de passe du compte pour l'api dans `/frontend/.env.development`.
5. Relancer `npm run develop`.

### Publier sur Github Pages
À venir...

***

**Note**

La branche `development` contient tous les changements les plus récents du projet, il est très probable qu'elle soit non fonctionnelle. Pour voir le code d'une version en ligne du projet, veuillez utiliser les tags du projet.