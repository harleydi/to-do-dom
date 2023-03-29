let form = document.querySelector('form')
let todoSubmit = document.querySelector('#todoSubmit')
let todoText = document.querySelector('#todoText')
let list = document.querySelector('ul')
let trash = document.querySelector('#trash')
let liHolder = document.querySelectorAll('#li-div')
let deleteAll = document.querySelector('#delete-all')
let delCompleted = document.querySelector('#del-completed')
let delOne = document.querySelector('#erase')
let edit = document.querySelector('#edit')

let todos = []


/* -------------------------------------------------------------------------- */
/*                              CREATE/VIEW TODOS                             */
/* -------------------------------------------------------------------------- */

form.addEventListener('submit', function(event){
    event.preventDefault()

    let liDiv = document.createElement('div')
    liDiv.setAttribute('id', 'li-div')
    
    let item = document.createElement('li')
    item.setAttribute('id', 'item-class')
    item.innerText = todoText.value

    let btnDiv = document.createElement('div')
    btnDiv.setAttribute('id', 'btn-div')

    let edit = document.createElement('button')
    edit.setAttribute('id', 'edit')
    edit.innerText = 'Edit'

    let del = document.createElement('button')
    del.setAttribute('id', 'erase')
    del.innerText = 'Delete'

    liDiv.appendChild(item)
    liDiv.appendChild(btnDiv)
    btnDiv.appendChild(edit)
    btnDiv.appendChild(del)
    list.appendChild(liDiv)
    
    item.addEventListener('click', function(){
        item.classList.toggle('completed')
    })

    todoText.value = ''

    edit.addEventListener('click', function(){
        todoText.value = item.innerText
        edit.innerText = 'Done' 
        item.value = todoText.value
   
        

    })

    

    del.addEventListener('click', function(){
        liDiv.remove()
    })
    
    
    
    
   

    
    
})


/* -------------------------------------------------------------------------- */
/*                             EDIT TODO                            */
/* -------------------------------------------------------------------------- */




/* -------------------------------------------------------------------------- */
/*                              DELETE ALL TODOS                              */
/* -------------------------------------------------------------------------- */

deleteAll.addEventListener('click', function(event){
    // event.preventDefault()
    let liItems = document.querySelectorAll('#li-div')
 
    liItems.forEach(item => item.remove())
 
})


/* -------------------------------------------------------------------------- */
/*                           DELETE COMPLETED TODOS                           */
/* -------------------------------------------------------------------------- */

delCompleted.addEventListener('click', function(){
    let liItems = document.querySelectorAll('#li-div')
    let items = document.querySelectorAll('#item-class')

    
    items.forEach(item => {
        if (item.classList.contains('completed')) {
            item.parentElement.remove()
        }
    })
})


/* -------------------------------------------------------------------------- */
/*                                 EDIT TODOS                                 */
/* -------------------------------------------------------------------------- */


