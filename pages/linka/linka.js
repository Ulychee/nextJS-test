import Link from 'next/link'

export default function LinkA(){

  return(
    <>
      <Link href="/linkb/linkb" passHref replace>
        <a>to LinkB</a>
      </Link>
    </>
  )
}