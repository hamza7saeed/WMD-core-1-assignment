let user_names = ["Admin","Ali", "Ahmed", "Tauseef", "Amna"];

for(let user_name of user_names){
    if (user_name === "Admin"){
        console.log("Hello admin, thank you for loggin!")
    } else {
        console.log(`Hello ${user_name}, thank you for logging in again`);
    }
}
 