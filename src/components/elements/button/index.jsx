export default function Button(props){
   const {
    children,
    type = 'button',
    onClick = () => {},
    btnClass = 'bg-black w-full'
  } = props
 
   return (
     <button type={type} onClick={onClick} className={`mt-10 py-2 px-6 bg-black uppercase font-nunito text-white hover:text-zinc-400 transition duration-300 ${btnClass}`}>
       {children}
     </button>
   )
 }