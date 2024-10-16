function getDishCategory(categoryIndex) {
    let dishCategory = `<div id="dish_category${[categoryIndex]}">
        <h1>${dishes[categoryIndex].categoryName}</h1>
    </div>`;
    return dishCategory;
}

function getDishName(dishIndex) {
    let dishName = `<div id="${categoryIndex}all_dishes${dishIndex}" class="all-dishes">
        <div id="my_dish_id${dishIndex}">
            <p id="${categoryIndex}dish_name${dishIndex}">${dishes[categoryIndex].dish[dishIndex].name}</p>
            <p id="dish_ingredients${dishIndex}">${dishes[categoryIndex].dish[dishIndex].ingredients}</p>
            <p id="${categoryIndex}dish_price${dishIndex}">${dishes[categoryIndex].dish[dishIndex].price}</p>
        </div>
        <div>
            <img onclick="addDish(${categoryIndex}, ${dishIndex})" class="add-button" src="./assets/icons/icons8-hinzufügen-50.png" alt="add-button">
        </div>
    </div>`
    return dishName;
}

function getCartDishes(cartDishIndex) {
        
    let cartDishes = `<div class="my-current-cart">
                <p>${cartDishesArr[cartDishIndex].name}</p>
                <p>${cartDishesArr[cartDishIndex].price}</p>
                <div>
                    <img onclick="calcMinusAmount(${cartDishIndex})" class="minus-button" id="minus${cartDishIndex}" src="./assets/icons/icons8-minus-64.png" alt="minus-button">
                    <span id="dish_amount${cartDishIndex}">${cartDishesArr[cartDishIndex].amount}</span>
                    <img onclick="calcPlusAmount(${cartDishIndex})" id="plus" class="plus-button" src="./assets/icons/icons8-hinzufügen-50.png" alt="plus-button">
                    <img onclick="deleteCart(${cartDishIndex})" src="./assets/icons/icons8-delete-48.png" alt="delete">
                </div>
            </div>`;

    return cartDishes
}