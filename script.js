$(document).ready(function() {

  $('.touch').click(function(){

    var class_by_id = $('#touch-button').attr('class');

    if (class_by_id == 'touch on') {
      document.getElementById("touch-button").className="touch off";
    }
    else {
      document.getElementById("touch-button").className="touch on"
    }
  });

});
$(this).toggleClass('on');
