

const socketIO = require('socket.io')
const express = require('express');
const app = express();
const port = 3000;
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('message', (message) => {
        console.log('Received message:', message);
        io.emit('message', message); // Broadcast the message to all connected clients
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});


io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('userJoined', username => {
        socket.broadcast.emit('userJoined', username); // Broadcast the user joining info to all connected clients
    })
    
    socket.on('message', (message) => {
        console.log('Received message:', message);
        socket.broadcast.emit('message', message); // Broadcast the message to all connected clients
    });
    
    socket.on('disconnect', (username) => {
        console.log('A user disconnected');
        socket.broadcast.emit('userLeft', username); // Broadcast the user joining info to all connected clients
    });
});

app.use(express.static('templates'));

// Define a route handler for the default route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/templates/index.html');
});
app.get('/chat', (req, res) => {
    res.sendFile(__dirname + '/templates/chat.html');
});
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/templates/about.html');
});
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/templates/contact.html');
});


// app.listen(port, () => {
//     console.log(`App started at localhost:${port}`)
// })
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});