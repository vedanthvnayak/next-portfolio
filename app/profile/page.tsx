import {
  CodeBracketIcon,
  CpuChipIcon,
  ServerStackIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage: React.FC = () => {
  return (
    <div className="w-full p-6 bg-gray-900 text-white">
      <div className="flex flex-col items-center mb-6">
        <img
          src="/profile.jpg"
          alt="Vedanth V"
          className="w-32 h-32 rounded-full border-4 border-gray-700 shadow-lg mb-4"
        />
        <h1 className="text-4xl font-bold text-center">
          Welcome to My Portfolio
        </h1>
      </div>
      <p className="text-xl mb-6 text-center">
        I&apos;m Vedanth V, a web developer with a passion for creating
        interactive and user-friendly applications.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <ul className="list-disc list-inside mb-6 pl-4">
        <li className="flex items-center mb-2">
          <CodeBracketIcon className="w-5 h-5 mr-2 text-green-400" />{" "}
          TypeScript, JavaScript, C, C++, Python, Core Java
        </li>
        <li className="flex items-center mb-2">
          <CodeBracketIcon className="w-5 h-5 mr-2 text-green-400" /> React,
          Next.js, Tailwind CSS, Node.js, HTML5, CSS3
        </li>
        <li className="flex items-center mb-2">
          <CpuChipIcon className="w-5 h-5 mr-2 text-blue-400" /> Database
          management (SQL, MongoDB, PostgreSQL, MySQL)
        </li>
        <li className="flex items-center mb-2">
          <ServerStackIcon className="w-5 h-5 mr-2 text-yellow-400" />{" "}
          Development Tools: Vitest, Git, Shadcn components, Storybook
        </li>
        <li className="flex items-center mb-2">
          <UserGroupIcon className="w-5 h-5 mr-2 text-red-400" /> Soft Skills:
          Teamwork, Leadership, Communication
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-700 bg-gray-800 p-4 rounded-lg transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <FontAwesomeIcon
              className="mr-2 text-indigo-400"
              size="lg"
              icon={"function"}
            />{" "}
            {/* Adjusted size */}
            Library Management App
          </h3>
          <p>
            Developed a full-stack library management system using Next.js,
            PostgreSQL, and Drizzle ORM. Deployed using AWS and Vercel,
            optimized for high availability.
          </p>
        </div>
        <div className="border border-gray-700 bg-gray-800 p-4 rounded-lg transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <FontAwesomeIcon
              icon={"function"}
              className="mr-2 text-pink-400"
              size="lg"
            />{" "}
            {/* Adjusted size */}
            Alva&apos;s Admission Analytics
          </h3>
          <p>
            Built a web app for admission insights using HTML, CSS, JavaScript,
            PHP, and MySQL. Helped improve enrollment strategies through data
            analysis.
          </p>
        </div>
        <div className="border border-gray-700 bg-gray-800 p-4 rounded-lg transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <FontAwesomeIcon
              icon={"function"}
              className="mr-2 text-yellow-400"
              size="lg"
            />{" "}
            {/* Adjusted size */}
            Drona.ai
          </h3>
          <p>
            Created a multi-tasking AI assistant using React and OpenAI API,
            including a mock interview assistant that provides real-time
            feedback.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
