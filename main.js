//$. to check jquery methods



'use strict';
var $display;
$(document).ready(init);

function init(){
  $display = $('#display');

  $(document).on('keypress', keyPressed);

  $('.num').click(clickNum);
  $('#clear').click(clearClicked);
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

  // console.log(key);
}
