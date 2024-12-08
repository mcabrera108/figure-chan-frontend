import { v4 as uuid } from "uuid";
const gallery_head = {
  navTitle: "Gallery",
  navOptions: [
    {
      /*User would be redirected to database/search if user attempts to modify durl to database/ */
      navOptTitle: "Browse",
      navOptUrl: "",
      id: uuid(),
    },
    {
      navOptTitle: "Popular",
      navOptUrl: "",
      id: uuid(),
    },
  ],
};
export default gallery_head;
