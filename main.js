const todoButton = document.getElementById('todo-button')
const inputText = document.getElementById('input-todo')
const todoList = document.getElementById('todo-list')

todoButton.addEventListener('click', function() {
    const para = document.createElement('li')
    const span = document.createElement('span')
    if(inputText.value === '') {
        alert("Can't be empty!")
    } else {
        para.innerText = inputText.value
        para.className = 'liElem'
        span.innerText = '\u00D7'
        span.className = "close"
        todoList.appendChild(para).appendChild(span)
        getLiElem()
    }
})

const getLiElem = function() {
    const close = document.getElementsByClassName('close')
    const liElem = document.getElementsByClassName('liElem')
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            this.parentElement.remove()
        }
        liElem[i].onclick = function() {
            this.classList.toggle('clicked')
        }
    }
}