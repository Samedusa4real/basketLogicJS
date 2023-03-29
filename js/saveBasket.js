import { basket, updateBasket } from "./updateBasket.js";
import { openBasketItems } from "./openBasketItems.js";

export function saveBasket() {
    localStorage.setItem("basket", JSON.stringify(basket));
    // openBasketItems()
}
