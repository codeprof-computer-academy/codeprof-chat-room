const express = module.require('express')
const socket = module.require('socket.io')

const app = express()
app.use(express.static('public'))


const PORT = process.env.PORT || 5000
const server = app.listen(PORT, ()=>{
       console.log("server listening on PORT " + PORT)
})

// putting the server inside the socket.io
const io = socket(server);

io.on('connection', (client)=>{
        console.log("One client has joined!")
        client.on('chat', (data)=>{
                 io.sockets.emit('chat', data)
        })
})
