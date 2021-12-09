<template>
    <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100 p-b-160 p-t-50">
				<div class="text-danger text-center" v-if="error">
					<span>{{error}} <i class="fa fa-warning "></i></span>	
				</div>
				<form class="login100-form validate-form" @submit.prevent="onSubmitLogin">
					<span class="login100-form-title p-b-43">
						Account Login
					</span>
					<div class="wrap-input100 rs1 validate-input" data-validate = "Username is required">
						<input class="input100" type="text" v-model="username" placeholder="Username">
						<span class="label-input100">Username</span>
					</div>
					
					<div class="wrap-input100 rs2 validate-input" data-validate="Password is required">
						<input class="input100" type="password" v-model="password" placeholder="Password">
						<span class="label-input100">Password</span>
					</div>

					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Sign in
						</button>
					</div>
					
					<div class="text-center text-white w-full p-t-23">
						<!-- <a href="#" class="txt1">
							Forgot password?
						</a> -->
						<router-link to="/signup">Create an Account</router-link>
					</div>
				</form>
				
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
export default {
    name:"Signin",
	data:()=>({
		username:'',
		password:'',
		PORT:"http://localhost:4500/signin",
		error:""
	}),
	methods:{
		onSubmitLogin(){
			let {username, password} = this
			let formLogin = {username, password}
			axios.post(this.PORT,formLogin).then(res=>{
				console.log(res.data)
				if(res.data.success == true){
					localStorage.setItem('usernamelogin',JSON.stringify(this.username))
					
					this.$router.push('/chatbox')
				}else{
					this.error = "Login Invalid"
					console.log(this.error)
				}
				
			})
		}
	}    
}
</script>
<style src="./signin.css" scoped></style>

