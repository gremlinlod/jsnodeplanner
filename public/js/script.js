var inputTodo = document.getElementById('inputTodo');
var listTodos = document.getElementById('listTodos');
var button = document.getElementById('buttonUpdate');


//dev tests
// function fill () {
//   var sometext = 'this is text ';
//   var somecode = '';
//   for (var i = 0; i<10; i++){
//     somecode += '<li> ' + sometext + i + ' </li>';
//   }
//   return somecode;
// }
function add (text) {
  var text = text;
  listTodos.innerHTML += '<li>' + text + '</li>';
}

// listTodos.innerHTML = fill();

inputTodo.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode == 13) {
    listTodos.innerHTML += '<li>' + inputTodo.value + '</li>';
  }});