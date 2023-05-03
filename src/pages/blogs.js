import React from "react";
import { createClient } from "@sanity/client";
import Blog from "@/components/Blog";

function Blogs({ posts }) {
  return (
    <>
      <Blog posts={posts} />
    </>
  );
}
export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "54m8bn61", //Project id is in the sanity.json
    dataset: "production",
    useCdn: false,
  });
  const posts = await client.fetch(`*[_type == "blog"]`); //The post.js in backend and fetching the content from the post.js in backend. You need to rememeber the syntax how to use author and its value like name. Make sure in the time of publishing you should define your author otherwise it will give you an error : Can't define the properties of undefine

  return {
    props: {
      posts, //Return the fetch variable
    },
  };
}
export default Blogs;
