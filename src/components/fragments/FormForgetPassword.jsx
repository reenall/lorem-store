import Button from "../elements/button"
import InputForm from "../elements/input"

export default function FormForgetPassword(){
   return (
      <form action="" className="mt-8">
         <InputForm 
            name='email' 
            label='E-mail' 
            type='email' 
            placeholder='example@mail.com'
         />
         <InputForm 
            name='phone number' 
            label='text' 
            type='text' 
            placeholder='phone number' 
         />

         <Button btnClass='bg-blue-600 w-full mb-3'>
            Submit
         </Button>
      </form>
   )
}