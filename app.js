let diceContainer = document.getElementById("dice-container");
let buttonContainer = document.getElementById("button-container");
let dice = [];

class die{
    constructor()
    {
        this.value = Math.floor(Math.random()*6 + 1);
        this.div = document.createElement("div");
        this.div.classList.add("die");
        this.div.textContent = this.value;
        diceContainer.appendChild(this.div);
    }

    roll()
    {
        this.value = Math.floor(Math.random()*6 + 1);
        this.div.textContent = this.value;
    }
}

let dieAddBtn = document.getElementById("die-add");
dieAddBtn.addEventListener("click", function()
{
    dice.push(new die());
});

let diceRollBtn = document.getElementById("dice-roll");
diceRollBtn.addEventListener("click", function()
{
    dice.forEach(function(die) {die.roll()});
})

