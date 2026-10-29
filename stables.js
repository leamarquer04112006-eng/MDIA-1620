//------------------------- Seting up shop (Assignment 1) -------------------------//
let stable = "lecurie"
let lateFee = 1.2;


let cacharel = {
    name: "Cacharel",
    nickname: "Chacha",
    age: 8,
    favoriteSnack: "apples",
    monthlyRent: 1000,
    inside: false,
    color: "grey", 
    breed: "Arabian",
    hungry: false,
    feeLatePayment: 1000 * lateFee,
}

let noisette ={
    name: "Noisette",
    nickname: "Nut",
    age: 4,
    favoriteSnack: "chocolate",
    monthlyRent: 1500,
    inside: false,
    color: "black", 
    breed: "Thoroughbred",
    hungry: true,
    feeLatePayment: 1500 * lateFee,
}

let tonerre = {
    name: "Tonerre",
    nickname: "Thunder",
    age: 13,
    favoriteSnack: "carots",
    monthlyRent: 2000,
    inside: true,
    color: "white", 
    breed: "Andalusian",
    hungry: false,
    feeLatePayment: 2000 * lateFee,

}

let welcomeMessage = stable + " stable welcome you."
let latePaymentMessage = "Your monthly payement for " + cacharel.name + " is late, you must pay " + cacharel.feeLatePayment+ "$."


console.log(welcomeMessage + latePaymentMessage)

console.log(tonerre.feeLatePayment)




let horses = [cacharel,noisette,tonerre]

let libellule ={
    name: "Libellule",
    nickname: "Lili",
    age: 6,
    favoriteSnack: "Humus",
    monthlyRent: 1500,
    inside: true,
    color: "brown", 
    breed: "Thoroughbred",
    hungry: true,
    feeLatePayment: 1500 * lateFee,
    
}

horses.push(libellule)







if (horses.location === true) {
    console.log("The horse is inside.");
} else {
    console.log("The horse is outside.")
}

if (horses.food === true) {
    console.log("The horse is hungry.");
} else {
    console.log("The horse is not hungry.")
}




function logAvailableStalls(numberOfStable, currentNumberOfHorses) {
    console.log("Available stables: " + (numberOfStables - currentNumberOfHorses));
}

logAvailableStables(10,horses.length);

function logLatePayment(horse) {
    console.log(
        horse.name + " must pay $" + horse.feeLatePayment + " if payment is late."
    );
}
