import { v4 as uuid } from "uuid";
import bannerfigure from "../assets/bannerfigure.jpeg";
import azfigure from "../assets/azfigure.jpg";
import adolys from "../assets/adolys.jpg";
import crowloh from "../assets/crowloh.jpg";
import godzilla from "../assets/godzilla.jpeg";

// function getPhoto() {
//   return {
//     width: 800,
//     height: 800,
//     url: `https://picsum.photos/id/237/800/1200`,
//   };
// }

const getPhotoGallery = [
  {
    title: "Photo_1",
    photoMeta: { url: crowloh, width: 500, height: 500 },
    id: uuid(),
    productURL: "/",
    likes: 10000,
  },
  {
    title: "Photo_2",
    photoMeta: { url: crowloh, width: 500, height: 500 },
    id: uuid(),
    productURL: "/",
    likes: 999,
  },
  {
    title: "Photo_3",
    photoMeta: { url: adolys, width: 500, height: 500 },
    id: uuid(),
    productURL: "/",
    likes: 800,
  },
  {
    title: "Photo_4",
    photoMeta: { url: godzilla, width: 500, height: 500 },
    id: uuid(),
    productURL: "/",
    likes: 700,
  },
  {
    title: "Photo_5",
    photoMeta: { url: bannerfigure, width: 500, height: 500 },
    id: uuid(),
    productURL: "/",
    likes: 600,
  },
  {
    title: "Photo_6",
    photoMeta: { url: azfigure, width: 500, height: 500 },
    id: uuid(),
    productURL: "/",
    likes: 500,
  },
  {
    title: "Photo_7",
    photoMeta: { url: godzilla, width: 500, height: 500 },
    id: uuid(),
    productURL: "/",
    likes: 400,
  },
];
export default getPhotoGallery;
