function Car_objet(Manu: any, Model: any, ...argu: any[]): void {
let car_obj: any = {Manu, Model,};
argu.forEach((arg , inddex) => {
if(inddex % 2 === 0 && typeof arg === 'string'){
car_obj[arg] = argu[inddex + 1];
}
});
return car_obj;
}

let car= Car_objet("Honda", "Civic", "Colour", "Red", "Year", "2002");
console.log(car)