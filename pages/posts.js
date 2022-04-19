
import { getPosts } from '../store/actions/posts';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

const Posts = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(getPosts());
    }
  return (
    <div>
        <h1>POSTS</h1>
        <br />
        <Link href='/'><a>home</a></Link><br/>
        
        <button onClick={handleClick}>CLICK to GET POSTS</button>
    </div>
  )
}

export default Posts