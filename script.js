function init() {
    let checkbox = document.getElementById('checkbox');
    checkbox.checked = false;
    renderDishCategory();
}

function renderDishCategory() {
    for (categoryIndex = 0; categoryIndex < dishes[0].dishArr.length; categoryIndex++) {
        let contentRef = document.getElementById('order_container');
        contentRef.innerHTML += getDishCategory(categoryIndex);
        renderDishName(categoryIndex);
    }
}

function renderDishName(categoryIndex) {
    for (dishIndex = 0; dishIndex < dishes[0].dishArr[categoryIndex].dish.length; dishIndex++) {
        let contentRef = document.getElementById('dish_category' + categoryIndex);
        contentRef.innerHTML += getDishName(dishIndex);
    }
}

function addDish(categoryIndex, dishIndex) {
    let deliveryButton = document.getElementById('delivery_button');
    let cartPlaceholder = document.getElementById('cart_placeholder');
    let cartSection = document.getElementById('cart_section');
    deliveryButton.classList.remove('d-none');
    cartPlaceholder.classList.add('d-none');
    if (dishes[0].dishArr[categoryIndex].dish[dishIndex].selected == true) {
        calcSelectedAmount(categoryIndex, dishIndex);
        Object.defineProperty(dishes[0].dishArr[categoryIndex].dish[dishIndex], "amount", { value: dishes[0].dishArr[categoryIndex].dish[dishIndex].amount });
        renderCartDishes(categoryIndex, dishIndex);
        return;
    } if (dishes[0].dishArr[categoryIndex].dish[dishIndex].selected == false) {
        Object.defineProperty(dishes[0].dishArr[categoryIndex].dish[dishIndex], "cIndex", { value: categoryIndex });
        Object.defineProperty(dishes[0].dishArr[categoryIndex].dish[dishIndex], "dIndex", { value: dishIndex });
        dishes[0].cartArr.push(dishes[0].dishArr[categoryIndex].dish[dishIndex]);
        dishes[0].cartPrice.push(dishes[0].dishArr[categoryIndex].dish[dishIndex]);
        dishes[0].dishArr[categoryIndex].dish[dishIndex].selected = true;
    }
    renderCartDishes(categoryIndex, dishIndex);
    cartSection.classList.remove('d-none');
}

function renderCartDishes(categoryIndex, dishIndex) {
    let cartContainer = document.getElementById('cart_container');
    cartContainer.innerHTML = '';
    for (cartArrIndex = 0; cartArrIndex < dishes[0].cartArr.length; cartArrIndex++) {
        cartContainer.innerHTML += getCartDishes(categoryIndex, dishIndex, cartArrIndex);
    }
    setPrice();
}

function calcSelectedAmount(categoryIndex, dishIndex) {
    let dishAmount = dishes[0].dishArr[categoryIndex].dish[dishIndex].amount;
    let plusAmount = dishAmount + 1;
    dishes[0].dishArr[categoryIndex].dish[dishIndex].amount = plusAmount;
}

function calcPlusAmount(cartArrIndex) {
    let categoryIndex = dishes[0].cartArr[cartArrIndex].cIndex;
    let dishIndex = dishes[0].cartArr[cartArrIndex].dIndex;
    let dishAmount = dishes[0].dishArr[categoryIndex].dish[dishIndex].amount;
    let plusAmount = dishAmount + 1;
    dishes[0].dishArr[categoryIndex].dish[dishIndex].amount = plusAmount;
    renderCartDishes(categoryIndex, dishIndex);
}

function calcMinusAmount(cartArrIndex) {

    let categoryIndex = dishes[0].cartArr[cartArrIndex].cIndex;
    let dishIndex = dishes[0].cartArr[cartArrIndex].dIndex;
    let dishAmount = dishes[0].dishArr[categoryIndex].dish[dishIndex].amount;
    let minusAmount = dishAmount - 1;
    dishes[0].dishArr[categoryIndex].dish[dishIndex].amount = minusAmount;
    dishes[0].cartPrice[cartArrIndex].totalPrice = minusAmount;
    if (dishes[0].dishArr[categoryIndex].dish[dishIndex].amount < 1) {
        dishes[0].cartPrice.splice(cartArrIndex, 1);
        deleteCartAmount(categoryIndex, dishIndex, cartArrIndex);
    }
    renderCartDishes(categoryIndex, dishIndex);
    setPrice();
}

function setPrice() {
    let deliveryButton = document.getElementById('delivery_button');
    let cartPlaceholder = document.getElementById('cart_placeholder');
    let cartContainer = document.getElementById('cart_container');
    let cartPrice = document.getElementById('my_cart_price');
    for (priceIndex = 0; priceIndex < dishes[0].cartPrice.length; priceIndex++) {
        calcPrice();
    }
    if (dishes[0].cartPrice.length == 0) {
        deliveryButton.classList.add('d-none');
        cartPlaceholder.classList.remove('d-none');
        cartContainer.innerHTML = '';
        cartPrice.innerHTML = '';
    }
}

function calcPrice() {
    let cartContainer = document.getElementById('my_cart_price');
    let myPrice = dishes[0].cartPrice[priceIndex].price;
    let myAmount = dishes[0].cartPrice[priceIndex].amount;
    let myResult = myAmount * myPrice;
    Object.defineProperty(dishes[0].cartPrice[priceIndex], "totalPrice", { value: 0, configurable: true });
    Object.defineProperty(dishes[0].cartPrice[priceIndex], "totalPrice", { value: myResult, configurable: true });
    let cartPrices = dishes[0].cartPrice.map((cartDish) => cartDish.totalPrice);
    let subtotal = cartPrices.reduce((acc, curr) => acc + curr);
    cartContainer.innerHTML = getCartPrice();
    setDeliveryPrice();
    calcTotalCost(subtotal);
}

function deleteCartAmount(categoryIndex, dishIndex, cartArrIndex) {
    dishes[0].cartArr.splice(cartArrIndex, 1);
    dishes[0].dishArr[categoryIndex].dish[dishIndex].selected = false;
    dishes[0].dishArr[categoryIndex].dish[dishIndex].amount = 1;
    renderCartDishes(categoryIndex, dishIndex)
}

function deleteCart(cartArrIndex) {
    let categoryIndex = dishes[0].cartArr[cartArrIndex].cIndex;
    let dishIndex = dishes[0].cartArr[cartArrIndex].dIndex;
    dishes[0].cartArr.splice(cartArrIndex, 1);
    dishes[0].cartPrice.splice(cartArrIndex, 1);
    dishes[0].dishArr[categoryIndex].dish[dishIndex].selected = false;
    dishes[0].dishArr[categoryIndex].dish[dishIndex].amount = 1;
    renderCartDishes(categoryIndex, dishIndex)
}

function setDeliveryPrice() {
    let deliveryBtn = document.getElementById('delivery');
    let deliveryText = document.getElementById('delivery_price');
    if (deliveryBtn.checked == true) {
        let deliveryPrice = 2;
        deliveryText.innerHTML += `<span id="delivery_value">${deliveryPrice.toFixed(2)}</span>€`;
    } else {
        let deliveryPrice = 0;
        deliveryText.innerHTML += `<span id="delivery_value">${deliveryPrice.toFixed(2)}</span>€`;
    }
}

function calcTotalCost(subtotal) {
    let deliveryText = document.getElementById('total_price');
    let deliveryValue = document.getElementById('delivery_value');
    let deliveryCost = Number(deliveryValue.innerHTML) + subtotal;
    deliveryText.innerHTML += `<span id="total_value">${deliveryCost.toFixed(2)}</span>€`
}

function togglePosition(id) {
    let checkbox = document.getElementById('checkbox');
    let myId = document.getElementById(id);
    let myCartStyle = document.getElementById('cart_style');
    let mainPage = id;
    checkbox.classList.toggle('fixed');
    checkCheckbox(myId, myCartStyle, mainPage);
}

function checkCheckbox(myId, myCartStyle, mainPage) {
    if (mainPage == 'main') {
        if (checkbox.checked) {
            myCartStyle.classList.add('hidden');
            myCartStyle.classList.remove('show');
        } else {
            myCartStyle.classList.remove('hidden');
            myCartStyle.classList.add('show'); 
        }
        return;
    }
    if (checkbox.checked) {
        myId.classList.remove('standard-content');
        myId.classList.add('fit-content');
    } else {
        myId.classList.remove('fit-content');
        myId.classList.add('standard-content');
    } 
}

function responsiveToggleBasket() {
    let orderContainer = document.getElementById('order_container');
    let cartContainer = document.getElementById('cart_style');
    orderContainer.classList.toggle('d-none');
    cartContainer.classList.toggle('hidden-cart');
}