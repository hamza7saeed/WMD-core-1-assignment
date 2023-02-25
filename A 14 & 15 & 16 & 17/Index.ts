let guestsNamee: Array<string> = ["Asif Zardari", "Nawaz Shareef", "Sheikh Rasheed"];

console.log(("Dear "+(guestsNamee[1]) + " Hope you are fine. Its my pleasure to invite you tonight in annual dinner which is arranged by our student union. If you join our party, obviously it will be illinumous.\nYour sencerely, \nName:\n"));
console.log(`Dear ${(guestsNamee[1])} ,Hope you are fine. It is regret news for me that you are not come on our occession because of ailment. I hope that you recovery for your illiness as soon.\nYour sincerely,\nName:\n`);

guestsNamee[4]= "Imran Khan" ;

console.log("New massage for new guest");

console.log(`Dear ${(guestsNamee[4])} ,Hope your are fine. Recently, we inveded our chief guest ${guestsNamee[1]} but unfortunetaly, due to illness he will not join us. Therefore, we invite you for our event, if you are come, it is delighted for us. We hope you will join as soon.\nYour sincerely,\nName:\n`);

console.log("We found a large dinning party");

guestsNamee.unshift("Tauseef");
guestsNamee.splice(2, 0, "Ali");
guestsNamee.push("Amjad");
for(let guest of guestsNamee){

console.log(`Dear ${guest} I like to inform you that we find a giant dinning hall for event as well as massive dinning table. Therefore, we need more guests who come and join with us`);
}

console.log("I regrad to inform you about shortage for food on dinner table tonight, So it,s my appology that please accept this and in further events we will innvited you.");

while(guestsNamee.length> 2){
    let removeGuest= guestsNamee.pop()!;
    console.log(`Sorry ${removeGuest}, we have not any space to invite you on a dinner party`);
}
console.log(`${guestsNamee[0]} and ${guestsNamee[1]},It is necessary for both you to attent the party in every cost`);


console.log(`guest list ${guestsNamee[0]}, ${guestsNamee[1]}`);