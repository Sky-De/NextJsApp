
import { useRouter } from 'next/router';

const Reveiw = () => {
    const router = useRouter();
    const { productId , reviewId } = router.query;
  return (
    <div>
        <h2>Reveiw {reviewId}  for Product {productId}</h2>
    </div>
  )
}

export default Reveiw;