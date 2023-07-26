import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import GitHub and LinkedIn icons

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <ul>
        <li>
          <FaGithub />{" "}
          <a
            href="https://github.com/andresmacana"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <FaLinkedin />{" "}
          <a
            href="https://linkedin.com/in/jorge-macana"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
