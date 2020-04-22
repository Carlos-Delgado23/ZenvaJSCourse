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




function gameCharacter (name, xPos, health) {
    this.name = name;
    this.xPos = xPos;
    this.health = health;
    this.move = function (x) {
        this.xPos += x;
    }
    this.class = "Human";
}

var gc1 = new gameCharacter("Nimish", 0, 100);
var gc2 = new gameCharacter("Zenva", 5, 150);

