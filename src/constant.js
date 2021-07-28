import {
  FaHome,
  FaLaptopCode,
  FaBrain,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaPython,
  FaGithubSquare,
  FaGithub,
  FaHackerrank,
  FaChess,
  FaBasketballBall,
  FaMountain,
} from "react-icons/fa";
import {
  SiRedux,
  SiMongodb,
  SiCodio,
  SiDatacamp,
  SiJavascript,
} from "react-icons/si";
import { BiCommentDetail } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { GrLinkedin } from "react-icons/gr";
import { MdGames } from "react-icons/md";
import { GiCricketBat, GiTennisRacket } from "react-icons/gi";

export const NAVIGATORS = [
  {
    Name: "Home",
    Route: "#home",
    Icon: FaHome,
  },
  {
    Name: "About",
    Route: "#about",
    Icon: BiCommentDetail,
  },
  {
    Name: "Skills",
    Route: "#skills",
    Icon: FaBrain,
  },
  {
    Name: "Projects",
    Route: "#projects",
    Icon: FaLaptopCode,
  },
  {
    Name: "Contact",
    Route: "#contact",
    Icon: IoMdCall,
  },
];

export const ACCOUNT_LINKS = [
  {
    href: "https://github.com/TANTRA-9",
    target: "_blank",
    rel: "noopener noreferrer",
    Icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/nishant-tomar-aa2b3b184",
    target: "_blank",
    rel: "noopener noreferrer",
    Icon: GrLinkedin,
  },
  {
    href: "https://www.hackerrank.com/TANTRA9",
    target: "_blank",
    rel: "noopener noreferrer",
    Icon: FaHackerrank,
  },
];

export const TECHNICAL_SKILLS = [
  {
    name: "JavaScript",
    src: SiJavascript,
    hold: "80%",
    color: "#E9D44D",
  },
  {
    name: "React Js",
    src: FaReact,
    hold: "80%",
    color: "#61DAFB",
  },
  {
    name: "React Native",
    src: FaReact,
    hold: "80%",
    color: "white",
  },
  {
    name: "Redux",
    src: SiRedux,
    hold: "80%",
    color: "#734FB6",
  },
  {
    name: "Express Js",
    src: FaNodeJs,
    hold: "80%",
    color: "#84BA41",
  },
  {
    name: "Mongo DB",
    src: SiMongodb,
    hold: "70%",
    color: "#52AB3D",
  },
  {
    name: "CSS",
    src: FaCss3,
    hold: "80%",
    color: "#3595CF",
  },
  {
    name: "Data Structure",
    src: SiDatacamp,
    hold: "80%",
    color: "white",
  },
  {
    name: "HTML",
    src: FaHtml5,
    hold: "70%",
    color: "#F24824",
  },

  {
    name: "Python",
    src: FaPython,
    hold: "70%",
    color: "#F7BD33",
  },
  {
    name: "C++",
    src: SiCodio,
    hold: "60%",
    color: "#007CC7",
  },
  {
    name: "GIT",
    src: FaGithubSquare,
    hold: "80%",
    color: "grey",
  },
];

export const NON_TECHNICAL_SKILLS = [
  {
    name: "Chess",
    src: FaChess,
    hold: "70%",
    color: "white",
  },
  {
    name: "Basketball",
    src: FaBasketballBall,
    hold: "90%",
    color: "#F26F27",
  },
  {
    name: "Travelling",
    src: FaMountain,
    hold: "100%",
    color: "#DCAE82",
  },
  {
    name: "Video Games",
    src: MdGames,
    hold: "90%",
    color: "#01ABF7",
  },
  {
    name: "Cricket",
    src: GiCricketBat,
    hold: "100%",
    color: "#84BA41",
  },
  {
    name: "Badminton",
    src: GiTennisRacket,
    hold: "80%",
    color: "#E9D44D",
  },
];
