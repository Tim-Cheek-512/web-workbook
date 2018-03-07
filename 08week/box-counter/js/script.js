// when the document is done loading, run the script inside
$(document).ready(function() {
  var num = 0;
  var num2 = 10;
  var num3 = 100;
  $('#counter-1').click(function() {
    num++;
    $(this).text(num);
  })
  $('#counter-10').click(function() {
    num2+=10;
    $(this).text(num2);
  })
  $('#counter-100').click(function() {
    num3+=100;
    $(this).text(num3);
  })
});
$('#button1').click(function (){
  $('#counter-1').trigger('click')
  $('#counter-10').trigger('click')
  $('#counter-100').trigger('click');
}) 
