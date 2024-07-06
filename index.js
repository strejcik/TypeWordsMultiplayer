const express = require('express');
var cors = require('cors');
const app = express();
const path = require('path');


var object = {};

function isEmptyObject(obj){
  return JSON.stringify(obj) === '{}';
}


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(3001, () => console.log('Listening on port 3001'));
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3001",
        methods: ["GET", "POST"]
      }
})

var object={};


















function countdown(minutes, seconds, arg) {
  var timeoutHandle;
  function tick() {
    var formattedTime =  minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
    
    if(object[arg.user.roomId]?.length === 2){
      io.to(object[arg.user.roomId][0].id).emit("timer-player-1-duration", formattedTime); 
      io.to(object[arg.user.roomId][1].id).emit("timer-player-2-duration", formattedTime); 
    }
    else
    {
      seconds = 0;
    }
          
      seconds--;
      if (seconds >= 0) {
          timeoutHandle = setTimeout(tick, 1000);
      } else {
          if (minutes >= 1) {
              setTimeout(function () {
                  countdown(minutes - 1, 59, arg);
              }, 1000);
          }
      }

      if(minutes == 0 && seconds == 0 && object[arg.user.roomId]?.length === 2)
      {
        io.to(object[arg.user.roomId][0].id).emit("timer-player-1-duration", formattedTime); 
        io.to(object[arg.user.roomId][1].id).emit("timer-player-2-duration", formattedTime); 
      }
  }
  tick();
}












io.on('connection', (socket) => {
    socket.on('disconnect', (s) => {
        console.log("user disconnected");
        
        //remove user after disconnection
        for (let key of Object.keys(object)) {
          console.log('OBJFIlter before removal', object);
          object[key] = object[key].filter(obj => obj.id !== socket.id);
          console.log('after removel', object[key]);
          

          //pass 'roomCreator' rule from user that disconnected to user that stayed in the room
          if(object[key]?.length ===1) {
            object[key][0].roomCreator = true
          }

          if (Array.isArray(object[key]) && object[key].length <= 0) {
            console.log('Array is empty');
            delete object[key];
          }
        }


        //console.log('OBJ filtered after removal:', object);
    })

    socket.on("createroom", (user) => {
      console.log('=====CREATE ROOM=====')  
      console.log(user);
        var array=[];
        array[0]={id:socket.id, roomId: user.roomId, roomCreator: true, clientId: user.id} // must pass roomId value to join the room
        object[user.roomId] = array;
        
          socket.join(user.roomId);
          io.to(object[array[0].roomId][0].id).emit("confirmjoin",array[0]);
        console.log(object[user.roomId][0]);
    })

    socket.on('joingame',function(game){
      console.log('======JOIN GAME========');
      let data = {};
      data.id=socket.id;
      data.roomId=game.roomId;
      if(isEmptyObject(object))
      {
         //join specific game room ( find room )
         data.roomCreator = true;
         var array=[];
         array[0]={id:socket.id, roomId: game.roomId, roomCreator: true, clientId: game.id} // must pass roomId value to join the room
         object[game.roomId] = array;
         socket.join(game.roomId);
         io.to(object[game.roomId][0].id).emit("confirmjoin",data);
        
       
      }
      else
      {
        var tempUser;
        for (let key of Object.keys(object)) {
          tempUser = object[key].find(obj => obj.id === socket.id);
        }



        if (!isEmptyObject(tempUser) && object[game.roomId]?.length < 2 && tempUser?.id !== object[game.roomId][0].id){
          console.log('2');
          console.log(tempUser);
          data.roomCreator = false;

          let arr=[];
          arr[0]={id:socket.id, roomId: game.roomId, roomCreator: false, clientId: game.id} // must pass roomId value to join the room
          object[game.roomId].push(...arr);
          socket.join(game.roomId);

          
          io.to(object[game.roomId][1].id).emit("confirmjoin",data);
        }

        if(object[game.roomId]?.length === 1 && tempUser?.id === object[game.roomId][0].id)
        {
          socket.join(game.roomId);
          io.to(object[game.roomId][0].id).emit("confirmjoin",tempUser);
        }

      }
      
      
      for (let key of Object.keys(object)) {
        console.log(JSON.stringify(object[key][0]));
      }
      console.log(tempUser);

    });

    socket.on('allowtojoin',function(data){
      console.log('Allowed to join: ', data);
      socket.join(data.roomId);
    });

    socket.on('allowtojoin-p2-to-p1', function(data){
      if(!isEmptyObject(object) && object[data.roomId].length === 2)
      {
        io.to(object[data.roomId][0].id).emit("allow-request-from-p2", data); 

      }
    })

    socket.on('typed-p1-to-p2', (d) => {
      if(!isEmptyObject(object) && object[d.user.roomId].length === 2)
      {
        io.to(object[d.user.roomId][1].id).emit("typed-p1-to-p2", d); 
      }
    });

    socket.on('typed-p2-to-p1', (dd) => {
      if(!isEmptyObject(object) && object[dd.user.roomId]?.length === 2)
      {
        io.to(object[dd.user.roomId][0].id).emit("typed-p2-to-p1", dd); 
      }
    });

    socket.on('switch-p2-screen', (ddd) => {
      io.to(object[ddd.roomId][1].id).emit("switch-p2-screen"); 
    });

    socket.on('result-p1-to-p2', (result) => {
      io.to(object[result.roomId][1].id).emit("result-p1-to-p2", result); 
    })

    socket.on('result-p2-to-p1', (result) => {
      io.to(object[result.roomId][0].id).emit("result-p2-to-p1", result); 
    })

    socket.on('set-timer', (timerAction) => {
      console.log('received set-timer', timerAction);
      if (timerAction.action === 'start') {
        countdown(1,0, timerAction);
      }
    });
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
  });
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })