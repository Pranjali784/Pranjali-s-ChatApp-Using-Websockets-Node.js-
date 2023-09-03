const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');

const messageInput = document.getElementById('messageInp');

const messageCOntainer = document.querySelector('.container');


const name = prompt("Please enter your name to join the chat");

socket.emit('new-user-joined',name);