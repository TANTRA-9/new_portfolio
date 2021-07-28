import { FaHome, FaLaptopCode, FaBrain } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import reactIcon from "./Assets/Images/react.svg";

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

export const TECHNICAL_SKILLS = [
  {
    name: "React Js",
    src: reactIcon,
    hold: "80%",
  },
  {
    name: "React Native",
    src: reactIcon,
    hold: "80%",
  },
  {
    name: "Redux",
    src: reactIcon,
    hold: "80%",
  },
  {
    name: "Express Js",
    src: reactIcon,
    hold: "80%",
  },
  {
    name: "Mongo DB",
    src: reactIcon,
    hold: "70%",
  },
  {
    name: "HTML",
    src: reactIcon,
    hold: "70%",
  },
  {
    name: "CSS",
    src: reactIcon,
    hold: "80%",
  },
  {
    name: "Python",
    src: reactIcon,
    hold: "70%",
  },
  {
    name: "C++",
    src: reactIcon,
    hold: "60%",
  },
  {
    name: "GIT",
    src: reactIcon,
    hold: "80%",
  },
  {
    name: "Data Structure",
    src: reactIcon,
    hold: "80%",
  },
];
