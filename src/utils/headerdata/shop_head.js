import { v4 as uuid } from "uuid";
const shop_head = {
  navTitle: "Shop",
  navOptions: [
    {
      /*User would be redirected to database/search if user attempts to modify durl to database/ */
      navOptTitle: "Ads",
      navOptUrl: "/",
      id: uuid(),
    },
    {
      navOptTitle: "Trade",
      navOptUrl: "/",
      id: uuid(),
    },
    {
      navOptTitle: "3rd Party Stores",
      navOptUrl: "/",
      id: uuid(),
    },
  ],
};
export default shop_head;
