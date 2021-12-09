<template>
    <v-row class="justify-content-center py-5">
        <div class="col-7  px-0">
            <!-- <div class="bg-dark">
            <div class="media">
                <img src="../../assets/user.svg" alt="user" width="50" class="rounded-circle ml-2">
                
                <div class="media-body">
                    <div class="d-flex align-items-center justify-content-between mb-1">
                        <h5>Media heading</h5>
                    </div>
                </div>
            </div>
            </div> -->
            <div class="px-4  py-5 chat-box bg-white">
                        <!-- sender Message -->
                <div class="media w-50 mb-3">
                    <img src="../../assets/user.svg" alt="user" width="50" class="rounded-circle">
                    <div class="media-body ml-3">
                        <div class="bg-light rounded py-2 px-3 mb-2">
                            <!-- <b>{{usersName.username}}</b>
                            <p class="text-small mb-0 text-muted">Test which is a new approach all solutions</p> -->
                            
                        </div>
                        <p class="small text-muted">12:00 PM | Aug 13</p>
                    </div>
                </div>
                        <!-- receiver -->
                        <!-- <div class="media w-50 ml-auto mb-3">
                            <div class="media-body">
                                <div class="bg-primary rounded py-2 px-3 mb-2">
                                <p class="text-small mb-0 text-white">Test which is a new approach to have all solutions</p>
                                </div>
                                <p class="small text-muted">12:00 PM | Aug 13</p>
                            </div>
                        </div> -->
                        <!-- receiver -->
                <div class="media w-50  mb-1" :class="ml" v-for="(msg,i) in message" :key="i">
                    <div class="media-body">
                        <div class="bg-primary rounded py-2 px-3 mb-2">
                            
                            <p class="text-small mb-0 text-white">{{msg}}</p>
                        </div>
                        <p class="small text-muted">12:00 PM | Aug 13</p>
                    </div>
                </div>
            </div>
                    <!-- typing area -->
            <form action="#" class="bg-light" @submit.prevent="chatForm">
                <div class="input-group">
                    <input type="text" placeholder="Type a message" v-model="chatinput"  aria-describedby="button-addon2" class="form-control rounded-0 border-0 py-4 bg-light">
                        <div class="input-group-append">
                            <button id="button-addon2" type="submit" class="btn btn-link"> <i class="fa fa-paper-plane"></i></button>
                        </div>
                </div>
            </form>
        </div>
    </v-row>
</template>
<script>
import socketio from 'socket.io-client'
// import axios from 'axios'
export default {
    name:"Chartuser",
    data:()=>({
        PORT:"http://localhost:4500",
        socket:{},
        chatinput:"",
        message:[],
        users:[],
        ml:"ml-auto",
        usersName:'',
        // userconnect:JSON.parse(localStorage.getItem('usernamelogin')),
        receiver:JSON.parse(localStorage.getItem('receiver'))
    }),
    mounted(){
        let socket = socketio(this.PORT);
        this.socket = socket
        // to get message
          this.socket.emit('onuserconnect',this.receiver)
        this.socket.on('message',res=>{
            console.log(res)
            // this.message = [...this.message,res]
            // console.log(this.message);
        })
       
        //   this.getID()
        // this.getID();
       
            // console.log(userparamID)

        //   this.getID()

         // emit user that are online
        // this.socket.emit('onuserconnect',userlogin);
    },
    // updated(){
    //     this.getID()
    // },
    methods:{
        chatForm(){
           let {receiver, chatinput} = this;
           let yes ={receiver, chatinput} 
            this.socket.emit('chatmsg', yes);
        },
        // getID(){
        //     //   let userparamID = this.$route.params.id
        //       let userurl = `http://localhost:4500/userinfo`;
        //     axios.get(userurl).then(res=>{
        //         console.log(res.data)
        //         this.usersName = res.data.res

        //     }).catch(err=>{
        //         console.log(err);
        //     });
        // }
    }
}
</script>
<style src="./chat.css" scoped></style>


