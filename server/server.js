const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require("socket.io").listen(server);
// const GameCollection = require("./games.js");

const port = 4836;

app.configure(() => {
  app.use(express.static(__dirname + '/../game'))
});

server.listen(port, () => {
  console.log(`Rodando no link: http://localhost:${port}`);
})
 
const Reponses = {
  SUCCESS: 0,
  GAME_EXISTS: 1,
  GAME_NOT_EXISTS: 2,
  GAME_FULL: 3,  
},

Request = {
    CREATE_GAME:'create-game',
    JOIN_GAME:'join-game',
}

io.sockets.on("connection", (socket) => {
    socket.on(Requests.CREATE_GAME, (gameName) => {
        if(games.createGame(gameName)){
      const game = game.getGame(gameName);
      if ( !game ) {
            socket.emit('response', Response.GAME_NOT_EXISTS);

        

      } else {
        if (game.addPlayer(socket)) {
          socket.emit('Response', Response.SUCCESS);
          
        }
          
      }



        } else {
            socket.emit('response', Reponses.GAME_EXISTS)

        }
      });

      socket.on(Requests.CREATE_GAME, (gameName) => {
            
      })
})

