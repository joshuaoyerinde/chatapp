const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http')
const socket = require('./controller/socket');
const mongoseConnect = require('./util/db')
const signUpTodo = require('./controller/signup')

const server = http.createServer(app)
const io = socket(server,{
    cors:{
        origin:"*",
        methods:['POST','GET']
    }

})

app.use(bodyParser.urlencoded({extended: false}));
app.use(cors({origin:'*'}))
app.use(express.json());

app.get('/', (req,res)=>{
    res.send('joshua is here pls')
})
app.post('/signup',signUpTodo.signUp);
app.post('/signin',signUpTodo.signIn);
app.get('/users',signUpTodo.getUsers);
//app.get('/userinfo/:id',signUpTodo.getFriendbyID);
// for sending message ......................
const myUser = []

io.on('connection',socket=>{
    // socket.emit("message","hello"); //for testing 
    let socketID = socket.id
    // console.log(socketID)
    socket.on('onuserconnect', async (res)=>{
        
       
       if (myUser.length>= 1){
           console.log(myUser,'yes')
        let fitmail =  myUser.filter(info=>(info.sender == res))
        if ( fitmail.length >= 1){
            let objsender ={
                sender:res,
                socketId:socketID 
            }
            let finder =  myUser.find(info=>(info.sender == res))
          let ind =  myUser.indexOf(finder)
          myUser[ind]=objsender
        }
        else{
            let objsender ={
                sender:res,
                socketId:socket.id
            }
            myUser.push(objsender)
        }
    
    } else{
        let objsender ={
            sender:res,
            socketId:socketID 
        }

        myUser.push(objsender)
    }// console.log(objsender)
        
         
        
        socket.emit('users', myUser)
    //    if(){

    //    }
      
        // console.log(myUser);

    })

    socket.on('chatmsg',async(res)=>{  
        let {receiver,chatinput} = res
        console.log(res)
        let filtUser = myUser.filter(each=>(each.sender == receiver))
        if(filtUser.length >=1){
            console.log(filtUser);
            let getId = filtUser[0].socketId; 
            console.log(getId)
            socket.broadcast.to(getId).emit('message',chatinput);
        }
        
    })
    // chating started
    // socket.on('joinchat',chat=>{ 
    //     // console.log(message)
    //     //joing the chat with friend to friend
    //     // socket.emit('message',message);
    //     socket.join(chat)
    // })
  

})
mongoseConnect(()=>{
    server.listen('4500',()=>{
        console.log('connected')
    })
})