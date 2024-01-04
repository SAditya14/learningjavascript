// above 99, you get a life up
// below that you don't get it

// a welcome message to game

console.log("Welcome to Game!")
let score = 112;
let life = 3;
scoreinNumber = parseInt(score)
if (scoreinNumber > 99) {
    console.log("you gained a new life")
    score = score - 100
    life= life+1;
    console.log("you got a life")
    
}else{
    console.log("You didn't get a new life")
}

console.log(`your score ${score} and life is ${life}`)


