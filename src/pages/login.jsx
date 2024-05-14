import AuthLayouts from "../components/layouts/AuthLayouts"
import FormLogin from "../components/fragments/FormLogin"

export default function LoginPage(){
   return (
      <AuthLayouts title="LOREM" type="login" goTo="register">
         <FormLogin />
      </AuthLayouts>
   )
}