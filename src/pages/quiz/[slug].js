import { useRouter } from "next/router";
import Link from "next/link";
const Post = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
     
      <Link href={'./result.js'}><p>Post: {slug}</p></Link>
      
 
    </>
  );
};

export default Post;
