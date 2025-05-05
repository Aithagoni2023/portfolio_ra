import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-[#34495e] rounded-lg p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl">
      <div className="h-48 bg-cover bg-center rounded-lg mb-4" style={{ backgroundImage: `url(${project.image})` }} />
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-[#3498db] mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-[#2ecc71]/10 text-[#2ecc71] rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a
          href={project.github}
          className="flex items-center text-[#3498db] hover:text-[#2ecc71] transition-colors duration-300"
        >
          <FaGithub className="mr-2" /> Code
        </a>
        <a
          href={project.demo}
          className="flex items-center text-[#3498db] hover:text-[#2ecc71] transition-colors duration-300"
        >
          <FaExternalLinkAlt className="mr-2" /> Demo
        </a>
      </div>
    </div>
  );
}
