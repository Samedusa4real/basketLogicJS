import { items } from "./items.js";
import { addToBasket } from "./addToBasket.js";
import { updateBasket, basket } from "./updateBasket.js";
import { openBasketItems } from "./openBasketItems.js";
import { saveBasket } from "./saveBasket.js";


const itemsList = document.querySelector("#items-list");

items.forEach(item => {
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
        // openBasketItems()
    });
})

openBasketItems()






// const items = [
//     {
//         name: "AIR MAX",
//         price: 14.99,
//         counter: 0,
//         image: "./assets/images/makasin.jpg"
//     },
//     {
//         name: "SWEATSHIRT",
//         price: 9.99,
//         counter: 0,
//         image: "./assets/images/kofta.jpeg"
//     },
//     {
//         name: "CAP",
//         price: 4.99,
//         counter: 0,
//         image: "./assets/images/papag.jpg"
//     }
// ];

// const itemsList = document.querySelector("#items-list");

// items.forEach(item => {
//     const li = document.createElement("li");
//     li.innerHTML = `
//     <h3>${item.name}</h3>
//     <img src="${item.image}">   
//     <p>Price: ${item.price.toFixed(2)} AZN</p>
//     <button>Add to Basket</button>
//     `;
//     itemsList.appendChild(li);

//     const button = li.querySelector("button");
//     button.addEventListener("click", () => {
//         addToBasket(item);
//     });
// })

// let basket = [];
// if (localStorage.getItem("basket")) {
//     basket = JSON.parse(localStorage.getItem("basket"));
//     updateBasket();
// }

// function addToBasket(item) {
//     // basket.push(item);
//     const basketItem = basket.find(basketItem => basketItem.name === item.name);
//     if (basketItem) {
//         basketItem.quantity++;
//     } else {
//         basket.push({ ...item, quantity: 1 });
//     }
//     updateBasket();
//     saveBasket();
// }

// function updateBasket() {
//     const basketLink = document.querySelector("nav :nth-child(3)");
//     basketLink.classList.add("after-add")

//     let basketList = document.querySelector("#basket-list");
//     basketList.innerHTML = "";
//     let total = 0;
//     let totalQuantity = 0;

//     basket.forEach(item => {
//         const li = document.createElement("li");

//         li.innerHTML = `
//             <span style="color: blue">${item.name}</span>
//             <span style="color: red">${item.quantity}x</span>
//             <span style="color: green">$${(item.price * item.quantity).toFixed(2)}</span>
//         `;

//         basketList.appendChild(li);
//         total += item.price * item.quantity;
//         totalQuantity += item.quantity
//     })
//     basketLink.innerHTML = `<i class="fa-sharp fa-solid fa-basket-shopping"></i> <span>${totalQuantity}</span>`;

//     const totalPrice = document.querySelector("#total-price");
//     totalPrice.textContent = `TOTAL: ${total.toFixed(2)} AZN`;
// }

// openBasketItems()

// function openBasketItems() {
//     const basketLink = document.querySelector("nav :nth-child(3)");
//     const showBasketItems = document.querySelector("body > section")
//     basketLink.addEventListener("click", function () {
//         if (showBasketItems.classList.contains("show-basket-items")) {
//             showBasketItems.classList.remove("show-basket-items")
//         }
//         else{
//             showBasketItems.classList.add("show-basket-items")
//         }
//     })
// }

// function saveBasket() {
//     localStorage.setItem("basket", JSON.stringify(basket));
// }