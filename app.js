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

function updateSum() {
    diceSum = dice.reduce((total, die) => { return total += die.value; }, 0);
    diceSumDiv.textContent = `Total: ${diceSum}`;
}

