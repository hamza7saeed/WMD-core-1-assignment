let animals = ["Dog", "Cat", "Goat"];

for(let animal of animals){
   if (animal){
    console.log(`A ${animal} would make a great pet.`);
   }
}
for(let animal of animals){
    if(animal.includes("Dog")){
console.log(`This ${animal} is a loyal pet`);
    }
}