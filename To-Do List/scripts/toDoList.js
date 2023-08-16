const todolist = [];
renderToDo();
function renderToDo(){

  let todolistHtml = '';

  for(let i = 0; i < todolist.length; i++){
    const todoObject = todolist[i];
    const { name, duedate } = todoObject;

      const html = `
      
      <div>${name}</div> 
      <div>${duedate}</div> 
      <button onclick="
        todolist.splice(${i}, 1);
        renderToDo();
      " class="button2">Delete</button>
      `;
      todolistHtml += html;

  }

  document.querySelector('.js-div')
    .innerHTML = todolistHtml;
 }
function addTodo(){
  
  const inputEle = document.querySelector('.js-name-input');
  const name = inputEle.value;

  const dateInput = document.querySelector('.js-date-input');
  const duedate = dateInput.value;

  if(name !== '' && duedate !== ''){
    todolist.push({
      name,
      duedate
    });
  }
  else{
    return 0;
  }

  inputEle.value = '';
  renderToDo();
}