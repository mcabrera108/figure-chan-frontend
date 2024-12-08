import { v4 as uuid } from "uuid";
import miku_15th from "../../assets/miku_15th.png";

const boardData = [
  {
    boardTitle: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    creatorUsername: "Username123",
    dateCreated: "Sep 21, 2024",
    lastContributorUsername: "Anon123",
    lastPostTimeStamp: "Nov 20 2024",
    replies: 50,
    boardPreviewImgURL: { img: miku_15th, imgAlt: "Hello World" },
    id: uuid(),
  },
  {
    boardTitle:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Hendrerit justo nostra imperdiet pellentesqueds",
    creatorUsername: "Username123us12",
    dateCreated: "Sep 21, 2024",
    lastContributorUsername: "Anon123",
    lastPostTimeStamp: "Nov 20 2024",
    replies: 50,
    boardPreviewImgURL: { img: miku_15th, imgAlt: "Hello World" },
    id: uuid(),
  },
  {
    boardTitle:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Hendrerit justo nostra imperdiet pellentesqueds",
    creatorUsername: "Username123us12",
    dateCreated: "Sep 21, 2024",
    lastContributorUsername: "Anon123Anon",
    lastPostTimeStamp: "Nov 20 2024",
    replies: 10,
    boardPreviewImgURL: { img: miku_15th, imgAlt: "Hello World" },
    id: uuid(),
  },
  {
    boardTitle: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    creatorUsername: "Username123",
    dateCreated: "Sep 21, 2024",
    lastContributorUsername: "Anon123",
    lastPostTimeStamp: "Nov 20 2024",
    replies: 20,
    boardPreviewImgURL: { img: miku_15th, imgAlt: "Hello World" },
    id: uuid(),
  },
];
export default boardData;
