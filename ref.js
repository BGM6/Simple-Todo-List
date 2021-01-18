// const $userInput = document.querySelector('#userInput');
// const $todoList = document.querySelector('#todoList');
// const $spans = document.getElementsByTagName('span');
// const $saveBtn = document.querySelector('#save');
// const $clearBtn = document.querySelector('#clear');
//
// //save to localStorage
// $saveBtn.addEventListener('click', function () {
//     localStorage.setItem('todoList', $todoList.innerHTML);
// })
//
// //delete function
// const deleteTodo = () => {
//     for (let span of $spans) {
//         span.addEventListener('click', event => {
//             span.parentElement.remove();
//             event.stopPropagation();
//         })
//     }
// }
//
// //linethrough list if clicked
//
// $todoList.addEventListener('click', function (event) {
//         if (event.target.tagName === 'LI') {
//             event.target.classList.toggle('checked');
//         }
//     }, false
// );
//
//
// //load todo list when the page is refreshed
//
// const loadTodo = () => {
//     if (localStorage.getItem('todoList')) {
//         $todoList.innerHTML = localStorage.getItem('todoList');
//         deleteTodo()
//     }
// }
//
//
// //clear localstorage with the clear button
// $clearBtn.addEventListener('click', () => {
//     if (localStorage.getItem('todoList')) {
//         $todoList.innerHTML = '';
//         localStorage.removeItem('todoList');
//     }
// });
//
// //create method
// $userInput.addEventListener('keyup', event => {
//     let key = event.key || event.keyCode;
//     if (key === 'Enter' || key === 13) {
//
//         const li = document.createElement('li');
//         const spanElement = document.createElement('span');
//         const icon = document.createElement('i');
//
//         let newTodo = $userInput.value;
//         $userInput.value = '';
//
//         icon.classList.add('fas', 'fa-trash-alt');
//         spanElement.append(icon);
//         $todoList.appendChild(li).append(spanElement, newTodo);
//
//         deleteTodo()
//     }
// });
//
// loadTodo();
