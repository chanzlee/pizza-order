//Arrays for pizza text outputs
var crustArray = ["Brooklyn Style","Hand Tossed","Crunchy Thin Crust"];
var toppingArray = ["Pepperoni", "Beef", "Ham", "Philly Steak"];
var sizeArray = ["Small", "Medium", "Large", "X-Large"];

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


function textConfirm(crust, topping, size, price){
  var sizeInputText = sizeArray[size];
  var crustInputText = crustArray[crust];
  if (!topping) {
    topping = "None";
  }
  $(".crust").text(crustInputText);
  $(".topping").text(topping);
  $(".size").text(sizeInputText);
  $(".price").text(price);
  $("#confirmation").show();
}

$(document).ready(function(){
  $("#pizza-builder").submit(function(event){
  event.preventDefault();

  var crustInputValue = parseInt($("#crust").val());
  var crustInputText = crustArray[crustInputValue]
  console.log("crustInputText"+crustInputText);

  var toppingCount=0;
  var toppingInputText =[];

  $("input:checkbox[name=topping]:checked").each(function(){
    toppingCount++;
    toppingInputText.push(" "+toppingArray[parseInt($(this).val())]);
  });
  typeof topppingInputText;
  typeof topppingCount;

  console.log("toppingCount"+toppingCount);
  console.log("toppingInputText"+toppingInputText);

  var sizeInputValue = parseInt($("input:radio[name=size]:checked").val());

  var pizzaInstance = new Pizza (toppingInputText, toppingCount, sizeInputValue, 8, crustInputValue);
  console.log(pizzaInstance.crust)
  console.log(pizzaInstance.toppingList);
  console.log(pizzaInstance.toppingCount)
  console.log(pizzaInstance.price)

  pizzaInstance.calcPrice();
  textConfirm(pizzaInstance.crust, pizzaInstance.toppingList, pizzaInstance.size, pizzaInstance.price);


  // var priceInputText = this.price(...arg);

  $("#pizza-builder")[0].reset();

  });



// For addtional form
// $("#").submit(function(event){
//   event.preventDefault();
// });

});
