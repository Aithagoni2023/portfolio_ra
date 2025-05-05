// src/pages/Projects.jsx
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Blockchain Wallet Development",
    description:
      "Designed and implemented a blockchain-based cryptocurrency wallet supporting 17 encrypted currencies. Ensured secure transactions and privacy while enabling seamless cross-platform functionality. Assisted in the implementation of machine learning algorithms for biometric recognition and authentication.",
    tech: ["Blockchain", "Cryptocurrency", "Machine Learning", "Security"],
    github: "https://github.com/your-username/blockchain-wallet",
    demo: "https://blockchain-wallet.com",
    date: "August, 2023",
  },
  {
    title: "Hybrid Model for Person Authentication",
    description:
      "Designed a multimodal biometric authentication system integrating various biometric features. Achieved significant improvements in security and reliability over unimodal methods. Conducted a comparative analysis of biometric recognition systems.",
    tech: ["Biometrics", "Security", "Machine Learning"],
    github: "https://github.com/your-username/person-authentication",
    demo: "https://person-authentication.com",
    date: "April, 2025",
  },
  {
    title: "Frontend Application Deployment Using Jenkins CI/CD on AWS",
    description:
      "Automated deployment of a frontend app with Jenkins CI/CD on AWS, using S3 for static assets and EC2 for hosting. Configured Jenkins for build, test, and deployment, and integrated Docker for containerization and Git for version control.",
    tech: ["Jenkins", "AWS", "Docker", "CI/CD", "Git"],
    github: "https://github.com/your-username/frontend-deployment-jenkins",
    demo: "https://frontend-deployment.com",
    date: "March, 2025",
  },
  {
    title: "React JS Application Deployment with Jenkins and SonarQube on AWS",
    description:
      "Deployed a React JS app with Jenkins CI/CD and AWS, using SonarQube for code quality and configuring Jenkins for automated build, test, and deployment.",
    tech: ["React", "Jenkins", "AWS", "SonarQube", "CI/CD"],
    github: "https://github.com/your-username/react-jenkins-sonarqube",
    demo: "https://react-jenkins-sonarqube.com",
    date: "April, 2025",
  },
];

export default function Projects() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}
