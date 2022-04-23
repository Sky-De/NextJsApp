
const NewsList = ({ articles }) => {
  return (
    <>
    <h2>NewsList:</h2>
    {
        articles.map((article) => {
            return(
            <div key={article.id} >
                <h6 >{ article.id } { article.title } | { article.category }</h6>
            </div>
            )
        })
    }
    </>
  )
}

export default NewsList;

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3200/news');
    const data = await res.json();
    console.log('Pre-rendering NEWS');
    
    return{
        props : {
            articles : data,
        }
    }
}