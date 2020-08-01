const jzMusicImage = require("../images/jzMusicPortfolio.jpg")
const useThisImage = require("../images/usethis.jpg")
const bestSellerSearcherImage = require("../images/bestSellerSearcher.jpg")
const codesnippetsImage = require("../images/codesnippetsScreenShot.jpg")
const liriBotImage = require("../images/liribotCodeScreenShot.jpg")
const storeStockImage = require("../images/storestockItemGrabberScreenShot.jpg")

export default [
  {
    appName: "Music Artist Site",
    deployLink: "https://joshzuckermann.netlify.com/",
    repoLink: "https://github.com/mattzuckermann/MusicArtistSite",
    shortBio: "React, Material-UI, Gatsby, GraphQL, Typescript, Contentful",
    desc:
      "JAMstack site with a React audio player that showcases the web page of Chicago music artist Josh Zuckermann",
    image: jzMusicImage,
  },
  {
    appName: "useThis",
    deployLink: "https://usethis.dev/",
    repoLink: "https://github.com/mattzuckermann/usethis",
    shortBio: "React, Material-UI, Next.js, Apollo, GraphQL, MongoDB, Jest",
    desc:
      "Site for developers to practice and master the use of the 'this' keyword in JavaScript",
    image: useThisImage,
  },
  {
    appName: "NYT Searcher",
    deployLink: "https://nytsearcher.com/",
    repoLink: "https://github.com/mattzuckermann/NYTsearcher",
    shortBio: "React, Node, Express, Passport, MongoDB, Mongoose",
    desc:
      "Website that parses The New York Times articles API and allows users to openly share their favorites with others",
    image: bestSellerSearcherImage,
  },
  {
    appName: "Snippets.",
    deployLink: "https://codesnippets.app",
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
      "Liri Bot is a Node app that allows user to input varying methods and arguments in the Node CLI to look up various web API end points.",
    image: liriBotImage,
  },
  {
    appName: "Store Stock",
    deployLink: "https://www.youtube.com/watch?v=Vufq5RRxQYA",
    repoLink: "https://github.com/mattzuckermann/StoreStock",
    shortBio: "Node, MySQL",
    desc:
      "Store Stock is a Node app that prompts users for purchases and tracks such purchases on a MySQL backend.",
    image: storeStockImage,
  },
]
