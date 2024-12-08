import { v4 as uuid } from "uuid";
const database_head = {
  navTitle: "Database",
  navOptions: [
    {
      /*User would be redirected to database/search if user attempts to modify durl to database/ */
      navOptTitle: "Search",
      navOptUrl: "/database/search",
      id: uuid(),
    },
    {
      navOptTitle: "Top",
      navOptUrl: "/database/top",
      id: uuid(),
    },
    {
      navOptTitle: "Recommendations",
      navOptUrl: "/database/recommendations",
      id: uuid(),
    },
  ],
};
export default database_head;
