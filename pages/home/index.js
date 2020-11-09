import Header from '../../component/header/header'
import { useRouter } from 'next/router'

export default function Home(){
  const router = useRouter()
  return (
    <>
      <Header />
      <h2>this is Home page</h2>
      <button onClick={()=>router.back()}>back</button>
    </>
  )
}