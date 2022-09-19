const express = require("express");
const app = express();
const PORT = 5000;
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    console.log("user connectinog");
    socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
    })
})

server.listen(PORT, () => {
    console.log("server is running!!")}
    );

