let diceContainer = document.getElementById("dice-container");
let buttonContainer = document.getElementById("button-container");
let dice = [];
let diceSum = 0;
let diceSumDiv = document.getElementById("dice-sum");
let dieAddBtn = document.getElementById("die-add");
let diceRollBtn = document.getElementById("dice-roll");

class die {
    constructor() {
        this.value = Math.floor(Math.random() * 6 + 1);
        this.div = document.createElement("div");
        this.div.classList.add("die");
        this.div.textContent = this.value;
        diceContainer.appendChild(this.div);
        //Event listener to re-roll a die when it is clicked on
        this.div.addEventListener("click", () => {
            this.roll();
            updateSum();
        });
        //Event listener to delete a die when it is double-clicked on
        this.div.addEventListener("dblclick", () => {
            //remove the div representing the die in the HTML
            this.div.remove();
            //remove the die object itself in the array
            let index = dice.indexOf(this);
            dice.splice(index, 1);

            updateSum();
        });
    }

    roll() {
        this.value = Math.floor(Math.random() * 6 + 1);
        this.div.textContent = this.value;
    }
}

dieAddBtn.addEventListener("click", function () {
    dice.push(new die());
    updateSum();
});

diceRollBtn.addEventListener("click", function () {
    dice.forEach(function (die) { die.roll() });
    updateSum();
});

//Function that computes the total of all dice on the page
//This function should be run whenever a die is added, removed, or re-rolled
function updateSum() {
    diceSum = dice.reduce((total, die) => { return total += die.value; }, 0);
    diceSumDiv.textContent = `Total: ${diceSum}`;
}

