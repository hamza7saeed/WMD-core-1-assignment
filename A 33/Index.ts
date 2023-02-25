let Ordinal_Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let i = 0; i<Ordinal_Numbers.length; i++ ){
    if (Ordinal_Numbers[i] === 1){
         console.log(`${Ordinal_Numbers[i]}st`);
        } else if(Ordinal_Numbers[i] === 2){
            console.log(`${Ordinal_Numbers[i]}nd`);
        } else if(Ordinal_Numbers[i] === 3){
            console.log(`${Ordinal_Numbers[i]}rd`); 
        } else {
            console.log(`${Ordinal_Numbers[i]}th`);
        }
}