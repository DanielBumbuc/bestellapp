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
    if (dishes[categoryIndex].dish[dishIndex].selected == true) {
        renderCartDishes(categoryIndex, dishIndex);
        return;
    } if (dishes[categoryIndex].dish[dishIndex].selected == false) {
        cartDishesArr.push({ 'name': myDishName, 'price': myDishPrice, 'amount' : 1, 'selected' : false, 'categoryIndex' : categoryIndex, 'dishIndex' : dishIndex});
        renderCartDishes(categoryIndex, dishIndex);
    }
}

function renderCartDishes(categoryIndex, dishIndex) {
    let cartContainer = document.getElementById('cart_container');
    cartContainer.innerHTML = '';
    console.log(cartDishesArr);
    for (cartDishIndex = 0; cartDishIndex < cartDishesArr.length; cartDishIndex++) {
        if (dishes[categoryIndex].dish[dishIndex].selected == true) {
            cartContainer.innerHTML += getCartDishes(cartDishIndex);
            calcPlusAmount(cartDishIndex);
            return;
        } if (dishes[categoryIndex].dish[dishIndex].selected == false) {  
            cartContainer.innerHTML += getCartDishes(cartDishIndex);
            dishes[categoryIndex].dish[dishIndex].selected = true;
        } 
    }
    
    
    console.log(dishes[categoryIndex].dish[dishIndex].selected);
}

function calcPlusAmount(cartDishIndex) {
    let dishAmount = cartDishesArr[cartDishIndex].amount;
    let plusAmount = dishAmount + 1;
    let amountValue = document.getElementById('dish_amount' + cartDishIndex);
    amountValue.innerHTML = plusAmount;
    cartDishesArr[cartDishIndex].amount = plusAmount;
}

function calcMinusAmount(cartDishIndex) {
    let dishAmount = cartDishesArr[cartDishIndex].amount;
    let minusAmount = dishAmount - 1;
    let amountValue = document.getElementById('dish_amount' + cartDishIndex);
    amountValue.innerHTML = minusAmount;
    cartDishesArr[cartDishIndex].amount = minusAmount;
    if (amountValue.innerHTML < 1) {
        deleteCart(cartDishIndex);  
    }

}

function deleteCart(cartDishIndex) {
    console.log(cartDishesArr);
    let categoryIndex = cartDishesArr[cartDishIndex].categoryIndex;
    let dishIndex = cartDishesArr[cartDishIndex].dishIndex;
    cartDishesArr.splice(cartDishIndex, 1);
    dishes[categoryIndex].dish[dishIndex].selected = false;
    renderCartDishes(categoryIndex, dishIndex)
    console.log(cartDishesArr);
}


// if amount < 1 delete from cart
// delete complete dish button
// price: subtotal + delivery costs + total sum (if pickup then no delivery costs)

