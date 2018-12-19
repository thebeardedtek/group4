$(document).ready(function () {
    // var data =
    //     [
    //         { "foodName": "Munchies", "pic": "img/munchies.jpg", "shipping": "1 hour", "price": "$1", "category": "Snack" },
    //         { "foodName": "Hot Wings", "pic": "img/Hot Wings.jng", "shipping": "1 hour", "price": "$15", "category": "Meal" },
    //         { "foodName": "Coke", "pic": "img/cake.jpg", "shipping": "1 hour", "price": "$3", "category": "Drink" },
    //         { "foodName": "cake", "pic": "img/demboyz.png", "shipping": "1 hour", "price": "$5", "category": "Desert" }
    //     ]

    // var output = '';

    // data.forEach(function (littleData) {
    //     output += `
    //     <div class="col col-lg-3">
    //         <div class="category">${littleData.category}</div>
    //         <div class="name">${littleData.foodName}</div>
    //         <div class="pic"><img src="${littleData.pic}"></div>
    //         <div class="shipping">${littleData.shipping}</div>
    //         <div class="price">${littleData.price}</div>
    //     </div> 
    //     `;
    // });



    //     $('#output').html(output);

    //     console.log(data);



// Activate Carousel
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function () {
    $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function () {
    $("#myCarousel").carousel("prev");
});

});
