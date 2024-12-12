import { v4 as uuid } from "uuid";
import azFigure from "../../assets/azfigure.jpg";
import azFigure02 from "../../assets/azfigure02.jpg";
import azFigure03 from "../../assets/azfigure03.jpeg";

/* Ad Preview Data has different tags for different types of sales. 
This allows for better organization between seller ads

SaleType: ["Trade", "Sale", "Bundle Sale"], 
FreeShipping: ["True", "False"],
// A bundle sale are listings specifically for items that are being sold together or will have price discounts if multiple are bought together
ItemCondition: ["MIB", "Displayed", "Damaged", "Missing Parts"],
ItemRating: ["NSFW"] //Tag will automatically be given upon filling in title name
PaymentType: ["Paypal G&S"]

When using a real API. Values will be modified for component and js file
*/
let date = "Aug 29, 2024";
const adData = [
  {
    adTitle: `
Atelier Totori ~Arland no Renkinjutsushi 2~ - Chim (Female) - Totooria Helmold - Nendoroid (#159) (Good Smile Company)`,
    currencyType: "",
    adPrice: "A-Z: [S] 1/7 Complete Figure",
    adTags: [
      { tagName: "Trade", id: uuid() },
      { tagName: "Displayed", id: uuid() },
      { tagName: "Damaged", id: uuid() },
      { tagName: "Paypal G&S", id: uuid() },
    ],
    adImgURL: { img: azFigure02, imgAlt: "Hello World" },
    freeShipping: false,
    sellerUsername: "Username123",
    sellerReviews: "100%",
    watching: 100,
    isNSFW: false,
    sellerLocation: "Texas",
    previewText: "This is some preview Text for the ad",
    listingDate: date, // Will calculate based on current time zone. Ex: "4 hours ago", "3 hours ago", "1 Day Ago"
    url: "/",
    id: uuid(),
  },
  {
    adTitle: `Fate/Apocrypha - Jeanne d'Arc - Mordred - 1/7 - Type-Moon Racing ver. (Plusone, Stronger)`,
    currencyType: "$",
    adPrice: "90.25",
    adTags: [
      { tagName: "Sale", id: uuid() },
      { tagName: "MIB", id: uuid() },
      { tagName: "Missing Parts", id: uuid() },
      { tagName: "Paypal G&S", id: uuid() },
    ],
    adImgURL: { img: azFigure03, imgAlt: "Hello World" },
    freeShipping: false,
    sellerUsername: "Username123",
    sellerReviews: "100%",
    watching: 50,
    isNSFW: false,
    sellerLocation: "Texas",
    previewText:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Velit nisl tincidunt convallis erat tempor, tempus montes dignissim. Lorem mauris velit lobortis parturient varius commodo.",
    listingDate: date, // Will calculate based on current time zone. Ex: "4 hours ago", "3 hours ago", "1 Day Ago"
    url: "/",
    id: uuid(),
  },
  {
    adTitle: "A-Z: [S] 1/7 Complete Figure",
    currencyType: "$",
    adPrice: "900000000",
    adTags: [
      { tagName: "Bundle Sale", id: uuid() },
      { tagName: "MIB", id: uuid() },
      { tagName: "NSFW", id: uuid() },
      { tagName: "Paypal G&S", id: uuid() },
    ],
    isNSFW: true,
    adImgURL: { img: azFigure, imgAlt: "Hello World" },
    freeShipping: true,
    sellerUsername: "Username123",
    sellerReviews: "100%",
    watching: 34,
    sellerLocation: "Texas",
    previewText:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Velit nisl tincidunt convallis erat tempor, tempus montes dignissim. Lorem mauris velit lobortis parturient varius commodo.",
    listingDate: date, // Will calculate based on current time zone. Ex: "4 hours ago", "3 hours ago", "1 Day Ago"
    url: "/",
    id: uuid(),
  },
];
export default adData;
