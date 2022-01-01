const todoList = document.querySelector('.todo-list')
const todoInput = document.querySelector('.todo-input')
const addTodoBtn = document.querySelector('.add-todo-btn')


function addNewTodo(e) {
  e.preventDefault()

  const todoItem = document.createElement('div')
  todoItem.classList.add('todo-item')

  const todoItemText = document.createElement('li')
  todoItemText.classList.add('todo-text')

  const todoCompleteBtn = document.createElement('button')
  todoCompleteBtn.classList.add('complete-btn')

  const todoDeleteBtn = document.createElement('button')
  todoDeleteBtn.classList.add('delete-btn')

  todoCompleteBtn.innerHTML = `<i class="fa-solid fa-check"></i>`
  todoDeleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`
  
  todoItemText.innerHTML = todoInput.value
  
  todoItem.append(todoItemText, todoCompleteBtn, todoDeleteBtn)
  todoList.append(todoItem)
  
  
  //CLEAR THE INPUT FIELD AFTER ADDING TO LIST
  todoInput.value = ''
}

function checkAndDelete(e) {
  const item = e.target
  if(item.classList.contains('delete-btn')) {
    item.closest('.todo-item').remove()
  }

  if(item.classList.contains('complete-btn')) {
    item.previousSibling.classList.toggle('checked')
  }
}


addTodoBtn.addEventListener('click', addNewTodo)
todoList.addEventListener('click', checkAndDelete) 


//timestamp 35:47