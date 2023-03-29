import { basket, updateBasket } from "./updateBasket.js";
import { saveBasket } from "./saveBasket.js";


export function addToBasket(item) {
    const basketItem = basket.find(basketItem => basketItem.name === item.name);
    if (basketItem) {
        basketItem.quantity++;
    } else {
        basket.push({ ...item, quantity: 1 });
    }
    updateBasket();
    saveBasket();
}