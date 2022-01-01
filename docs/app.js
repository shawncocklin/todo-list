const todoList = document.querySelector('.todo-list')
const todoInput = document.querySelector('.todo-input')
const addTodoBtn = document.querySelector('.add-todo-btn')

document.addEventListener('DOMContentLoaded', getTodos)
addTodoBtn.addEventListener('click', addNewTodo)
todoList.addEventListener('click', checkAndDelete) 

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
  
  saveLocalTodoList(todoInput.value)
  
  //CLEAR THE INPUT FIELD AFTER ADDING TO LIST
  todoInput.value = ''
}

function checkAndDelete(e) {
  const item = e.target
  if(item.classList.contains('delete-btn')) {
    item.closest('.todo-item').remove()
    removeLocalTodos(item.closest('.todo-item'))
  }

  if(item.classList.contains('complete-btn')) {
    item.previousSibling.classList.toggle('checked')
  }
}

function saveLocalTodoList(todo) {
  //check for existing todo list in local storage
  let todos
  if(localStorage.getItem('todos') === null) {
    todos = []
  } else {
    todos = JSON.parse(localStorage.getItem('todos'))
  }

  todos.push(todo)
  localStorage.setItem('todos', JSON.stringify(todos))
}

function getTodos() {
  let todos
  if(localStorage.getItem('todos') === null) {
    todos = []
  } else {
    todos = JSON.parse(localStorage.getItem('todos'))
  }


  todos.forEach(todo => {
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
    
    todoItemText.innerHTML = todo

    
    todoItem.append(todoItemText, todoCompleteBtn, todoDeleteBtn)
    todoList.append(todoItem)
    
    
    //CLEAR THE INPUT FIELD AFTER ADDING TO LIST
    todoInput.value = ''
  })
}

function removeLocalTodos(todo) {
  let todos
  if(localStorage.getItem('todos') === null) {
    todos = []
  } else {
    todos = JSON.parse(localStorage.getItem('todos'))
  }

  const todoIndex = todo.children[0].innerText

  todos.splice(todos.indexOf(todoIndex), 1)
  localStorage.setItem('todos', JSON.stringify(todos))
  
}






//timestamp animation stuff starting at 38:00