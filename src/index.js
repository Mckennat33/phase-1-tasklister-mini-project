


document.addEventListener("DOMContentLoaded", () => {
  
  const newForm = document.querySelector("#create-task-form").addEventListener('submit',  (event) => {
    let input = document.querySelector("#new-task-description").value
   
    event.preventDefault()
    ToDoList(input);

   
  });

});


function ToDoList(task) {

  let text = document.createElement('li')
  text.textContent = `${task}`
  document.querySelector("#tasks").appendChild(text)

  // tasks.appendChild(text);
  // const = deleteBtn = document.createElement("button")
  // deleteBtn.textContent = 'Delete'
  // deleteBtn.addEventListener('click', () => deleteItem(task))

}

// deleteItem(){
// 
//   task.remove();
// 
// }



//////////////////

// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
//   const newTaskForm = document.getElementById("create-task-form");
//   newTaskForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     renderTask(e.target.querySelector("input").value);
//     newTaskForm.reset();
//   })
//   
// });
// 
// function renderTask(userInput) {
//   const newItem = document.createElement("li");
//   const delBttn = document.createElement("button");
// 
//   newItem.textContent = `${userInput} `;
// //newItem.textContent = userInput;
//   delBttn.addEventListener("click", () => newItem.remove());
// 
//   tasks.appendChild(newItem);
//   delBttn.textContent = " del ";
//   newItem.appendChild(delBttn);
// }

