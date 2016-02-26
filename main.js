//$. to check jquery methods



'use strict';
var $display;
$(document).ready(init);

function init(){
  $display = $('#display');

  $(document).on('keypress', keyPressed);

  $('.num').click(clickNum);
  $('#clear').click(clearClicked);
  $('#plusEqual').click(invertSign);
  $('#percent').click(percent);
  $('#decimal').click(addDecimal);
}


function clickNum() {
  var num = $(this).text();
  addNumToDisplay(num);
}

function clearClicked(){
  $('#display').text(0);
}

function addNumToDisplay(num) {
  var currentDisplay = $display.text();

  if(currentDisplay === '0'){
    $display.text(num);
  } else{
    $display.text(currentDisplay + num);
  }
}

function keyPressed(event) {
  event.preventDefault();
  var key = String.fromCharCode(event.charCode);
  if($.isNumeric(key)){
    addNumToDisplay(key);
  }

  if(key === 'c'){
    clearClicked();
  }
}

function invertSign(){
  var currentDisplay = $display.text();

  var inverted = currentDisplay * -1;
  $display.text(inverted)
}

function percent() {
  var currentDisplay = $display.text();
  var divided = currentDisplay / 100;
  $display.text(divided);
}

function addDecimal() {
  var currentDisplay = $display.text();

  if(!currentDisplay.includes('.')){
    $display.text(currentDisplay + '.');
  }
}
