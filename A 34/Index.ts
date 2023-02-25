let favorite_pizzas = ["Kabab crust", "Crown crust", "Stuf Crust"];

for(let favorite_pizza of favorite_pizzas){
    if(favorite_pizza.includes("Kabab crust")){
        console.log(`I like ${favorite_pizza} pizza`);
    }
}

for (let favorite_pizza of favorite_pizzas){
    console.log(`I really love ${favorite_pizza} pizza!`);
}