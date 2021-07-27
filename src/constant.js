import { FaHome, FaLaptopCode, FaBrain } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";

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
    Name: "Projects",
    Route: "#projects",
    Icon: FaLaptopCode,
  },
  {
    Name: "Skills",
    Route: "#skills",
    Icon: FaBrain,
  },
  {
    Name: "Contact",
    Route: "#contact",
    Icon: IoMdCall,
  },
];
