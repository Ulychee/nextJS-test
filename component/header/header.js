import { useRouter } from 'next/router'
// import Button from "./button/button"

export default function Header(){
  const router = useRouter()
  return (
    <>
      <Link href="/home" item="Home"/>
      <Link href="/about" item="About"/><br/>
      {/* <button onClick={router.push("/button/button")}>click</button> */}
      {/* <Button/> */}
    </>
  )
}

const Link = ({item,href}) => {
  const router = useRouter()
  return(
    <>
      <a
        href="#"
        onClick={(e)=>{
          e.preventDefault()
          router.push(href)
        }} 
      >
        {item}
      </a>
    </>
  )
}