let current_users = ["Usman", "Ali", "Umer", "Amna", "Aliya"];
let new_users = ["Tauseef", "ALI", "UMER", "Hammad", "Tayyab"];

for(let new_user of new_users){
    if(new_user.includes("ALI")){
         console.log("The person will need to enter a new username");
    } else {
        console.log("The username is available");
    }
}