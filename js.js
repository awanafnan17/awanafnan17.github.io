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
    document.write(`<h2>What a beautiful name, ${nam}!<h2>`);
    else
    document.write("GoodMorning " + nam);
}
else
    document.write("<h4>Are you feeling shy?</h4>");


function onChange(){
    var email = document.getElementById('email');
    var confirm_email = document.getElementById('confirm_email');
    if (email.value != confirm_email.value){
    alert("Both emails must be same");
    return false;
    }
}
function returnToPreviousPage(){
    window.history.back();
}
function nickfunction(){
    if(document.getElementById('ynick').checked){
        document.getElementById('nick').style.display="inline";
        document.getElementById('nickname').setAttribute('required', true);
    }
    else{
        document.getElementById('nick').style.display="none";
        document.getElementById('nickname').removeAttribute('required');
    }
}