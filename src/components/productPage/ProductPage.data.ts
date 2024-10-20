import { RiShoppingBagLine } from "react-icons/ri";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import userImage from "../../../public/user.png";

export const iconsData = [
  { id: 1, icon: RiShoppingBagLine, value: 16 },
  { id: 2, icon: FaRegCommentAlt, value: 3 },
  { id: 3, icon: FaRegStar, value: 46 },
];

export const productInfo = [
  { id: 1, main: "Лицензия", descr: "Атрибуты ССС" },
  { id: 2, main: "Размер", descr: "264 МБ" },
  { id: 3, main: "Форматы", descr: "Autodesk FBX (fbx)" },
  { id: 4, main: "Анимация", descr: "Есть" },
];

export const feedbacks = [
  {
    id: 1,
    image: userImage,
    author: "Gol D Rojer",
    date: "4 дня назад",
    text: "Too many people here use bad words to criticize artists…",
  },
  {
    id: 2,
    image: userImage,
    author: "Andrew",
    date: "2 дня назад",
    text: "Great service, everything was quick and efficient, highly recommend!",
  },
  {
    id: 3,
    image: userImage,
    author: "CarLover",
    date: "2 дня назад",
    text: "@Gol D Rojer How you downloaded this? is it ok?",
  },
  {
    id: 4,
    image: userImage,
    author: "Vitaly",
    date: "3 дня назад",
    text: "Didn't like the service, waited too long for a response.",
  },
];
