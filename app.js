'use strict';


//these are global, so can be called from anywhere
var form = document.getElementById('sample-form');
var table = document.getElementById('student-table');
var data = [];

function Student(first, last, status, plans) {
  this.first = first;
  this.last = last;
  this.enrolled = status;
  this.future_classes = plans;
}

//this thing is meant to capture form data. THATS IT
function formData(event)  {
  event.preventDefault();
  //preventDefault METHOD meant to prevent the DEFAULT ACTION of a certain thing
  //as in a link on google.com default to bring you to another page
  //preventDefault will prevent that from happening
  //this is used to prevent reloading the page for us when clicking submit button on form
  var first = event.target.first.value;
  //event is referencing event I'm doing (submit event in this context)
  //first says 'on submit (event) find this TARGET (wherever the even is being fired from, in this case the form) that has name equal to FIRST (points to the name field in the input box back in the HTML file) and assign it this VALUE
  var last = even.target.first.value;
  var enrolled = event.target.enrolled.checked;
  var futureClasses = event.target.future_classes.value;

  //right now can't push anything b/c of nothing to submit
  //BUT then push that new student as newly instantiated data with the following data
  //every time click submit, says dont reload page, push everything to my data array,and build that as a table row
  data.push(new Student(first, last, enrolled, futureClasses));
  //create our table here, by creating a function that will create our table data for us AND THEN WE CALL IT HERE OK?
  form.reset();
  //CLEARS EACH FORM FIELD AND RESET TO NOTHING AFTER EVERY CALL OF formData(event) which is the submittal of a new student object
}
