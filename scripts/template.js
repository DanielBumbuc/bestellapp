function getDishCategory(categoryIndex) {
    let dishCategory = `<div id="dish_category${[categoryIndex]}" class="dish-categorys">
        <img class="category-img" src="./assets/img/img${categoryIndex}.jpg" alt="">
        <h2>${dishes[0].dishArr[categoryIndex].categoryName}</h2>
    </div>`;
    return dishCategory;
}

function getDishName(dishIndex) {
    let dishName = `<div id="${categoryIndex}all_dishes${dishIndex}" class="all-dishes">
        <div id="my_dish_id${dishIndex}">
            <p id="${categoryIndex}dish_name${dishIndex}">${dishes[0].dishArr[categoryIndex].dish[dishIndex].name}</p>
            <p id="dish_ingredients${dishIndex}">${dishes[0].dishArr[categoryIndex].dish[dishIndex].ingredients}</p>
            <p id="${categoryIndex}dish_price${dishIndex}">${dishes[0].dishArr[categoryIndex].dish[dishIndex].price.toFixed(2)}€</p>
        </div>
        <div>
            <span onclick="addDish(${categoryIndex}, ${dishIndex})" class="add-button"></span>
            
        </div>
    </div>`
    return dishName;
}

function getCartDishes(categoryIndex, dishIndex, cartArrIndex) {
    let cartDishes = `<div id="my_selected_dish${categoryIndex}" class="my-selected-dish">
                    <p class="delivery-text">${dishes[0].cartArr[cartArrIndex].name}</p>
                    <p class="delivery-text">${dishes[0].cartArr[cartArrIndex].price}</p>
                <div class="icons">
                    <span onclick="calcMinusAmount(${cartArrIndex})" class="minus-button" id="minus"></span>
                    <span id="dish_amount${cartArrIndex}">${dishes[0].cartArr[cartArrIndex].amount}</span>
                    <span onclick="calcPlusAmount(${cartArrIndex})" id="plus${categoryIndex + dishIndex}" class="plus-button"></span>
                    <span onclick="deleteCart(${cartArrIndex})" class="trash-button"></span>
                </div>
            </div>`;

    return cartDishes
}

function getCartPrice() {
    let cartDishPrice = `<div id="cart_price"><p id="delivery_price">Lieferkosten: </p>
                <p id="total_price">Gesamtkosten: </p></div>`;

    return cartDishPrice
}

