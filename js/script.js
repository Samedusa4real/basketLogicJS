const items = [
    {
        name: "AIR MAX",
        price: 14.99,
        image: "./assets/images/makasin.jpg"
    },
    {
        name: "SWEATSHIRT",
        price: 9.99,
        image: "./assets/images/kofta.jpeg"
    },
    {
        name: "CAP",
        price: 4.99,
        image: "./assets/images/papag.jpg"
    }
];

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
    });
})



let basket = [];
if (localStorage.getItem("basket")) {
    basket = JSON.parse(localStorage.getItem("basket"));
    updateBasket();
}

function addToBasket(item) {
    basket.push(item);
    updateBasket();
    saveBasket();
}

function updateBasket() {
    const basketLink = document.querySelector("nav :nth-child(3)");
    basketLink.innerHTML = `<i class="fa-sharp fa-solid fa-basket-shopping"></i> <span>${basket.length}</span>`;
    basketLink.classList.add("after-add")
    
    let basketList = document.querySelector("#basket-list");
    basketList.innerHTML = "";
    let total = 0;
    basket.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${item.name}</span>:
        <span>${item.price.toFixed(2)} AZN</span>
        `;
        basketList.appendChild(li);
        total += item.price;
    })
    const totalPrice = document.querySelector("#total-price");
    totalPrice.textContent = `TOTAL: ${total.toFixed(2)} AZN`;
}


openBasketItems()

function openBasketItems(){
    const basketLink = document.querySelector("nav :nth-child(3)");
    const showBasketItems = document.querySelector("body > section")
    basketLink.addEventListener("click", function(){
        if(showBasketItems.classList === "show-basket-items"){
            showBasketItems.classList.remove("show-basket-items")
        }
        showBasketItems.classList.add("show-basket-items")
    })
}

function saveBasket() {
  localStorage.setItem("basket", JSON.stringify(basket));
}
    
    




 // function testInnerLi()
    // {
    //     li.innerHTML = `
    //     <li>
    //     <h3>${item.name}</h3>
    //     <p>Price: $${item.price.toFixed(2)}</p>
    //     <button>Add to Basket</button>
    //     </li>
    //     `;
    // }