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
    url: "https://github.com/litlifesoftware",
    icon: faGithub,
  },
  {
    title: "Google Play",
    url: authorData.playStoreDeveloperPage,
    icon: faGooglePlay,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/litlifesw/",
    icon: faInstagram,
  },
  {
    title: "Reddit",
    url: "https://www.reddit.com/user/litlifesoftware/",
    icon: faReddit,
  },
  {
    title: "YouTube",
    url: "https://www.youtube.com/channel/UC0r6RzrH6K1yTQoVYDfxVZg/",
    icon: faYoutube,
  },
];

export default links;
