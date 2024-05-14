export default function Label(props){
   const {htmlFor, label} = props

   return (
      <label htmlFor={htmlFor} className="font-semibold">{label}</label>
   )
}