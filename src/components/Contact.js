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
           <div className="flex flex-col justify-center items-center my-10 ">
        <h2 className=" border-2 border-gray-600 p-2 ">Direct Message (DM)</h2>
        <p className="py-4 text-xl">Direct message us directly via email</p>
      </div>
          <form onSubmit={handleSubmit} className="mx-auto ">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  for="company"
                  className="block text-sm font-semibold leading-6 "
                >
                  Name
                </label>
                <div className="mt-2.5">
                  <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-gray-900"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  for="email"
                  className="block text-sm font-semibold leading-6 "
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-gray-900"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  for="message"
                  className="block text-sm font-semibold leading-6 "
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows="4"
                    className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-gray-900"
                  />
                </div>
              </div>
              <div className="flex gap-x-4 sm:col-span-2">
               
             
                <label
                  className="text-sm leading-6 text-gray-500"
                  id="switch-1-label"
                >
              By submitting the form you will allow us to use the Email
                </label>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md dark:bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white-200 shadow-sm dark:hover:bg-indigo-400 bg-gray-800 hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white-200"
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
