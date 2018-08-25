// Back-end ////////////////////////////////////////////
//Arrays for matching values and texts when printing out.
var crustArray = ["Brooklyn Style","Hand Tossed","Crunchy Thin Crust"];
var toppingArray = ["Pepperoni", "Beef", "Ham", "Philly Steak"];
var sizeArray = ["Small", "Medium", "Large", "X-Large"];


// global variables
// orderIndex for appending added cart item.
var orderIndex = 0;
var totalPizza = 0;
var totalPrice = 0;

//Contructors and prototype function.
//Food class will be used to make menus including pizza.
function Food(toppingList, toppingCount, size, basePrice) {
  this.toppingList = toppingList;
  this.toppingCount = toppingCount;
  this.size = size;
  this.price = basePrice;
  this.available =true;
}

function Pizza(toppingList, toppingCount, size, basePrice, crust) {
  Food.apply(this, arguments);
  this.crust = crust;
}

Pizza.prototype.calcPrice = function () {
  this.price += (this.toppingCount-1)*2 + (this.size)*4 +(this.crust)*1;
};

Pizza.prototype.addTotal = function (){
  totalPrice += this.price;
  totalPizza ++;
}


// Functions
function textConfirm(crust, topping, size, price, addItem){
  $("#cart-list").show();
  // matching values to texts
  var sizeInputText = sizeArray[size];
  var crustInputText = crustArray[crust];
  if (!topping) {
    topping = "None";
  }

  orderIndex++;
  divAppender();
  // append previously stored format in div.append and put text inside it.
  $("div.append:last").html(addItem);
  $(".append:last-child .index").text(" "+orderIndex);
  $(".append:last-child .crust").text(" "+crustInputText);
  $(".append:last-child .topping").text(" "+topping);
  $(".append:last-child .size").text(" "+sizeInputText);
  $(".append:last-child .price").text(" "+price);
}

function divAppender(){
  $("#cart-list").append("<br><div class='append'></div>");
}


//Front-end ///////////////////////////////////////////////
$(document).ready(function(){
  $(".cart-item").hide();
  var addItem = $(".cart-item").html();

  // Submitting function linked to Add button
  $("#pizza-builder").submit(function(event){
    event.preventDefault();

    // Value Picking (crust, topping, size)
    var crustInputValue = parseInt($("#crust").val());
    var crustInputText = crustArray[crustInputValue]

    var toppingCount=0;
    var toppingInputText =[];

    $("input:checkbox[name=topping]:checked").each(function(){
      toppingCount++;
      toppingInputText.push(" "+toppingArray[parseInt($(this).val())]);
    });

    var sizeInputValue = parseInt($("input:radio[name=size]:checked").val());

    // create new pizza instance based on picked values.
    var pizzaInstance = new Pizza (toppingInputText, toppingCount, sizeInputValue, 8, crustInputValue);

    // calculate the price based on picked values.
    pizzaInstance.calcPrice();

    // Append order cart item (addItem) and text out results including calculated price.
    textConfirm(pizzaInstance.crust, pizzaInstance.toppingList, pizzaInstance.size, pizzaInstance.price, addItem);
    $("#cart-list").hide().fadeIn();

    // Click function linked to clickable appended orders. class detail is set to display:none in default.
    $(".clickable").last().click(function(){
      $(this).next(".detail").slideToggle();
    });

    // Add this instance's value to global total variables.
    pizzaInstance.addTotal();

    //Clear out previous user input field
    $("#pizza-builder")[0].reset();
  });

  $("#order").click(function(){
    $(".total").hide();
    $(".total").fadeIn(1000);
    $("button").prop("disabled", true);
    $(".total-pizza").text(" "+totalPizza);
    $(".total-price").text(" "+totalPrice);
  });
});
