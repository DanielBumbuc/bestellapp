function init() {
    renderDishCategory();
}

function renderDishCategory() {
    for (categoryIndex = 0; categoryIndex < dishes.length; categoryIndex++) {
        let contentRef = document.getElementById('order_container');
        contentRef.innerHTML += getDishCategory(categoryIndex);
        renderDishName(categoryIndex);
    }
}

function renderDishName(categoryIndex) {
    for (dishIndex = 0; dishIndex < dishes[categoryIndex].dish.length; dishIndex++) {
        let contentRef = document.getElementById('dish_category' + categoryIndex);
        contentRef.innerHTML += getDishName(dishIndex);
    }
}

function addDish(categoryIndex, dishIndex) {
    let myDishName = document.getElementById(categoryIndex + 'dish_name' + dishIndex).innerHTML;
    let myDishPrice = document.getElementById(categoryIndex + 'dish_price' + dishIndex).innerHTML;
    cartDishesArr.push({ 'name': myDishName, 'price': myDishPrice });
    renderCartDishes();
}

function renderCartDishes() {
    let cartContainer = document.getElementById('cart_container');
    cartContainer.innerHTML = '';
    for (cartDishIndex = 0; cartDishIndex < cartDishesArr.length; cartDishIndex++) {
        cartContainer.innerHTML += getCartDishes(cartDishIndex);
    }
}

function calcPlusAmount() {
    let dishAmount = +document.getElementById('dish_amount').innerHTML;
    let plusAmount = dishAmount + 1;
    let amountValue = document.getElementById('dish_amount');
    amountValue.innerHTML = plusAmount;
}

function calcMinusAmount() {
    let dishAmount = +document.getElementById('dish_amount').innerHTML;
    let minusAmount = dishAmount - 1;
    let amountValue = document.getElementById('dish_amount');
    amountValue.innerHTML = minusAmount;
    if (amountValue.innerHTML < 1) {
        delete cartDishes.name;
    }

}

function deleteCart(cartDishIndex) {
    cartDishesArr.splice(cartDishIndex, 1);
    renderCartDishes();
    console.log(cartDishesArr);

}

// if amount < 1 delete from cart
// delete complete dish button
// price: subtotal + delivery costs + total sum (if pickup then no delivery costs)

