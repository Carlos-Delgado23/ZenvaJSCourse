var gameCharacter = {
    name: "Nimish",
    class: "Human",
    health: 100,
    get title() {
        return this.name + " the " + this.class;
    },
    set maxHealth(h) {
        this.health = h;
    },
    xPos: 0,
    items: ["Knife", "Food"],
    move: function(x) {
        this.xPos += x;
    }
};

