function Sweet(name, weight) {
    this.name = name;
    this.weight = weight;
}
Sweet.prototype.description = function() {
    return `Sweet ${this.name} weighs ${this.weight}`;
};
function Candy(filling) {
    this.filling = filling;
}
Candy.prototype.filling = function() {
    return `Candy ${this.name} filled ${this.filling}`;
};
Candy.prototype = new Sweet();
function Lollipop(taste) {
    this.taste = taste;
}
Lollipop.prototype.taste = function() {
    return `${this.taste} lollipop`;
};
Lollipop.prototype = new Sweet();
function Present(sweets) {
    this.sweets = sweets;
}
Present.prototype.sortByWeight = function() {
    return this.sweets.sort(function(a,b) {
        return a.weight - b.weight;
    });
};
Present.prototype.computeWeight = function() {
    let weight = 0;
    for(let i = 0; i < this.sweets.length; i++) {
        weight += this.sweets[i].weight;
    }
    return weight;
};
Present.prototype.searchSweet = function(name) {
    for(let i = 0; i < this.sweets.length; i++) {
        if(this.sweets[i].name === name) {
            return this.sweets[i];
        }
    }
    return "Sweet not found! So sad :(";
}
const kitkat = new Candy("wafer");
kitkat.name = "KitKat";
kitkat.weight = 24;
const mars = new Candy("nougat");
mars.name = "Mars";
mars.weight = 23;
const twix = new Candy("nougat + wafer");
twix.name = "Twix";
twix.weight = 28;
const russianCockerel = new Candy("strawberry");
russianCockerel.name = "Русский петушок";
russianCockerel.weight = 9;
const chupaChups = new Candy("Coca-Cola");
chupaChups.name = "Chupa Chups";
chupaChups.weight = 7;
const presentWhatIWant = new Present([kitkat, mars, chupaChups, twix]);
console.log(presentWhatIWant.computeWeight());
console.log(presentWhatIWant.searchSweet("KitKat"));
console.log(presentWhatIWant.sortByWeight());