//alert("Hi Afnan Mehmood Awan")
console.log("May Allah help me in my journey till death.")
function message(msg) {
    document.getElementById('output').innerHTML = msg + " EVENT";
}
function DisplayDate() {
    document.getElementById('date').innerHTML = Date();
}
function openMe() {
    x = document.getElementById('main');
    x.style.display = "block";
}
function closeMe() {
    x = document.getElementById('main');
    x.style.display = "none";
}
function reloadThePage() {
    window.location.reload();
}
function displayId(element) {
    console.log(element.id);
}
function fir(element) {
    document.getElementById('msg').style.backgroundImage = "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon.jpg')";
    document.getElementById('msg').innerHTML = element.alt;
}
function sec(element) {
    document.getElementById('msg').style.backgroundImage = "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon2.JPG')";
    document.getElementById('msg').innerHTML = element.alt;
}
function undo() {
    document.getElementById('msg').style.backgroundImage = " url('')";
    document.getElementById('msg').innerHTML = "Hover over any image!";
}

var fruits = ["mangoes", "bananas", "apples", "oranges", "pineapples"];

function loadFruits() {
    document.getElementById('fruits').innerHTML = fruits;
}
function myFruits() {
    var fruit = prompt('What is your favourite!');
    fruits[fruits.length] = fruit;
    document.getElementById('fruits').innerHTML = fruits;
    console.log(fruit);
}
/*
var hello = [, , 1, 1, 5, 7];
var sum = 0;
var count = 0;

if (hello.length > 0) {
    for (index = 0; index < hello.length; index++) {
        if (hello[index] != undefined){
            sum += hello[index];
            count = count + 1;
        }
    }
    document.write(sum / count);
}
else
    document.write("Empty Array");*/

var nam = prompt("what is your name?");

if (nam.length != 0) {
    if (nam == "afnan")
    document.write(`What a beautiful name, ${nam}!`);
    else
    document.write("GoodMorning " + nam);
}
else
    document.write("Are you feeling shy?");
