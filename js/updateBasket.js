import { openBasketItems } from "./openBasketItems.js";

export let basket = [];


export function updateBasket() {
    const basketLink = document.querySelector("nav :nth-child(3)");
    basketLink.classList.add("after-add")

    let basketList = document.querySelector("#basket-list");
    basketList.innerHTML = "";
    let total = 0;
    let totalQuantity = 0;

    basket.forEach(item => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span style="color: blue">${item.name}</span>
            <span style="color: red">${item.quantity}x</span>
            <span style="color: green">$${(item.price * item.quantity).toFixed(2)}</span>
        `;

        basketList.appendChild(li);
        total += item.price * item.quantity;
        totalQuantity += item.quantity
    })
    basketLink.innerHTML = `<i class="fa-sharp fa-solid fa-basket-shopping"></i> <span>${totalQuantity}</span>`;

    const totalPrice = document.querySelector("#total-price");
    totalPrice.textContent = `TOTAL: ${total.toFixed(2)} AZN`;

    // openBasketItems()
}

if (localStorage.getItem("basket")) {
    basket = JSON.parse(localStorage.getItem("basket"));
    updateBasket();
}