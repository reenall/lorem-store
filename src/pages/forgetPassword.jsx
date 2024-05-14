import AuthLayouts from "../components/layouts/AuthLayouts"
import FormForgetPassword from "../components/fragments/FormForgetPassword"

export default function forgetPasswordPage(){
   return (
      <AuthLayouts title="Forget Password">
         <FormForgetPassword/>
      </AuthLayouts>
   )
}