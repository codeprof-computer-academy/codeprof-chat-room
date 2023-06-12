const socket = io.connect('http://localhost:5000')

const handle = document.querySelector('.handle');
const message = document.querySelector('.message');
const chat_container = document.querySelector('.chat-container')
const send_btn = document.querySelector('.btn-send')

send_btn.addEventListener('click', ()=>{
           
    socket.emit('chat', {
         handle:handle.value,
         message: message.value

    })
})

socket.on('chat', (data)=>{
         chat_container.innerHTML += `
         <h4>${data.handle} </h4>
         <p>${data.message}</p>
         `
})