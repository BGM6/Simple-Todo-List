const $input = document.querySelector('.input')
const $todoList = document.getElementById('todoList')
const $spans = document.getElementsByTagName('span');
const $saveBtn = document.getElementById('saveBtn');
const $clearBtn = document.getElementById('clearBtn');


const loadTodo = () => {
    if (localStorage.getItem('todoList')) {
        $todoList.innerHTML = localStorage.getItem('todoList');
        deleteTodo();
    }
}

//line through
$todoList.addEventListener('click', event => {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
})
//save to localstorage
$saveBtn.addEventListener('click', () => {
    localStorage.setItem('todoList', $todoList.innerHTML);
    alert('Your list has been saved!')
})

//Clear localstorage
$clearBtn.addEventListener('click', () => {
    if (localStorage.getItem('todoList')) {
        localStorage.removeItem('todoList');
        $todoList.innerHTML = '';
        alert('Your list has been cleared!')
    }
})
//delete todolist
const deleteTodo = () => {
    for (let span of $spans) {
        span.addEventListener('click', event => {
            span.parentElement.remove();
            event.stopPropagation();
        })
    }
}

//Save list
$input.addEventListener('keyup', event => {
    let key = event.key || event.keyCode;
    if (key === 'Enter' || key === 13) {

        const li = document.createElement('li');
        const spanElement = document.createElement('span')
        const icon = document.createElement('i');

        let newTodo = $input.value;
        $input.value = '';

        icon.classList.add('fas', 'fa-minus-circle');
        spanElement.append(icon,' ');
        $todoList.appendChild(li).append(spanElement, newTodo);
        deleteTodo()
    }
})

loadTodo();
deleteTodo();
