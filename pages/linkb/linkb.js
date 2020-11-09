import { useRouter } from 'next/router'

export default function LinkB(){
  const router = useRouter()
  return(
    <>
      <h2>this is page of LinkB</h2>
      <button onClick={()=>window.history.back()}>Click</button>
    </>
  )
}