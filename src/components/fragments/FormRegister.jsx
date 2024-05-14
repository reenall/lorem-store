import Button from "../elements/button";
import InputForm from "../elements/input";

export default function FormRegister(){
   return (
      <form action="" className="mt-8">
         <InputForm name='username' type='text' placeholder='username'/>
         <InputForm name='email' type='email' placeholder='E-mail'/>
         <InputForm name='password' type='password' placeholder='password'/>
         <InputForm name='confirmPassword' type='password' placeholder='confirm password'/>

         <Button btnClass='w-full mb-5'>Create Account</Button>
      </form>
   )
}