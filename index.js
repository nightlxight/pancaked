var fs = require('fs');
const yaml = require('js-yaml');
const foods = yaml.load(fs.readFileSync('./data/foods.yml'));

function cake() {
    let cakes = []; 
}