"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Monitor,
  Folder,
  FileText,
  Mail,
  Github,
  Linkedin,
  Globe,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

type Line = {
  type: "input" | "output";
  content: string | React.ReactNode;
};

const WELCOME_MESSAGE =
  'Welcome to my portfolio! Type "help" or "ls" for a list of commands.';

const projects = [
  {
    name: "Retro Computer Portfolio",
    description: "This interactive terminal-based portfolio website.",
    demoLink: "/",
    githubLink: "https://github.com/vedanthvnayak/retro-portfolio",
  },
  {
    name: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js.",
    demoLink: "https://ecommerce-platform-demo.vercel.app",
    githubLink: "https://github.com/vedanthvnayak/ecommerce-platform",
  },
  {
    name: "Weather Application",
    description: "Real-time weather app using OpenWeatherMap API.",
    demoLink: "https://weather-app-demo.vercel.app",
    githubLink: "https://github.com/vedanthvnayak/weather-app",
  },
  {
    name: "Task Management System",
    description:
      "A Kanban-style task management app with drag-and-drop functionality.",
    demoLink: "https://task-management-demo.vercel.app",
    githubLink: "https://github.com/vedanthvnayak/task-management",
  },
  {
    name: "Blockchain Explorer",
    description:
      "A web application to explore and analyze blockchain transactions.",
    demoLink: "https://blockchain-explorer-demo.vercel.app",
    githubLink: "https://github.com/vedanthvnayak/blockchain-explorer",
  },
];

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([
    { type: "output", content: WELCOME_MESSAGE },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setLines((prevLines) => [
        ...prevLines,
        { type: "input", content: `$ ${input}` },
      ]);
      processCommand(input.trim());
      setInput("");
    }
  };

  const processCommand = (command: string) => {
    switch (command.toLowerCase()) {
      case "help":
        addLine(
          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="text-yellow-400">about</span> - View my profile
            </div>
            <div>
              <span className="text-yellow-400">skills</span> - List my skills
            </div>
            <div>
              <span className="text-yellow-400">projects</span> - View my
              projects
            </div>
            <div>
              <span className="text-yellow-400">contact</span> - Get my contact
              info
            </div>
            <div>
              <span className="text-yellow-400">clear</span> - Clear the
              terminal
            </div>
            <div>
              <span className="text-yellow-400">ls</span> - List available
              commands
            </div>
          </div>
        );
        break;
      case "ls":
        addLine(
          <div className="grid grid-cols-3 gap-2">
            <div className="flex items-center">
              <Folder className="mr-2 text-yellow-400" size={16} /> about
            </div>
            <div className="flex items-center">
              <Folder className="mr-2 text-yellow-400" size={16} /> skills
            </div>
            <div className="flex items-center">
              <Folder className="mr-2 text-yellow-400" size={16} /> projects
            </div>
            <div className="flex items-center">
              <FileText className="mr-2 text-green-400" size={16} /> contact
            </div>
          </div>
        );
        break;
      case "cd about":
        router.push("/profile");
        break;
      case "skills":
        addLine(
          <div className="grid grid-cols-2 gap-2">
            <div>• HTML/CSS</div>
            <div>• JavaScript/TypeScript</div>
            <div>• React</div>
            <div>• Next.js</div>
            <div>• Node.js</div>
            <div>• Three.js</div>
            <div>• Git</div>
            <div>• RESTful APIs</div>
          </div>
        );
        break;
      case "projects":
      case "ls projects":
        addLine(
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-start">
                  <FileText className="mr-2 text-blue-400 mt-1" size={16} />
                  <div>
                    <span className="font-bold text-blue-400">
                      {project.name}
                    </span>
                    <br />
                    <span className="text-gray-400">{project.description}</span>
                  </div>
                </div>
                <div className="ml-6 mt-2 flex space-x-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline flex items-center"
                  >
                    <Globe className="mr-1" size={14} />
                    Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline flex items-center"
                  >
                    <Github className="mr-1" size={14} />
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        );
        break;
      case "contact":
        addLine(
          <div className="space-y-2">
            <div className="flex items-center">
              <Mail className="mr-2 text-blue-400" size={16} />
              <a
                href="mailto:vedanthv999@gmail.com"
                className="text-blue-400 hover:underline"
              >
                Email: vedanthv999@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <Github className="mr-2 text-purple-400" size={16} />
              <a
                href="https://github.com/vedanthvnayak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline"
              >
                GitHub: https://github.com/vedanthvnayak
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="mr-2 text-blue-600" size={16} />
              <a
                href="https://www.linkedin.com/in/vedanthv/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn: https://www.linkedin.com/in/vedanthv/
              </a>
            </div>
          </div>
        );
        break;
      case "clear":
        setLines([{ type: "output", content: WELCOME_MESSAGE }]);
        break;
      default:
        addLine(
          <span className="text-red-400">
            Command not recognized: {command}
          </span>
        );
    }
  };

  const addLine = (content: string | React.ReactNode) => {
    setLines((prevLines) => [...prevLines, { type: "output", content }]);
  };

  return (
    <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700">
      <div className="bg-gray-900 p-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-grow text-center text-white text-sm font-semibold">
          Vedanth&apos;s Terminal
        </div>
        <Monitor className="text-gray-400" size={20} />
      </div>
      <div
        ref={terminalRef}
        className="h-[70vh] overflow-y-auto p-4 font-mono text-sm bg-gray-900 text-green-400"
      >
        <AnimatePresence>
          {lines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`${
                line.type === "input" ? "text-blue-400" : "text-green-400"
              } mb-2`}
            >
              {line.content}
            </motion.div>
          ))}
        </AnimatePresence>
        <form onSubmit={handleInputSubmit} className="flex items-center mt-2">
          <span className="text-blue-400 mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            className="flex-grow bg-transparent text-white focus:outline-none"
            autoFocus
            placeholder="Type a command..."
          />
        </form>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
