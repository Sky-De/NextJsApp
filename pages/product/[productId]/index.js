import { useRouter } from 'next/router';



const ProductDetail = () => {
    const router = useRouter();
    const pId = router.query.productId;
  return (
    <div>deatial for :
        <h1>{ pId }</h1>
    </div>
  )
}

export default ProductDetail