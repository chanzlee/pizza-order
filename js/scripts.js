var crustArray = ["Brooklyn Style","Hand Tossed","Crunchy Thin Crust"];

var toppingArray = ["Pepperoni", "Beef", "Ham", "Philly Steak"];

var sizeArray = ["small", "medium", "large", "x-large"];

function Food(type, topping, price) {
  this.type = type;
  this.topping = topping;
  this.price = price;
  this.availalbe =true;
}

$(document).ready(function(){
  $("#pizza-builder").submit(function(event){
  event.preventDefault();

  var crustInputText = crustArray[parseInt($("select#crust").is("selected").val())]
  console.log("crustInputText"+crustInputText);

  var toppingInputValue =[];
  var toppingInputText =[];
  $("input:checkbox[name=topping]:checked").each(function(){
    toppingInputValue += parseInt(this.val());
    toppingInputText += toppingArray[parseInt(this.val()];

  console.log("toppingInputValue"+toppingInputValue);
  console.log("toppingInputText"+toppingInputText);

  var sizeInputText = sizeArray[parseInt($("input:radio[name=size]").is("checked").val())];
  console.log("sizeInputText"+sizeInputText);

  // var priceInputText = this.price(...arg);

  $(".crust").text(crustInputText);
  $(".topping").text(toppingInputText);})
  $(".size").text(sizeInputText);
  $(".price").text(priceInputText);

  });



// For addtional form
// $("#").submit(function(event){
//   event.preventDefault();
// });

});
