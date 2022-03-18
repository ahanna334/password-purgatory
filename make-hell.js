/*
ToDo: async request to https://api.passwordpurgatory.com/make-hell?password=foo on form submit
This script should be embedable in an external page on another site (such as troyhunt.com!) so it's
an easy drop-in solution.
*/

function myFunction() {
var data = document.getElementById("password").value;
const Http = new XMLHttpRequest();
const url='https://api.passwordpurgatory.com/make-hell?password=' + data;
console.log(url)
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
console.log(Http.responseText)

var str = (Http.responseText);
var result = str.split(': "').pop().split('"')[0];
console.log(result)

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.beginPath();


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "14px";
ctx.fillStyle = "white";
ctx.fillText(result, 10, 50);
}
}