

const ShowCasePage = ({post}) => {
  return (
    
    <>
    <div>showCasePage</div>
    <h1>{post.id}</h1>
    <h2>{post.title}</h2>
    <h6>{post.body}</h6>
    </>
  )
}

export default ShowCasePage


export async function getStaticPaths(){
    return {
        paths:[
            {
                params: { caseId: '1'}
            },
            {
                params: { caseId: '2'}
            },
            {
                params: { caseId: '3'}
            }
        ],
        fallback: false,
    }

}

export async function getStaticProps(context) {
    const { params } = context;
    
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.caseId}`);
        const data = await res.json();
        return{
            props:{
                post:data,
            },
        }
  
}