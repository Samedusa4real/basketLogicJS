export function openBasketItems() {
    const basketLink = document.querySelector("nav :nth-child(3)");
    const showBasketItems = document.querySelector("body > section")
    basketLink.addEventListener("click", function () {
        if (showBasketItems.classList.contains("show-basket-items")) {
            showBasketItems.classList.remove("show-basket-items")
        }
        else{
            showBasketItems.classList.add("show-basket-items")
        }
    })
}