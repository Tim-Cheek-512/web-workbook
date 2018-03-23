'use strict';
// Start of code that will apply Xs and Os when each cell is clicked...
$(document).ready(function(){
  // Put app logic in here
  var turn = 'X';
  $('[data-cell]').on('click', function(){
    if($(this).text() === ''){
      $(this).text(turn);
        wins();
        if(turn === 'O'){
          turn = 'X';

        }else{
          turn = 'O';

        }
      }
  })

  // .....End of X/O application

   // Checking for Wins each way on the board...

  function wins() {
    if($('[data-cell="0"]').text() === turn &&
      $('[data-cell="3"]').text() === turn &&
      $('[data-cell="6"]').text() === turn ){
      alert(`${turn} Wins!`);
    }
      if($('[data-cell="1"]').text() === turn &&
        $('[data-cell="4"]').text() === turn &&
        $('[data-cell="7"]').text() === turn ){
        alert(`${turn} Wins!`);
    }
        if($('[data-cell="2"]').text() === turn &&
          $('[data-cell="5"]').text() === turn &&
          $('[data-cell="8"]').text() === turn ){
          alert(`${turn} Wins!`);
      }
          if($('[data-cell="0"]').text() === turn &&
            $('[data-cell="4"]').text() === turn &&
            $('[data-cell="8"]').text() === turn ){
            alert(`${turn} Wins!`);
        }
            if($('[data-cell="2"]').text() === turn &&
              $('[data-cell="4"]').text() === turn &&
              $('[data-cell="6"]').text() === turn ){
              alert(`${turn} Wins!`);
          }
              if($('[data-cell="0"]').text() === turn &&
                $('[data-cell="1"]').text() === turn &&
                $('[data-cell="2"]').text() === turn ){
                alert(`${turn} Wins!`);
            }
                if($('[data-cell="3"]').text() === turn &&
                  $('[data-cell="4"]').text() === turn &&
                  $('[data-cell="5"]').text() === turn ){
                  alert(`${turn} Wins!`);
              }
                  if($('[data-cell="6"]').text() === turn &&
                    $('[data-cell="7"]').text() === turn &&
                    $('[data-cell="8"]').text() === turn ){
                    alert(`${turn} Wins!`);
                }
}

// Checking for tie - dont have to check for a win just check for empty spaces....



// .....end of cheking for spaces

// .....End of checking for wins


// Start of Clearing board button....


// ......End of clearing board button


// Start of adding Win alert as an h1 message...


//...End of adding h1 message
});
