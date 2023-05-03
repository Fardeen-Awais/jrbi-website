import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data.message);
        setSubmitted(true);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error(error);
    }

    // Reset the form
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="flex justify-center items-center  min-h-screen">
      {submitted ? (
        <div
          style={{ backgroundColor: "black", color: "white", padding: "1rem" }}
        >
          Thank you for your feedback!
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mx-auto max-w-6xl p-10 gap-y-7">
          <div class="mx-auto max-w-2xl text-center">
            <h2 >
              Contact sales
            </h2>
          </div>
          <form onSubmit={handleSubmit} class="mx-auto ">
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div class="sm:col-span-2">
                <label
                  for="company"
                  class="block text-sm font-semibold leading-6 "
                >
                  Company
                </label>
                <div class="mt-2.5">
                  <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    class="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="email"
                  class="block text-sm font-semibold leading-6 "
                >
                  Email
                </label>
                <div class="mt-2.5">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    class="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="block text-sm font-semibold leading-6 "
                >
                  Message
                </label>
                <div class="mt-2.5">
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows="4"
                    class="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="flex gap-x-4 sm:col-span-2">
               
             
                <label
                  class="text-sm leading-6 text-gray-600"
                  id="switch-1-label"
                >
              By submitting the form you will allow us to use the Email
                </label>
              </div>
            </div>
            <div class="mt-10">
              <button
                type="submit"
                class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Contact;
