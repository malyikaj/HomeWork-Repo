
let user_input = 5;
let prime = true;

for (let i = 2;i < user_input; i++) {
    if(user_input % i === 0){
        prime = false;
    }
}

if (prime == true) {
    console.log(user_input + " is a prime number");
} else {
    console.log(user_input + " is not a prime number");
}