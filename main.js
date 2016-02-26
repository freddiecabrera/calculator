
'use strict';
var $display;
$(document).ready(init);
function init(){
  $display = $('#display');
  $('.num').click(clickNum);
  $('#clear').click(clearClicked);




}


function clickNum() {
  var $this = $(this);
  console.log($this.text());
}

function clearClicked(){
  $('#display').text(0);
}
