"use client";
import { useState } from "react";

const Contact = () => {
  const [messageState, setMessageState] = useState("");

  // Implementing Web3Forms to handle email messages
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);

      formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORM_ACCESS_KEY);
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await response.json();
      if (result.success) {
        console.log(result);
        setMessageState("success");
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error(error);
      setMessageState("error");
    }
  }

return (
    <div className="max-w-2xl mx-auto h-screen flex flex-col justify-around">
      <h1 className="text-4xl font-bold text-center mt-10 mb-10">Contact Me</h1>
      {/* Message */}
      <div className="text-center space-y-4">
        <p>
          I'm currently open for new opportunities, whether it's a full-time position, a freelance project, or a collaboration. 
          Also, I would love to hear feedbacks from you. Please fill out the form below and I will get back to you as soon as possible.
        </p>
        <p>Thank you!</p>
      </div>
      {/* Form */}
      <form onSubmit={handleSubmit} className="basis-8/12 flex flex-col gap-8 px-4 justify-center">
        <input type="text" name="name" placeholder="Name" className="rounded-2xl p-2 focus:ring-indigo-600" required/>
        <input type="email" name="email" placeholder="Email" className="rounded-2xl p-2 focus:ring-indigo-600" required/>
        <textarea name="message" placeholder="Message" className="rounded-2xl p-2 h-48 resize-none focus:ring-indigo-600" required></textarea>
        <button
          type="submit"
          className="bg-indigo-600 font-semibold text-sm sm:text-base px-4 py-2 rounded-md text-white border border-gray-200 dark:border-gray-700 hover:bg-indigo-800 hover:text-white active:transform active:scale-90 duration-200 flex items-center justify-center gap-1">
            <span>Submit</span>
            <span className="material-symbols-outlined">send</span>
        </button>
        {messageState === "success" && <p className="text-center text-xl">Thank you for your message! I will get back to you as soon as possible.</p>}
        {messageState === "error" && <p className="text-center text-xl">Oops! Something went wrong, please try again later. I'm sorry for the inconvenience.</p>}
      </form>
    </div>
  );
}

export default Contact;