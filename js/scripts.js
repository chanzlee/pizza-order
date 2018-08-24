var available=true;

var crustArray = ["Brooklyn Style","Hand Tossed","Crunchy Thin Crust"]

var toppingArray = ["Pepperoni", "Beef", "Ham", "Philly Steak"]

function Food(type, topping, price, available) {
  this.type = type;
  this.topping = topping;
  this.price = price;
  this.availalbe =available;
}

$(document).ready(function(){
  $("#pizza-builder").submit(function(event){
  event.preventDefault();
  var crustInput = crustArray[parseInt($("select#crust").is("selected").val())]
  console.log("crustInput"+crustInput);
  var toppingInput = toppingArray[parseInt($("#topping-list input").is("checked").val())]
  console.log("toppingInput"+toppingInput);
  $(".crust").text(crustInput);
  $(".topping").text(toppingInput);
  $(".size").text(sizeInput);
  $(".price").text(priceInput);

  });



// For addtional form
// $("#").submit(function(event){
//   event.preventDefault();
// });

});
