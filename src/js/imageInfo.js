const jzMusicImage = require("../images/projects/joshzuckermann.jpg")
const useThisImage = require("../images/projects/usethis.jpg")
const bestSellerSearcherImage = require("../images/projects/nytsearcher.jpg")
const codesnippetsImage = require("../images/projects/codesnippets.jpg")
const liriBotImage = require("../images/projects/liribot.jpg")
const storeStockImage = require("../images/projects/storestock.jpg")

export default [
  {
    appName: "useThis",
    deployLink: "https://usethis.dev/",
    repoLink: "https://github.com/mattzuckermann/usethis",
    shortBio: "NextJS, TypeScript, React, Apollo, GraphQL, MongoDB, Mongoose",
    desc:
      "JAMstack app for developers in mastering the use of the “this” keyword in various JavaScript contexts",
    image: useThisImage,
  },
  {
    appName: "Music Artist Site",
    deployLink: "https://joshzuckermann.com/",
    repoLink: "https://github.com/mattzuckermann/MusicArtistSite",
    shortBio: "React, Material-UI, Gatsby, GraphQL, Typescript, Contentful",
    desc:
      "JAMstack site with reverse engineered Spotify audio player and webhook to auto-compile site from CMS",
    image: jzMusicImage,
  },
  {
    appName: "NYT Searcher",
    deployLink: "https://www.nytsearcher.com/",
    repoLink: "https://github.com/mattzuckermann/NYTsearcher",
    shortBio: "React, Node, Express, Passport, MongoDB, Mongoose",
    desc:
      "Website that parses The New York Times articles API and allows users to share their favorites with others",
    image: bestSellerSearcherImage,
  },
  {
    appName: "Snippets.",
    deployLink: "https://www.codesnippets.app",
    repoLink: "https://github.com/mattzuckermann/Snippets.",
    shortBio:
      "Javascript, Handlebars, Node, Express, Passport, MySQL, Sequelize",
    desc:
      "Snippets is a personalized user database to store code, displaying it in a colored and formatted manner.",
    image: codesnippetsImage,
  },
  {
    appName: "Liri Bot",
    deployLink: "https://www.youtube.com/watch?v=boK_bb6fKoA",
    repoLink: "https://github.com/mattzuckermann/LiriBot",
    shortBio: "Node, Web APIs",
    desc:
      "Node app that inputs varying methods and arguments from Node CLI to look up various web API end points.",
    image: liriBotImage,
  },
  {
    appName: "Store Stock",
    deployLink: "https://www.youtube.com/watch?v=Vufq5RRxQYA",
    repoLink: "https://github.com/mattzuckermann/StoreStock",
    shortBio: "Node, MySQL",
    desc:
      "Node app that prompts users with items for sale and tracks made purchases using a MySQL database.",
    image: storeStockImage,
  },
]
