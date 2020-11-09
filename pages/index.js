import { useRouter } from 'next/router'
import Head from 'next/head'
import Button from "./button/button"
import "../styles/Home.module.css"

export default function Index(){
  const style = {
    marginRight:'10px'
  }
  return (
    <div>
      <Head>
        <title>this is title</title>
        {/* <meta name="viewport" content="page-title" key="title" /> */}
      </Head>

      <Link href="/home" item="Home">Home</Link>
      <Link href="/about" item="About">About</Link>
      <Button/>
    </div>
  )
}

const Link = ({item,href}) => {
  const router = useRouter()
  return(
    <>
      <a
        className="link"
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