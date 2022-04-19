import Link from 'next/link'

const PageNotFound = () => {
   
  return (
    <div>
        <h3>its 404 ERROR | there is no match url</h3><br />
        <Link href='/'><a>go back Home</a></Link>
    </div>
  )
}

export default PageNotFound