import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;
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
    
      <div class="container my-36 px-6 mx-auto">
        <section class="mb-32 text-gray-800">
          <h1 class="font-bold text-3xl mb-4">
            An intriguing title for an interesting article
          </h1>

          <p class="uppercase text-red-600 font-bold mb-6 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              class="w-4 h-4 mr-2"
            >
              <path
                fill="currentColor"
                d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"
              />
            </svg>
            Hot news
          </p>

          <p class="mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
            sapiente molestias consectetur. Fuga nulla officia error placeat
            veniam, officiis rerum laboriosam ullam molestiae magni velit
            laborum itaque minima doloribus eligendi! Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Optio sapiente molestias
            consectetur. Fuga nulla officia error placeat veniam, officiis rerum
            laboriosam ullam molestiae magni velit laborum itaque minima
            doloribus eligendi!
          </p>

          <p class="mb-6">
            <strong>Optio sapiente molestias consectetur?</strong>
          </p>

          <p class="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            architecto ex ab aut tempora officia libero praesentium, sint id
            magnam eius natus unde blanditiis. Autem adipisci totam sit
            consequuntur eligendi.
          </p>

          <p class="note note-light border-l-4 border-gray-800 rounded p-2 mb-6">
            <strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Optio odit consequatur porro sequi ab distinctio
            modi. Rerum cum dolores sint, adipisci ad veritatis laborum eaque
            illum saepe mollitia ut voluptatum.
          </p>

          <p class="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            libero repellat molestiae aperiam laborum aliquid atque magni
            nostrum, inventore perspiciatis possimus quia incidunt maiores
            molestias eaque nam commodi! Magnam, labore.
          </p>

          <img
            src="https://mdbootstrap.com/img/new/slides/194.jpg"
            class="w-full shadow-lg rounded-lg mb-6"
            alt=""
          />

          <ul class="list-disc list-inside mb-6">
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Sit</li>
            <li>Amet</li>
          </ul>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            temporibus nulla voluptatibus accusantium sapiente doloremque.
            Doloribus ratione laboriosam culpa. Ab officiis quidem, debitis
            nostrum in accusantium dolore veritatis eius est?
          </p>
        </section>
      
  <section class="mb-32 text-gray-800">
    <h5 class="text-xl font-semibold text-center mb-10 md:mb-6">Comment Section</h5>
    <div class="flex flex-wrap mb-12 md:mb-0">
      <div class="grow-0 shrink-0 basis-auto w-2/12">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(24).jpg" class="w-full shadow-lg rounded-lg mb-6"
          alt="" />
      </div>

      <div class="grow-0 shrink-0 basis-auto w-10/12 pl-4 md:pl-6">
        <p class="font-semibold mb-3">Marta Dolores</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
          inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
          Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
        </p>
      </div>
    </div>

    <div class="flex flex-wrap mb-12 md:mb-0">
      <div class="grow-0 shrink-0 basis-auto w-2/12">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(25).jpg" class="w-full shadow-lg rounded-lg mb-6"
          alt="" />
      </div>

      <div class="grow-0 shrink-0 basis-auto w-10/12 pl-4 md:pl-6">
        <p class="font-semibold mb-3">Valeria Groove</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
          inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
          Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
        </p>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="grow-0 shrink-0 basis-auto w-2/12">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg" class="w-full shadow-lg rounded-lg mb-6"
          alt="" />
      </div>

      <div class="grow-0 shrink-0 basis-auto w-10/12 pl-4 md:pl-6">
        <p class="font-semibold mb-3">Antonia Velez</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
          inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
          Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
        </p>
      </div>
    </div>
  </section>
  <div class="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
  <div class="w-full max-w-md space-y-8">
    <div>
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=pink&shade=600" alt="Your Company"/>
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
      <p class="mt-2 text-center text-sm text-gray-600">
      
        <a href="#" class="font-medium text-pink-600 hover:text-pink-500">start your 14-day free trial</a>
      </p>
    </div>
    <form class="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true"/>
      <div class="-space-y-px rounded-md shadow-sm"/>
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 px-3 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" placeholder="Email address"/>
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full rounded-b-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" placeholder="Password"/>
        </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-600"/>
          <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
        </div>

        <div class="text-sm">
          <a href="#" class="font-medium text-pink-600 hover:text-pink-500">Forgot your password?</a>
        </div>
      </div>

      <div>
        <button type="submit" class="group relative flex w-full justify-center rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="h-5 w-5 text-pink-500 group-hover:text-pink-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
            </svg>
          </span>
          Sign in
        </button>
      </div>
    </form>
  </div>
</div>
      </div>
    </>
  );
};

export default Post;
