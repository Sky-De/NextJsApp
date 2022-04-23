import Link from 'next/link'

const Cases = ({cases}) => {
  return (
    <div>
        <h1>List of Cases</h1>
        {cases.map((i) => {
            return(
                
               
                <Link key={i.id} href={`cases/${i.id}`} >
               <div>
                <hr />
                <h2>{i.id}</h2>
                <h5>{i.title}</h5>
                <hr />
               </div>
               </Link>
              
                
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
            cases : data,
        }
    }
}