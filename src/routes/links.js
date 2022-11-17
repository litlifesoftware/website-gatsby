import {
  faGithub,
  faGooglePlay,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import authorData from "../data/author_data";

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
    title: "YouTube",
    url: authorData.youtube,
    icon: faYoutube,
  },
];

export default links;
