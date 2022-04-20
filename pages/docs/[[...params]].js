import { useRouter } from 'next/router';
const DocHome = () => {
    const router = useRouter();
    const { params=[] } = router.query;
    // console.log(params);
  return (
    <div>DocHome </div>
  )
}

export default DocHome