import { useState} from "react";
import{useForm} from 'react-hook-form'

function Login (){
   
    const { register,handleSubmit,formState: { errors }} = useForm();

    const onSubmit = (data) => console.log(data);
    return(
        <div>
           <h1>LOGIN</h1> 
           <form onSubmit={handleSubmit(onSubmit)}></form>
           <input {...register("userName", { required: true, maxLength:  15 })} />
           {errors.useForm && <span>userName is required.</span>}
           <input {...register("password", { required: true, minLength:  6 })} />
           {errors.useForm && <span>userName is required.</span>}
           <input type="submit" />
        </div>
    )
}

export default Login;