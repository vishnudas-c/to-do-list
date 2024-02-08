
  
function addTodo() {
  var Input = document.getElementById("todo-input");
  var List = document.getElementById("todo-list");
  var Text = Input.value;

  if (Text=== "") {
    alert("Please enter a task!");
    return;
  }

  var listItem = document.createElement("li");
  listItem.className = "todo-item";
  listItem.innerHTML = `
    <span>${Text}</span>
    <button style="background-color: transparent; border: none;margin-left: 150px;" onclick="editTodo(this)"><i class="fa-solid fa-pen-to-square" style="color: #000000;"></i></button>
    <button style="background-color: transparent; border: none;margin-top: 20px;margin-left: 150px;" onclick="deleteTodo(this)"><i class="fa-solid fa-trash-can fa-xl" style="color: #000000;"></i></button>
  `;
  List.appendChild(listItem);
  Input.value = "";
}

function deleteTodo(button) {
  var listItem = button.parentElement;
  listItem.remove();
}
function editTodo(button){
  var listItem= button.parentElement;
   var spanElement = listItem.querySelector('span');
    var newText = prompt('Edit your task:', spanElement.innerText);
    if (newText !== null && newText!== '') {
      spanElement.innerText = newText;
    }
}