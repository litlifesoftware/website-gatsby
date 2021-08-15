import {
  faGithub,
  faGooglePlay,
  faInstagram,
  faReddit,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import authorData from "../data/authorData";

const links = [
  {
    title: "GitHub",
    url: authorData.github,
    icon: faGithub,
  },
  {
    title: "Google Play",
    url: authorData.playStoreDeveloperPage,
    icon: faGooglePlay,
  },
  {
    title: "Instagram",
    url: authorData.instagram,
    icon: faInstagram,
  },
  {
    title: "Reddit",
    url: authorData.reddit,
    icon: faReddit,
  },
  {
    title: "YouTube",
    url: authorData.youtube,
    icon: faYoutube,
  },
];

export default links;
