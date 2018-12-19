$(document).ready(function() {
    function getListOfFoods(){


        var data =
        [
            { "foodName": "Munchies", "pic": "img/munchies.jpg", "shipping": "1 hour", "price": "$1", "category": "Snack" },
            { "foodName": "Hot Wings", "pic": "img/Hot Wings.jng", "shipping": "1 hour", "price": "$15", "category": "Meal" },
            { "foodName": "Coke", "pic": "img/cake.jpg", "shipping": "1 hour", "price": "$3", "category": "Drink" },
            { "foodName": "cake", "pic": "img/demboyz.png", "shipping": "1 hour", "price": "$5", "category": "Desert" }
        ]

    var output = '';

    data.forEach(function (littleData) {
        output += `
        <div class="col col-lg-3">
            <div class="category">${littleData.category}</div>
            <div class="name">${littleData.foodName}</div>
            <div class="pic"><img src="${littleData.pic}"></div>
            <div class="shipping">${littleData.shipping}</div>
            <div class="price">${littleData.price}</div>
        </div> 
        `;
    });



        $('#output').html(output);

        console.log(data);
      
    }
    getListOfFoods();

    var foodsInCart = [];

// 7,'Munchies', 5, 9.99
    window.toggleAddCartClass = function (id, name, shipping, price, foodCover){
        console.log('clicked add to cart');

        $('#menu-cart').css('display', 'none');
        
        $('#add-to-cart-' + id).toggleClass('add-to-cart-green');

        var hasActiveClass = $('#add-to-cart-' + id).hasClass('add-to-cart-green');
        if(hasActiveClass){
            
            var food = {};
            food.productId = id;
            food.name = name;
            food.shipping = shipping;
            food.price = price;
            food.foodCover = foodCover;
            foodsInCart.push(food);
        } else {
            
            for(let x of foodsInCart){
                if(x.productId === id){
                    let foodToRemove = foodsInCart.indexOf(x);
                    foodsInCart.splice(foodToRemove,1);
                }
            }
            
        }

        event.preventDefault();
        event.stopPropagation();
        console.log('foodsInCart', foodsInCart);
    }

    window.removeFromCart = function(id){

        for(let x of foodsInCart){
            if(x.productId === id){
                let foodToRemove = foodsInCart.indexOf(x);
                foodsInCart.splice(foodToRemove,1);
            }
        }

        $('#add-to-cart-' + id).removeClass('add-to-cart-green');

        getCartDetails();
        getCartTotals();

    }

    function getCartDetails(){
        if(foodsInCart && foodsInCart.length > 0){
            var cartOutput = '';

            foodsInCart.forEach(function(foodInCart){

                cartOutput += `
                    <div class="cart-img">
                        <picture>
                            <img src="${foodInCart.foodCover}">
                        </picture>
                        <div class="cart-details">
                            <div class="cart-actions">
                                <span class="cart-quantity">Quantity 1</span>
                                <span class="cart-price">$${foodInCart.price}</span>
                                <button onclick="removeFromCart(${foodInCart.productId})" class="btn btn-primary">Remove</button>
                            </div>
                        </div>
                    </div>
                    `

                $('#cart-output').html(cartOutput);
            });

        } else {
            var noDetails = `
                <div class="no-items">You Have No Items In Cart</div>
            `
            $('#cart-output').html(noDetails);
        }
    }

    function getCartTotals(){
        var prices = [];
        var totalCartPrice = null;

        foodsInCart.forEach(function(foodPrice){
            totalCartPrice += Number(foodPrice.price);
        });

        var totalCartQuantity = foodsInCart.length;

        if(totalCartPrice && totalCartPrice !== null){
            $('#cart-total-price').html('Total $' + totalCartPrice);
            $('#cart-total-quantity').html('You Have ' + totalCartQuantity + ' Item(s) In Your Cart');
        } else {
            $('#cart-total-price').html('Total $0');
            $('#cart-total-quantity').html('You Have 0 Item(s) In Your Cart');
        }

        
    }

    window.toggleShowCart = function (){
        console.log('clicked show cart');
        $('#menu-cart').toggle().toggleClass('animated slideInLeft');

        getCartDetails();
        getCartTotals();

        event.preventDefault();
        event.stopPropagation();
    }

    window.toggleShowChat = function(){
        $('#chat i').toggleClass('chat-active');

        $('#chat-box').toggle().toggleClass('animated slideInUp');
    }

});