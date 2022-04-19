


const url = 'https://jsonplaceholder.typicode.com/posts';
export const getPosts =  () => async (dispatch) => {
    
    try {

        const res = await fetch(url);
        const data = await res.json();
    
        dispatch({type:'GET_POSTS' , payload: data})

    } catch (error) {
        console.log(error);
    }
}