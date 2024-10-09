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

function addDish(dishIndex) {
    let cartContainer = document.getElementById('cart_container');
    let myDishName = document.getElementById('dish_name' + dishIndex).innerHTML;
    let myDishPrice = document.getElementById('dish_price' + dishIndex).innerHTML;
    cartContainer.innerHTML += `<div class="my-current-cart">
                <p>${myDishName}</p>
                <p>${myDishPrice}</p>
                <input type="number" value="1">
            </div>`;
}

// after add dish amount '1' with option +/- '1'
// if amount < 1 delete from cart
// delete complete dish button
// price: subtotal + delivery costs + total sum (if pickup then no delivery costs)

// set projekt in github

