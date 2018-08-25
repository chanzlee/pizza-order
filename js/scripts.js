//Arrays for pizza text outputs
var crustArray = ["Brooklyn Style","Hand Tossed","Crunchy Thin Crust"];
var toppingArray = ["Pepperoni", "Beef", "Ham", "Philly Steak"];
var sizeArray = ["Small", "Medium", "Large", "X-Large"];


var orders= {};
var orderIndex = 0;

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

//Create Pizza class from Food Class.
// Pizza.prototype = Object.create(Food.prototype);
// Pizza.prototype.constructor = Pizza;

Pizza.prototype.calcPrice = function () {
  this.price += (this.toppingCount-1)*2 + (this.size)*4 +(this.crust)*1;
};

function textConfirm(crust, topping, size, price, addConfirm){
  var sizeInputText = sizeArray[size];
  var crustInputText = crustArray[crust];
  if (!topping) {
    topping = "None";
  }
  orderIndex++;
  console.log(orderIndex);
  confirmAppender();

    $("div.append:last").html(addConfirm);
  $(".append:last-child .index").text(orderIndex);
  $(".append:last-child .crust").text(crustInputText);
  $(".append:last-child .topping").text(topping);
  $(".append:last-child .size").text(sizeInputText);
  $(".append:last-child .price").text(price);
}

function confirmAppender(){
  $("#confirm-list").append("<div class='append'></div>");
}

$(document).ready(function(){
  $(".confirm").hide();
  var addConfirm = $(".confirm").html();

  $("#pizza-builder").submit(function(event){
  event.preventDefault();
  console.log("submit working");
  var crustInputValue = parseInt($("#crust").val());
  var crustInputText = crustArray[crustInputValue]

  var toppingCount=0;
  var toppingInputText =[];

  $("input:checkbox[name=topping]:checked").each(function(){
    toppingCount++;
    toppingInputText.push(" "+toppingArray[parseInt($(this).val())]);
  });
  typeof topppingInputText;
  typeof topppingCount;

  var sizeInputValue = parseInt($("input:radio[name=size]:checked").val());

  var pizzaInstance = new Pizza (toppingInputText, toppingCount, sizeInputValue, 8, crustInputValue);

  pizzaInstance.calcPrice();

  textConfirm(pizzaInstance.crust, pizzaInstance.toppingList, pizzaInstance.size, pizzaInstance.price, addConfirm);


  // var priceInputText = this.price(...arg);

  $("#pizza-builder")[0].reset();

  });

  $("#add").click(function(){

  });


// For addtional form
// $("#").submit(function(event){
//   event.preventDefault();
// });

});
