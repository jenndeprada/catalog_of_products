

let userName = localStorage.getItem('username')

let welcome = document.getElementsByClassName('appendUsername')
let oldText = welcome[0]['innerText']
let newText = oldText + " " + userName;

welcome[0]['innerText'] = newText



