import { useRouter } from "next/router";
import { createClient } from "@sanity/client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import PortableText from "react-portable-text";

const Post = ({ blog }) => {
  console.log({blog})
  const client = createClient({
    projectId: "54m8bn61", //Project id is in the sanity.json
    dataset: "production",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);
  const [state, setstate] = useState(false);
  const router = useRouter();
  const { slug } = router.query;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    fetch("/api/createComment", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data);
        setstate(true);
        return data;
      })
      .catch((errors) => {
        console.log(errors);
        setstate(false);
      });
  };

  return (
    <>
      <div className=" mx-auto p-7 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-6xl m-[80px] mt-19 ">
       
        <div className="flex flex-col">
        <h1 className="sm:text-4xl font-anton tracking-wide text-3xl mb-4 ">
          {blog.title} 
        </h1>
        <div className="flex items-center my-3">
        <Image
          src={builder.image(blog.author.authorImage).url()}
          alt={blog.author.name}
          width={700}
          height={400}
          className="h-10 w-10 rounded-full"
        />
        <p className="text-sm py-4 mx-2">Post By: {blog.author.name} | Date: {blog._createdAt}  </p>
        </div>
        </div>
        <Image
          src={builder.image(blog.mainImage).url()}
          alt={blog.title}
          width={700}
          height={400}
          className="h-48 lg:h-96 md:72 w-full object-cover transition-transform duration-200 ease-in-out center group-hover:scale-105"
        />
        <article className="prose mx-auto max-w-7xl flex justify-center items-center prose-headings:text-tertiary prose-headings:font-poppins prose-p:font-poppins dark:text-white">
          <PortableText content={blog.body} />
        </article>
      </div>

      <div className="flex flex-col p-10 my-10 ">
        <hr className="py-3 mt-2" />
        <h4 className="text-2xl sm:text-4xl font-semibold mx-auto p-5">
          Commment Section
        </h4>
        {blog.comments.map((comment) => (
          <div key={comment._id} className="flex justify-center">
            <span className="text-yellow-500 font-bold px-1">
              {comment.name}:
            </span>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
      {state ? (
        <div className="flex flex-col p-14 my-10 bg-black max-w-2xl mx-auto text-white">
          <h3 className="text-2xl">Thanks for your feedback!</h3>
          <p>Once it has been Approved, it will appear below</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col max-w-2xl mx-auto mb-10 "
        >
          <hr className="py-3 mt-2" />
          <h4 className="text-3xl font-bold py-3 mx-auto">Post a Comment</h4>
          <input
            {...register("_id")}
            type="hidden"
            name="_id"
            value={blog._id}
          />
          <label className="block mb-5 px-4">
            <span className="px-2 text-gray-700">Name</span>
            <input
              {...register("name", { required: true })}
              type="text"
              className="shadow border rounded mx-1 py-2 px-3 form-input mt-1 block w-[90vw] sm:w-full ring-yellow-500 outline-none focus:ring"
              placeholder="Joe Root"
            />
          </label>
          <label className="block mb-5 px-4">
            <span className="px-2 text-gray-700">Email</span>
            <input
              {...register("email", { required: true })}
              type="email"
              className="shadow border rounded mx-1 py-2 px-3 form-input mt-1 block  ring-yellow-500  outline-none focus:ring w-[90vw] sm:w-full"
              placeholder="@youremail.com"
            />
          </label>
          <label className="block mb-5 px-4">
            <span className="px-2 text-gray-700">Comment</span>
            <textarea
              {...register("comment", { required: true })}
              className="shadow border rounded mx-1 py-2 px-3 form-input mt-1 block w-[90vw] sm:w-full  ring-yellow-500 outline-none focus:ring"
              placeholder="Express YourSelf"
              rows={8}
            />
          </label>

          <div className="flex flex-col p-5">
            {errors.name && (
              <span className="text-red-500">The name field is required</span>
            )}
            {errors.email && (
              <span className="text-red-500">The email field is required</span>
            )}
            {errors.comment && (
              <span className="text-red-500">
                The comment field is required
              </span>
            )}
          </div>
          <input
            type="submit"
            className="shadow bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 mx-auto rounded cursor-pointer w-[20vw]"
          />
        </form>
      )}
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  const client = createClient({
    projectId: "54m8bn61", //Project id is in the sanity.json
    dataset: "production",
    useCdn: false,
  });
  const query = `*[_type == "blog" && slug.current == '${slug}'][0]{
    _id,
    _createdAt,
    title,
    mainImage,
    metadesc,
    category,
    author->{
      name,
      desc,
      authorImage
    },
    'comments':*[
      _type=="comment" &&
      blog._ref == ^._id &&
      approved == true
    ],
    slug,
    body
  }`; //The post.js in backend and fetching the content from the post.js in backend
  const blog = await client.fetch(query);

  return {
    props: {
      blog, //Return the fetch variable
    },
  };
};
export default Post;
