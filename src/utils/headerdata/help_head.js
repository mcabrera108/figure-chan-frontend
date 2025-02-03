import { v4 as uuid } from "uuid";
const help_head = {
  navTitle: "Help",
  navOptions: [
    {
      navOptTitle: "Rules and Guidelines",
      navOptUrl: "/rules",
      id: uuid(),
    },
    {
      navOptTitle: "FAQ",
      navOptUrl: "/faq",
      id: uuid(),
    },
    {
      navOptTitle: "Staff",
      navOptUrl: "/staff",
      id: uuid(),
    },
    {
      navOptTitle: "Report A Bug",
      navOptUrl: "/bugreport",
      id: uuid(),
    },
    {
      navOptTitle: "Support Us!",
      navOptUrl: "/support",
      id: uuid(),
    },
    {
      navOptTitle: "Advertise",
      navOptUrl: "/advertise",
      id: uuid(),
    },
  ],
};
export default help_head;
