'use strict';

$(document).ready(function() {
  // start of making data blocks draggable...
    $('[data-block]').draggable({
      revert: "invalid"
    });

  // ...End of making data blocks draggable

  // Start of making drop zones droppable....

    $('[data-stack]').droppable({
      drop: function(event, ui){
        var drag = $(ui.draggable).data('block');
        console.log(drag);
        var last = $(this).children().last().data('block');
        console.log(last);
        if(drag > last){
          $(ui.draggable).draggable("option", "revert", true);
        } else {
          $(ui.draggable).appendTo($(this)).attr('style', 'position: relative');
        }
        // $(ui.draggable).appendTo($(this)).attr('style', 'position: relative');
      }
    })

  //.....End of making drop zones droppable

   //
});

// check for win
function checkWin1(){
  if($('[data-stack="3"]').children().length === 4){
    $("#announce-game-won").text('WINNER WINNER');
  }
}
