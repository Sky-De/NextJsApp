import Link from 'next/link'

const Cases = ({cases}) => {
    console.log(cases);
  return (
    <div>
        <h1>List of Cases</h1>
        {cases.map((i) => {
            return(
                <>
               
               <Link href={`cases/${i.id}`} passHref>
               <div key={i.id}>
                <hr />
                <h2>{i.id}</h2>
                <h5>{i.title}</h5>
                <hr />
               </div>
               </Link>
                </>
            )
        })}
    </div>
  )
}

export default Cases

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return{
        props:{
            cases : data.slice(0,3)
        }
    }
}