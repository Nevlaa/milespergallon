/*
********************************
Scott Horsburgh
MPG Application
06/12/2019
********************************
*/

//prompts user to input miles and gallons and accepts floating numbers
var miles = prompt("Enter miles driven");
miles = parseFloat(miles);
var gallons = prompt("Enter gallons of gas used");
gallons = parseFloat(gallons);

//Calculates miles per gallon based on user input and stores data to mpg 
//variable using parseInt making output an integer.
var mpg = miles/gallons;
mpg = parseInt(mpg);

//variables or identifiers to store message and user input
messageMiles = "Miles driven = " + miles;
messageGallons = "Gallons of gas = " + gallons;
messageMpg = "Miles per gallon = " + mpg;

//This is shown after user input from prompts
document.write("<h1>The Miles Per Gallon Application</h1>");
document.write(messageMiles + "<br>");
document.write( messageGallons + "<br><br>");
document.write(messageMpg);