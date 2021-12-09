<template>
    <div class="all-container">
        <v-container class="py-5 px-4">
        <v-row class="justify-content-center"> 
            <!-- Users box-->
            <div class="col-5  px-0">
                <div class="bg-white">
                    <div class="bg-gray px-4 py-2 bg-light">
                        <div class="float-right">
                            <i class="fa fa-bars"></i>
                        </div>
                        <p class="h5 mb-0 py-1">Recent</p>
                    </div>
                    <div class="messages-box">
                    <div class="acc-bg">
                     <div class="d-flex text-dark p-3">
                        <div>
                            <img src="../../assets/user.svg" alt="user" width="50" class="rounded-circle">
                        </div>
                        <div class="ml-2 mt-3">
                            <div> MIke Rice</div>
                            <!-- <small>online</small> -->
                        </div>
                    </div>
                    </div>
                    <div class="list-group rounded-0">
                            <!-- <a class="list-group-item list-group-item-action active text-white rounded-0 side-list">
                                <div class="media">
                                    <img src="../../assets/user.svg" alt="user" width="50" class="rounded-circle">
                                    <div class="media-body ml-4">
                                        <div class="d-flex align-items-center justify-content-between mb-1">
                                            <h6 class="mb-0">Jason Doe</h6><small class="small font-weight-bold">25 Dec</small>
                                        </div>
                                        <p class="font-italic mb-0 text-small">L
                                            orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                                        </p>
                                    </div>
                                </div>
                            </a> -->

                            <a class="list-group-item list-group-item-action list-group-item-light rounded-0 side-list" v-for="user in getUsers" :key="user._id" @click="onUser(user)">
                                <div class="media">
                                    <img src="../../assets/user.svg" alt="user" width="50" class="rounded-circle">
                                    <div class="media-body ml-4">
                                        <div class="d-flex align-items-center justify-content-between mb-1">
                                            <h6 class="mb-0">{{user.username}} <br/> <small>{{user.email}} </small> </h6><small class="small font-weight-bold">25 Dec</small>
                                        </div>
                                        <p class="font-italic mb-0 text-small">L
                                            orem ipsum dolor sit amet, consectetur adipisicing elit, 
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /col-5 -->

            <div class="col-5  px-0">
                <div class="bg-white">
                    <div class="bg-gray px-4 py-2 bg-light">
                        <div class="float-right">
                            <i class="fa fa-bars"></i>
                        </div>
                        <p class="h5 mb-0 py-1">Recent</p>
                    </div>
                    <div class="messages-box">
                    <div class="acc-bg">
                     <div class="d-flex text-dark p-3">
                        <div>
                            <img src="../../assets/user.svg" alt="user" width="50" class="rounded-circle">
                        </div>
                        <div class="ml-2 mt-3">
                            <div> MIke Rice</div>
                            <small>online</small>
                        </div>
                    </div>
                    </div>
                    <div class="list-group rounded-0">
                            <!-- <a class="list-group-item list-group-item-action active text-white rounded-0 side-list">
                                <div class="media">
                                    <img src="../../assets/user.svg" alt="user" width="50" class="rounded-circle">
                                    <div class="media-body ml-4">
                                        <div class="d-flex align-items-center justify-content-between mb-1">
                                            <h6 class="mb-0">Jason Doe</h6><small class="small font-weight-bold">25 Dec</small>
                                        </div>
                                        <p class="font-italic mb-0 text-small">L
                                            orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                                        </p>
                                    </div>
                                </div>
                            </a> -->

                            <a class="list-group-item list-group-item-action list-group-item-light rounded-0 side-list" v-for="(info,i) in users" :key="i" @click="onChart(info)">
                                <div class="media">
                                    <img src="../../assets/user.svg" alt="user" width="50" class="rounded-circle">
                                    <div class="media-body ml-4">
                                        <div class="d-flex align-items-center justify-content-between mb-1">
                                            <h6 class="mb-0">{{info.sender}} <br/> <small>kk</small> </h6><small class="small font-weight-bold">25 Dec</small>
                                        </div>
                                        <p class="font-italic mb-0 text-small">L
                                            orem ipsum dolor sit amet, consectetur adipisicing elit, 
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <router-view :key="$route.fullPath"/> -->
           
        </v-row>
        </v-container>
    </div>
</template>
<script>
import socketio from 'socket.io-client'
import axios from 'axios'
export default {
    name:"Chatpanel",
    data:()=>({
        getUsers:'',
        // userlogin : JSON.parse(localStorage.getItem('usernamelogin')),
         PORT:"http://localhost:4500",
        socket:{},
        userconnect:JSON.parse(localStorage.getItem('usernamelogin')),
        users:[],
        // chat : "conversation" 
    }),
     mounted(){
        //  let userlogin = JSON.parse(localStorage.getItem('usernamelogin'));
        // console.log(userlogin);
         let socket = socketio(this.PORT);
        this.socket = socket
        this.socket.emit('onuserconnect',this.userconnect)
        this.getUser()
        axios.get(this.PORT).then(res=>console.log(res.data));
        // this.socket.on('message',res=>{
        //     console.log(res)
        //     this.message = [...this.message,res]
        //     console.log(this.message);
        // })
         socket.on('users',res=>{
            this.users = res
            console.log(res)
        })
        
        // this.chatJoin();
    },
    methods:{
        // chatJoin(){
        //     // this.chat = "conversation" 
        //     this.socket.emit("joinchat",this.chat)
        // },

        getUser(){
              let urluser = "http://localhost:4500/users"
                axios.get(urluser).then(res=>{
                this.getUsers = res.data.response
                console.log(this.getUsers)
            })
        },
        onUser(user){ 
            let {_id, username} = user
            // this.socket.emit('onuserconnect',email)
            localStorage.setItem('receiver',JSON.stringify(username))
            // console.log(user)
            this.$router.push('/chatyou/'+_id)

        },
         onChart(user){ 
            let {sender} = user
            // this.socket.emit('onuserconnect',email)
            localStorage.setItem('receiver',JSON.stringify(sender))
            // console.log(user)
            this.$router.push('/chatyou')

        }
    },
   
    
}
</script>

<style src="./chat.css" scoped></style>
