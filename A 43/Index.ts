function make_great(name: any[]): void{
    for(let i = 0; i < name.length; i ++){
        console.log(name[i]);
    }
}

function show_megicians(name: any []){
    let show_meg: any[] = [];
    for (let i = 0; i < name.length; i++){
         show_meg.push(name[i] + " great megician");
    }
    return show_meg;

}

let show_meg: any[] = ["Hamza", "Umer", "Saeed", 99];
let namee: any[] = ["John", "Zuhaib", "Pakistan", 66];
let me = make_great(show_meg);
let mee = show_megicians(namee);
console.log(me);
console.log(mee);

