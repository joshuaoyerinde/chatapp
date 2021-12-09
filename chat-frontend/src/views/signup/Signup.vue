<template>
    <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100 p-b-160 p-t-50">
				<form class="login100-form validate-form" @submit.prevent="onSubmitSignup">
					<span class="login100-form-title p-b-43">
						Account Login
					</span>
					
					<div class="wrap-input100 rs1 validate-input" data-validate = "Username is required">
						<input class="input100" v-model="username" type="text"  placeholder="Username">
						<span class="label-input100">Username</span>
					</div>
					
					<div class="wrap-input100 rs2 validate-input" data-validate="Password is required">
						<input class="input100" v-model="email" type="email"  placeholder="email">
						<span class="label-input100">Email</span>
					</div>
                    <div class="wrap-input100 rs3 validate-input" data-validate="Password is required">
						<input class="input100" v-model="phone" type="text"  placeholder="Phone">
						<span class="label-input100">Phone</span>
					</div>
                      <div class="wrap-input100 rs3 validate-input" data-validate="Password is required">
						<input class="input100" type="password" v-model="password" placeholder="Password">
						<span class="label-input100">Password</span>
					</div>

					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Sign in
						</button>
					</div>
					<!-- <div class="text-center w-full p-t-23">
						<a href="#" class="txt1">
							Sign in
						</a>
					</div> -->
				</form>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
export default {
    name:"Signup",
	data:()=>({
        username:"",
        email:"",
        phone:"",
        password:"",
        PORT:"http://localhost:4500/signup"
	}),
    methods:{
        onSubmitSignup(){
            let {username,email,phone,password} = this;
            let formSubmit = {username,email,phone,password}
            axios.post(this.PORT,formSubmit).then(res=>{console.log(res)})
            alert("joshua");
        }
    }

}
</script>
<style src="./signup.css" scoped ></style>

