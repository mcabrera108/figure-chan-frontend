import { v4 as uuid } from "uuid";
const itemstatustype = [
  {
    itemTypeTitle: "In-Production",
    value: "In-Production",
    id: uuid(),
  },
  {
    itemTypeTitle: "Released",
    value: "Released",
    id: uuid(),
  },
  {
    itemTypeTitle: "Cancelled",
    value: "Cancelled",
    id: uuid(),
  },
];
export default itemstatustype;
