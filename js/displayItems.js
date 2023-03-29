import { items } from "./items.js";

export const itemsList = document.querySelector("#items-list");

export let itemsLoop = items.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `
    <h3>${item.name}</h3>
    <img src="${item.image}">   
    <p>Price: ${item.price.toFixed(2)} AZN</p>
    <button>Add to Basket</button>
    `;
    itemsList.appendChild(li);

    const button = li.querySelector("button");
    button.addEventListener("click", () => {
        addToBasket(item);
    });
})