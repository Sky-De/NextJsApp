
const CategoryPage = ({articles, category}) => {
  return (
    <>
    <h2>CategoryPage</h2>
    {
        articles.map((art) => {
            return(
                <div key={art.id}>
                    <h4>
                        {art.id} { art.title}
                    </h4>
                    <p>{art.description}</p>
                </div>
            )
        })
    }
    </>
  )
}

export default CategoryPage;

export async function getServerSideProps(context) {
    const { params, req, res, query } = context;
    const test = 'ourData'
    console.log(req.headers.cookie);
    console.log(query);
    // we set heaader for each req/res [we have access to req/res trough context]
    res.setHeader('Set-Cookie', [`name=${test}`])
    const { category } = params;
    const response = await fetch(`http://localhost:3200/news?category=${category}`);
    const data = await response.json();
    console.log(`Pre-rendering NEWS for category: ${category}`);


    return {
        props: {
            articles: data,
            category,
        },
    }
}