import { useRouter } from "next/router";

const ShowCasePage = ({post}) => {
    const router = useRouter();
    if(router.isFallback) {
        return <h1>Loading...</h1>
    }
  return ( <>
    <div>showCasePage</div>
    <h1>{post.id}</h1>
    <h2>{post.title}</h2>
    <h6>{post.body}</h6>
    </>
  )
}

export default ShowCasePage


export async function getStaticPaths(){
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const data = await res.json();
    // const paths = data.map((post) => {
    //     return {
    //         params:{ caseId : `${post.id}`}
    //     }
    // })
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
            },
            
        ],
        // paths:paths,
        fallback: true,
    }

}

export async function getStaticProps(context) {
    const { params } = context;
    
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.caseId}`);
        const data = await res.json();
        if(!data.id){
            return{
                notFound: true
            }
        }
        console.log(`page generated for :  ${params.caseId}`);
        return{
            props:{
                post:data,
            },
        }
  
}