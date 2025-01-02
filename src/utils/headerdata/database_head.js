import { v4 as uuid } from "uuid";
const database_head = {
  navTitle: "Database",
  navOptions: [
    {
      /*User would be redirected to database/search if user attempts to modify durl to database/ */
      navOptTitle: "Search",
      navOptUrl: "/search",
      id: uuid(),
    },
    {
      navOptTitle: "Top",
      navOptUrl: "/search/top",
      id: uuid(),
    },
    {
      navOptTitle: "Recommendations",
      navOptUrl: "/search/recommendations",
      id: uuid(),
    },
  ],
};
export default database_head;
