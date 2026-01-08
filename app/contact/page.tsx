"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");


  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold mb-8">Contact Me</h1>

      <form
  className="flex flex-col gap-6"
  onSubmit={(e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("Please fill in all fields");
      return;
    }

    setError("");
    alert("Message sent (demo)");
  }}
>
        {/* Name */}
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-lg px-4 py-3"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-lg px-4 py-3"
        />

        {/* Message */}
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border rounded-lg px-4 py-3 h-40"
        />
        {error && (
  <p className="text-red-500 text-sm">{error}</p>
)}
        <button
          type="submit"
          className="bg-black text-white py-3 rounded-lg"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
