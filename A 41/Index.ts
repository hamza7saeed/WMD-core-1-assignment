function show_megicians(...Names: []): void{
    for(let Name of Names){
        if(Name){
            console.log(`${Name}`);
        } else{
            console.log();
        }
    }
}
let Names = ["John", "Davaid", "Taylor"];
console.log(Names);