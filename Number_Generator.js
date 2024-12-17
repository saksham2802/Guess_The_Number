let a =prompt("Enter your favourite number between 1 and 10");

function rand_int(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let random_Int = rand_int(1, 10);
console.log("Random Integer between 10 and 50 is  " + random_Int);

if(random_Int==a){
    console.log("Same Number");
}
else{
    console.log("VERY CLOSE ")
    console.log("But Your number is "+a)
}