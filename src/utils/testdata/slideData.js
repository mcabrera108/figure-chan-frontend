import azImage from "../../assets/azfigure.jpg";
import mikuImage from "../../assets/miku_15th.png";
import azfigure01 from "../../assets/azfigure01.jpg";
import azfigurefalslander from "../../assets/azfigurefalslander.jpg";
import { v4 as uuid } from "uuid";
const slideData = [
  {
    title: "Miku 1/7 15th Anniversary Edition Figure",
    imageURL: mikuImage,
    id: uuid(),
    productURL: "/",
  },
  {
    title: "Miku 1/7 15th Anniversary Edition Figure",
    imageURL: azfigure01,
    id: uuid(),
    productURL: "/",
  },
  {
    title: "Miku 1/7 15th Anniversary Edition Figure",
    imageURL: azfigurefalslander,
    id: uuid(),
    productURL: "/",
  },
  {
    title: "Miku 1/7 15th Anniversary Edition Figure",
    imageURL: azImage,
    id: uuid(),
    productURL: "/",
  },
  {
    title: "Miku 1/7 15th Anniversary Edition Figure",
    imageURL: azImage,
    id: uuid(),
    productURL: "/",
  },
];
export default slideData;
