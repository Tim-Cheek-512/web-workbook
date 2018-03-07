'use strict';
//  Job 1 Alert message ...

var listItems = document.getElementById("shopping-list").getElementsByTagName("li").length;
alert('You Have ' + listItems + ' Items in your cart.');

//   ....End job 1

// Job 2 - Add an h2 element to show how many items are in the cart ...
const header = document.getElementById('header');


var cartUpdate = document.createElement('h2');
cartUpdate.textContent = 'You have ' + listItems + ' items in your cart!';
cartUpdate.setAttribute('class', 'note');
header.appendChild(cartUpdate);

//   ...End job 2

//  Job 3 - give the ability to add items with javascript ....

const shoppingList = document.getElementById('shopping-list');

var inputBox = document.createElement('input');

inputBox.setAttribute('Id', 'textBox');
shoppingList.appendChild(inputBox);

document.getElementById("textBox").placeholder = "New Items here..";



var addBtn = document.createElement('button');
var insideText = document.createTextNode('Add Items');
addBtn.setAttribute('Id', 'button1');
shoppingList.appendChild(addBtn);
addBtn.appendChild(insideText);



document.getElementById('button1').onclick = function(){
  var text = document.getElementById('textBox').value;
  var li = '<li> + text + </li>';
  document.getElementById('shopping-list').appendChild(li);
}
//    ....End job 3







// document.addEventListener("DOMContentLoaded", function(event) {
    // You code here
// window.onload=function(){


 // job 1
// var listCountMessage=setListMessage();
// alert(listCountMessage);

 // job 2
// createListCountHeaderElement();
// updateListCountHeaderMessage();


 // job 3
// createNewItemTextInput();


 //part of job 4
// addRemoveButtonstoExistingItems();


// }

// Testing for js linking issue...


   // function myFunction() {
   //     alert("Hello! I am an alert box!");
   // }


//  ....End testing for JS linking issue.


   // function setListMessage(){
   //   let list = document.getElementById("shopping-list");
   //   alert(return "This page has " + list.children.length = " items in the shopping cart.");
   // }
//
//
//
//
// });
