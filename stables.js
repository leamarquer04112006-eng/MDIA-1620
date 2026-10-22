//------------------------- Seting up shop (Assignment 1) -------------------------//
let stable = "lecurie"
let lateFee = 1.2;

let cacharel = {
    name: "Cacharel",
    age: 8,
    favoriteSnack: "apples",
    boardingCost: 1000,
    feeLatePayment: 1000 * lateFee
}

let noisette ={
    name: "Noisette",
    age: 4,
    favoriteSnack: "chocolate",
    boardingCost: 1500,
    feeLatePayment: 1500 * lateFee
}

let tonerre = {
    name: "Tonerre",
    age: 13,
    favoriteSnack: "carots",
    boardingCost: 2000,
    feeLatePayment: 2000 * lateFee
}


let welcomeMessage = stable + " stable welcome you."
let latePaymentMessage = "Your monthly payement for " + cacharel.name + " is late, you must pay " + cacharel.feeLatePayment+ "$."


console.log(welcomeMessage + latePaymentMessage)

console.log(tonerre.feeLatePayment())