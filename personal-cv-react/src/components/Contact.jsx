import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("Please fill in all required fields.");
    } else {
      alert(`Thank you ${name}!`);

      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section className="card">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          id="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message (Optional)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" id="submitBtn">Send</button>
      </form>
    </section>
  );
}