$(document).ready(function() {

  $('.touch').click(function(){

    var class_by_id = $('#touch-button').attr('class');

    if (class_by_id == 'touch on') {
      document.getElementById("touch-button").className="touch off";
      document.getElementById("menu").className="menu off";
      document.getElementById("opacity").className="opacity menu-off"
    }
    else {
      document.getElementById("touch-button").className="touch on"
      document.getElementById("menu").className="menu on";
      document.getElementById("opacity").className="opacity menu-on"
    }
  });

});
