import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center">Contact Me</h1>
      <p className="text-lg mt-4 text-center">Feel free to reach out for collaboration!</p>

      {/* Phone */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Phone:</h2>
        <p className="text-lg mt-2">+1 (334) 440-1236</p>
      </div>

      {/* Email */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Email:</h2>
        <p className="text-lg mt-2">
          <a href="mailto:Aithagonranjith@gmail.com" className="text-[#3498db] hover:text-[#2ecc71]">
            <FaEnvelope className="inline mr-2" /> Aithagonranjith@gmail.com
          </a>
        </p>
      </div>

      {/* LinkedIn */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">LinkedIn:</h2>
        <p className="text-lg mt-2">
          <a
            href="https://www.linkedin.com/in/ranjith-kumar-144085257"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3498db] hover:text-[#2ecc71]">
            <FaLinkedin className="inline mr-2" /> https://www.linkedin.com/in/ranjith-kumar-144085257
          </a>
        </p>
      </div>

      {/* GitHub */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">GitHub:</h2>
        <p className="text-lg mt-2">
          <a
            href="https://github.com/Aithagoni2023"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3498db] hover:text-[#2ecc71]">
            <FaGithub className="inline mr-2" /> https://github.com/Aithagoni2023
          </a>
        </p>
      </div>
    </div>
  );
}
