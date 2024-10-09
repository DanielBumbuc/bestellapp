function getDishCategory(categoryIndex) {
    let dishCategory = `<div id="dish_category${[categoryIndex]}">
        <h1>${dishes[categoryIndex].categoryName}</h1>
    </div>`;
    return dishCategory;
}

function getDishName(dishIndex) {
    let dishName = `<div id="all_dishes${dishIndex}" class="all-dishes">
        <div id="my_dish_id${dishIndex}">
            <p id="dish_name${dishIndex}">${dishes[categoryIndex].dish[dishIndex].name}</p>
            <p id="dish_ingredients${dishIndex}">${dishes[categoryIndex].dish[dishIndex].ingredients}</p>
            <p id="dish_price${dishIndex}">${dishes[categoryIndex].dish[dishIndex].price}</p>
        </div>
        <div>
            <img onclick="addDish(${dishIndex})" class="add-button" src="./assets/icons/icons8-hinzufügen-50.png" alt="add-button">
        </div>
    </div>`
    return dishName;
}

