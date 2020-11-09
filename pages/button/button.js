import { useRouter } from 'next/router'

export default function Button({pageName,pageUrl}){
  const router = useRouter()

  return (
    <>
       <button onClick={(e)=>{e.preventDefault();router.push("/home")}}>Only Btn without style</button>
    </>
  )
} 