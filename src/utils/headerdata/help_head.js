import { v4 as uuid } from "uuid";
const help_head = {
  navTitle: "Help",
  navOptions: [
    {
      /*User would be redirected to database/search if user attempts to modify durl to database/ */
      navOptTitle: "About",
      navOptUrl: "",
      id: uuid(),
    },
    {
      navOptTitle: "FAQ",
      navOptUrl: "",
      id: uuid(),
    },
    {
      navOptTitle: "Staff",
      navOptUrl: "",
      id: uuid(),
    },
    {
      navOptTitle: "Report A Bug",
      navOptUrl: "",
      id: uuid(),
    },
    {
      navOptTitle: "Support Us!",
      navOptUrl: "",
      id: uuid(),
    },
    {
      navOptTitle: "Advertise",
      navOptUrl: "",
      id: uuid(),
    },
  ],
};
export default help_head;
