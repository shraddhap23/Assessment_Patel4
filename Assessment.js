// //Problem 1 = a function that opens the door if the password is correct
$(document).ready(function(){

  function openDoor(password)
    var correct_password = "OpenSesame"

  if (password == correct_password) {
    return "The door is open."
  } else {
    return "You fall to your doom."
  };


//Problem 2 = a function that makes a sandwich from a hash

$(document).ready(function(){
  function makeSandwich (ingredients)
    var bread = ["whole wheat", "white"]
    var cheese = ["swiss", "cheddar"]
    var protein = ["chicken", "turkey"]
    var condiment = ["mayo", "ranch"]
    var sandwich = [bread, cheese, protein, condiment, bread]

    $("#bread").text([0]);
    $("#cheese").text([1]);
    $("#protein").text([1]);
    $("#condiment").text([0]);
    $("#bread").text([0]);

});





