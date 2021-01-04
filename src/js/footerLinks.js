import linkedinIcon from "../images/icons/linkedin.webp"
import twitterIcon from "../images/icons/twitter.webp"
import githubIcon from "../images/icons/github.webp"
import devIcon from "../images/icons/dev.webp"

export const socialInfo = [
  {
    link: "https://www.linkedin.com/in/mattzuckermann/",
    src: linkedinIcon,
    alt: "linkedin",
  },
  {
    link: "https://twitter.com/mattzuckermann",
    src: twitterIcon,
    alt: "twitter",
  },
  {
    link: "https://github.com/mattzuckermann",
    src: githubIcon,
    alt: "github",
  },
  {
    link: "https://dev.to/mattzuckermann",
    src: devIcon,
    alt: "dev",
  },
]

export const personalInfo = [
  {
    link: "tel:1-217-722-4952",
    children: function (windowWidth) {
      return windowWidth >= 500 ? "+1 (217) 722-4952" : "Cell"
    },
    title: "+1 (217) 722-4952",
  },
  {
    link: "mailto:matt@mattzuckermann.dev",
    children: function () {
      return "matt@mattzuckermann.dev"
    },
  },
  {
    link: "/resume",
    children: function () {
      return "Resume"
    },
  },
]
