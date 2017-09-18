"use strict";

let finalSandwichPrice = 0;
let selectedIngredient;


let choiceOfBread = document.getElementById("breads"),
    choiceOfMeat = document.getElementById("meats"),
    choiceOfCheese = document.getElementById("cheeses"),
    choiceofVeggie = document.getElementById("veggies"),
    choiceOfCondiment = document.getElementById("condiments"),
    theBestSanddwichEverMade = document.getElementById("theBestSanddwichEverMade"),
    toppingsEl = document.getElementById("toppingsEl");
    submitButton = document.getElementById("submit");

choiceOfBread.addEventListener("click", function(event) {
  selectedIngredient = event.target.id;                     
  selectedIngredient = selectedIngredient.split("-");          
  
  if (selectedIngredient[0] === "btn"){
    let breads = SandwichMaker.getBreadPrices();          
    let breadKey = selectedIngredient[1];                    
    finalSandwichPrice += breads[breadKey];               
    theBestSanddwichEverMade.innerHTML += `${selectedIngredient[1]}<br>`; 
    toppingsEl.innerHTML = `$${finalSandwichPrice} current total`;
    return toppingsEl.innerHTML;  
  }
});

choiceOfMeat.addEventListener("click", function(event) {
  selectedIngredient = event.target.id;                     
  selectedIngredient = selectedIngredient.split("-");          
  
  if (selectedIngredient[0] === "btn"){
    let meats = SandwichMaker.getMeatPrices();          
    let meatKey = selectedIngredient[1];                    
    finalSandwichPrice += meats[meatKey];               
    theBestSanddwichEverMade.innerHTML += `${selectedIngredient[1]}<br>`; 
    toppingsEl.innerHTML = `$${finalSandwichPrice} current total`;
    return toppingsEl.innerHTML;
  }
});

choiceOfCheese.addEventListener("click", function(event) {
  selectedIngredient = event.target.id;                     
  selectedIngredient = selectedIngredient.split("-");          
  
  if (selectedIngredient[0] === "btn"){
    let cheeses = SandwichMaker.getCheesePrices();          
    let cheesesKey = selectedIngredient[1];                    
    finalSandwichPrice += cheeses[cheesesKey];               
    theBestSanddwichEverMade.innerHTML += `${selectedIngredient[1]}<br>`; 
    toppingsEl.innerHTML = `$${finalSandwichPrice} current total`;
    return toppingsEl.innerHTML;  
  }
});

choiceofVeggie.addEventListener("click", function(event) {
  selectedIngredient = event.target.id;                     
  selectedIngredient = selectedIngredient.split("-");          
  
  if (selectedIngredient[0] === "btn"){
    let veggies = SandwichMaker.getVeggiePrices();          
    let veggiesKey = selectedIngredient[1];                    
    finalSandwichPrice += veggies[veggiesKey];               
    theBestSanddwichEverMade.innerHTML += `${selectedIngredient[1]}<br>`; 
    toppingsEl.innerHTML = `$${finalSandwichPrice} current total`;
    return toppingsEl.innerHTML;
  }
});

 choiceOfCondiment.addEventListener("click", function(event) {
  selectedIngredient = event.target.id;                     
  selectedIngredient = selectedIngredient.split("-");          
  
  if (selectedIngredient[0] === "btn"){
    let condiments = SandwichMaker.getCondimentsPrices();          
    let condimentsKey = selectedIngredient[1];                    
    finalSandwichPrice += condiments[condimentsKey];               
    theBestSanddwichEverMade.innerHTML += `${selectedIngredient[1]}<br>`; 
    toppingsEl.innerHTML = `$${finalSandwichPrice} current total`;
    return toppingsEl.innerHTML; 
  }
});


submitButton.addEventListener("click", function(event){
	let totalCost = document.getElementById("totalCost");
	totalCost.innerHTML = `Your Total is $${finalSandwichPrice.toFixed(2)}`;
	console.log(finalSandwichPrice);
});


// module.exports = 