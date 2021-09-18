var fs = require('fs');
const yaml = require('js-yaml');
const foods = yaml.load(fs.readFileSync('./data/foods.yml'));

function cakeFunction() {
    let cakes = [
        "pancake",
        "cake"
    ];
    let cake = cakes[Math.floor(Math.random() * cakes.length)];
    console.log(cake);
}

let num = 0;

cakeFunction();