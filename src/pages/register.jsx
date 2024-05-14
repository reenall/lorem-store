import AuthLayouts from "../components/layouts/AuthLayouts";
import FormRegister from "../components/fragments/FormRegister";

export default function RegisterPage(){
   return (
      <AuthLayouts title='Lorem' type='register' goTo="login">
         <FormRegister />
      </AuthLayouts>
   )
}