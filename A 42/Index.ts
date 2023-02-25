function show_megicians(...Names: any[]): void{
    for(let Name of Names){
        if(Name){
            console.log(`${Name}`);
        } else{
            console.log();
        }
    }
}
let Names = ["John", "Davaid", "Taylor"];

for(let Name of Names){
    if(Name){
        console.log(`The great magician ${Name}`);
    } else {
        console.log();
    }
}
