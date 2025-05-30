import properties from "@/data/properties.json";

export const whatsappHref = `https://wa.me/91${properties["contact.phone.whatsapp"].value}?text=Hello%20Kenrax`;
export const buyNowHref = whatsappHref + encodeURIComponent(", Please confirm Price and Stock Availability for the mentioned Product(s).\n");
export const checkPriceHref = whatsappHref + encodeURIComponent(", Please confirm Price for the mentioned Product(s).\n");
export const productsPageHref = "/products"
export const homePageHref = "/"