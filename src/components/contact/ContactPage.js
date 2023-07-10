import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { BsFillSendFill } from "react-icons/bs";

export const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7eraolt",
        "template_az86fk5",
        form.current,
        "RarT-GDuZ5Hzy73xn"
      )
      .then(
        (result) => {
          if (result) {
            alert('Your message successfully submitted!!!')
            setEmail("");
            setMessage("");
            setName("");
          }
        },
        (error) => {
          alert(error)
        }
      );
  };
  return (
    <div className="mx-10 my-2">
      <h5 className="text-[#A0A8A4] font-bold text-md pt-10 pb-5  bg-[#151515] sticky top-0 z-50">
        Get In Touch
      </h5>
      <form className="mt-5" ref={form} onSubmit={handleSubmit}>
        <div className="p-10  bg-[#1B1B1D] ">
          <div className="">
            <label>Full Name</label>
            <input
              type="text"
              name="user_name"
              value={name}
              id="first-name"
              autoComplete="given-name"
              required
              onChange={(e) => setName(e.target.value)}
              className="my-2 block bg-transparent w-full border-0 border-b border-grey-dark py-1.5 text-white shadow-sm  placeholder:text-white sm:text-sm sm:leading-6   focus:ring-0 focus:outline-none"
            />{" "}
          </div>
          <div className="my-5">
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="given-name"
              required
              className="my-2 block bg-transparent w-full border-0 border-b border-grey-dark py-1.5 text-white shadow-sm  placeholder:text-white sm:text-sm sm:leading-6   focus:ring-0 focus:outline-none"
            />{" "}
          </div>
          <div className="my-5">
            <label>Message</label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              autoComplete="given-name"
              required
              className="my-2 block bg-transparent w-full border-0 border-b border-grey-dark py-1.5 text-white shadow-sm  placeholder:text-white sm:text-sm sm:leading-6   focus:ring-0 focus:outline-none"
            />{" "}
          </div>
          <div className="flex justify-center ">
            <button
              className="mt-8 flex justify-center items-center gap-2 bg-black transition ease-out bg-black hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 px-5 py-2"
              type="submit"
              value="Send"
            >
              <p className="">Submit</p>
              <BsFillSendFill />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
