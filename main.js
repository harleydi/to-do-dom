let form = document.querySelector('form')
let todoSubmit = document.querySelector('#todoSubmit')
let todoText = document.querySelector('#todoText')
let list = document.querySelector('ul')
let trash = document.querySelector('#trash')
let items = document.querySelectorAll('li')
let deleteAll = document.querySelector('button')
let delCompleted = document.querySelector('#del-completed')

let todos = []

/* -------------------------------------------------------------------------- */
/*                              CREATE/VIEW TODOS                             */
/* -------------------------------------------------------------------------- */

form.addEventListener('submit', function(event){
    event.preventDefault()

    
    let item = document.createElement('li')
   

    item.innerText = todoText.value
    
    
    item.addEventListener('click', function(){
        item.classList.toggle('completed')
    })
    
    
    // div.append('<i class="fa-solid fa-trash"></i>')

    
    list.appendChild(item)
    todos.push(item)
    
    todoText.value = ''
})


/* -------------------------------------------------------------------------- */
/*                              DELETE ALL TODOS                              */
/* -------------------------------------------------------------------------- */

deleteAll.addEventListener('click', function(event){
    event.preventDefault()
    for (let i = 0; i < todos.length; i++) {
        todos[i].remove()
    }
})


/* -------------------------------------------------------------------------- */
/*                           DELETE COMPLETED TODOS                           */
/* -------------------------------------------------------------------------- */

delCompleted.addEventListener('click', function(event){
    event.preventDefault()
    for (let i = 0; i < todos.length; i++) {
        let todo = todos[i]
        if (todos[i].classList.contains('completed')) {
            todos.splice(i, 1)
        }
    }
    todos.forEach(todo => list.append(todo))
})