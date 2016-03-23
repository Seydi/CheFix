$(document).ready(function(){

/*Helper functions*/

// To make sure the email address has the proper format
function validateEmail(email) 
{
  var regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}


// Return true if all the requied fields are filled and the email
// is in the right format. Return false otherwise
function canSubmit(){
  var x = document.forms["myForm"]["firstname"];
  var y = document.forms["myForm"]["lastname"];
  var z = document.forms["myForm"]["email"];
  var w = document.forms["myForm"]["choice"];
  if(x.value =="" || y.value=="" || z.value=="" || w.value ==""){
    return false;
  }
  return validateEmail(z.value);
}


/*Actions/User Interaction*/

// When the "about" button is clicked, scroll to the about div
$("#aboutbut").click(function() {
  $('html,body').animate({
    scrollTop: $(".aboutblock").offset().top},
    'fast');
});


// When the "features" button is clicked, scroll to the features div
$("#featuresheadbut").click(function(){
  $('html,body').animate({
    scrollTop: $(".featuresblock").offset().top},
    'fast');
});


// When the "signup" button is clicked, scroll to the signup div
$("#signupheadbut").click(function(){
  $('html,body').animate({
    scrollTop: $(".signupblock").offset().top},
    'fast');
});

// When the "back to top" button is clicked, scroll to the top of the page
$("#bttbut").click(function(){
  $('html,body').animate({
    scrollTop: $(".header").offset().top},
    'fast');
});

// When the form's "submit" button is clicked, submit the data, confirm 
// submission to the user, and clear the form for a new submission
$("#subtn").click(function(){
  if(canSubmit()){ //if the form is ready for submission
    document.forms["myForm"].submit(); // submit the data
    document.forms["myForm"].reset(); //and reset the form values
    alert('Thank you for signing up. You will be eating like a king soon');
}
});

});