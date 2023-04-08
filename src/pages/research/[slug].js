import { useRouter } from "next/router";
import { createClient } from "next-sanity";
import { useForm} from "react-hook-form";
import { useState } from "react";

const Post = ({blog}) => {
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
     <div class="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white ">
      <div class="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
          max-w-7xl">
        <div class="flex flex-col items-center sm:px-5 md:flex-row">
          <div class="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
            <div class="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
                md:space-y-5">
              <div class="bg-green-500 flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2
                  uppercase ">
                <p class="inline">
                  <svg class="w-3.5 h-3.5 mr-1" fill="currentColor" viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
                      00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
                      1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1
                      0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                </p>
                <p class="inline text-xs font-medium">New</p>
              </div>
              <a class="text-5xl font-anton lg:text-6xl xl:text-7xl">Write anything. Be creative.</a>
              <div class="pt-2 pr-0 pb-0 pl-0">
                <p class="text-sm font-medium inline">author:</p>
                <a class="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 underline">Jack Sparrow</a>
                <p class="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1">· 23rd, April 2021 ·</p>
                <p class="text-pink-600 text-sm font-medium inline mt-0 mr-1 mb-0 ml-1">1hr 20min. read</p>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <div class="block">
              <img
                  src="https://images.unsplash.com/photo-1626314928277-1d373ddb6428?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" class="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full"/>
            </div>
          </div>
        </div>
        
      </div>
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
                <span className="text-red-500">
                  The email field is required
                </span>
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
}

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  const client = createClient({
    projectId:  "54m8bn61", //Project id is in the sanity.json
    dataset: "production",
    useCdn: false,
  });
  const query = `*[_type == "blog" && slug.current == '${slug}'][0]{
    _id,
    _createdAt,
    title,
    mainImage,
    metadesc,
    author->{
      name
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
