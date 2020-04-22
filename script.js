// var gameCharacter = {
//     name: "Nimish",
//     class: "Human",
//     health: 100,
//     get title() {
//         return this.name + " the " + this.class;
//     },
//     set maxHealth(h) {
//         this.health = h;
//     },
//     xPos: 0,
//     items: ["Knife", "Food"],
//     move: function(x) {
//         this.xPos += x;
//     }
// };



// PROTOTYPING
// function gameCharacter (name, xPos, health) {
//     this.name = name;
//     this.xPos = xPos;
//     this.health = health;
//     this.move = function (x) {
//         this.xPos += x;
//     }
// }

// var gc1 = new gameCharacter("Nimish", 0, 100);

// var gc2 = new gameCharacter("Zenva", 5, 150);

// gameCharacter.prototype.this.class = "Human";


// var heal = function(amount) {
//     this.health += amount;
// }

// gameCharacter.prototype.heal = heal;





// CLASS CONSTRUCTOR
class GameCharacter {

    constructor (name, xPos, health) {
        this.name = name;
        this.xPos = xPos;
        this.health = health;
    }

    move (x) {
        this.xPos += x;
    }
}

class HumanCharacter extends GameCharacter {
    constructor (name, xPos, health) {
        super (name, xPos, health);
        this.classification = "Human";
    }
}

var gc1 = new gameCharacter("Nimish", 0, 100);
var hc1 = new HumanCharacter("Zenva", 5, 150);