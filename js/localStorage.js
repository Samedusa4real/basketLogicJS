import { openBasketItems } from "./openBasketItems.js";

if (localStorage.getItem("basket")) {
    basket = JSON.parse(localStorage.getItem("basket"));
    updateBasket();
}

function saveBasket() {
    localStorage.setItem("basket", JSON.stringify(basket));
    // openBasketItems()
}