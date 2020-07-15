const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const socketio = require("socket.io");
const http = require("http");

const routes = require("./routes");

const app = express();
const server = http.Server(app);
const io = socketio(server);


//GET, POST, PUT, DELETE

//req.query = acessar query params (para filtros)
//req.params = acessar route params (para edição, delete)
//req.body = acessar corpo da requisição
mongoose.connect("mongodb+srv://oministack:oministack@semanaoministack09-qmxbs.mongodb.net/semana09?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const ConnectedUsers = { }; //não usar em produção. Usar Redit(banco de daos rapido para guardar dados e não informações);

io.on("connection", socket => {
    
    const { user_id } = socket.handshake.query;

    ConnectedUsers[user_id] = socket.id;
});
app.use((req, res, next)=>{
    req.io = io;
    req.ConnectedUsers = ConnectedUsers;
    return next();
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'Uploads')));
app.use(routes);

server.listen(3333);