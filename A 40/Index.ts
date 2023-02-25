function make_album(Artistname: any, Albumtitle: any, tracks?: any): void{
   let album: any = {Artistname , Albumtitle};
   if(tracks){
     album.tracks = tracks;
   }
   return album;
}

let al_1 = make_album("Jb", "Baby", "5");
let al_2= make_album("T.s", "Black water", "6");
let al_3= make_album("jonny","Work hard","3");

console.log(al_1);
console.log(al_2);
console.log(al_3);