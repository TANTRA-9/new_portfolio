import { FaHome, FaLaptopCode, FaBrain } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";

export const NAVIGATORS = [
  {
    Name: "Home",
    Route: "/",
    Icon: FaHome,
  },
  {
    Name: "Projects",
    Route: "/projects",
    Icon: FaLaptopCode,
  },
  {
    Name: "Skills",
    Route: "/skills",
    Icon: FaBrain,
  },
  {
    Name: "About",
    Route: "/about",
    Icon: BiCommentDetail,
  },
  {
    Name: "Contact",
    Route: "/contact",
    Icon: IoMdCall,
  },
];
