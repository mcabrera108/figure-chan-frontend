import { v4 as uuid } from "uuid";
const community_head = {
  navTitle: "Community",
  navOptions: [
    {
      /*User would be redirected to database/search if user attempts to modify durl to database/ */
      navOptTitle: "Articles",
      navOptUrl: "",
      id: uuid(),
    },
    {
      navOptTitle: "Boards",
      navOptUrl: "",
      id: uuid(),
    },
    {
      navOptTitle: "Clubs",
      navOptUrl: "",
      id: uuid(),
    },
    {
      navOptTitle: "Lists",
      navOptUrl: "",
      id: uuid(),
    },
  ],
};
export default community_head;
