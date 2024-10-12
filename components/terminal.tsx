"use client";

import React, { useState, useEffect, useRef } from "react";
import { Monitor } from "lucide-react";
import { useRouter } from "next/navigation"; // Import useRouter hook

type Line = {
  type: "input" | "output";
  content: string;
};

const WELCOME_MESSAGE =
  'Welcome to my portfolio! Type "help" or "ls" for a list of commands.';

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([
    {
      type: "output",
      content: WELCOME_MESSAGE,
    },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const router = useRouter(); // Initialize useRouter

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
        addLine("Available commands: about, skills, projects, contact, clear");
        break;
      case "ls":
        addLine("about");
        addLine("skills");
        addLine("projects");
        addLine("contact");
        break;
      case "cd about":
        // Redirect to /profile page
        router.push("/profile");
        break;
      case "cd skills":
        addLine(
          "My skills include: HTML, CSS, JavaScript, React, Next.js, Three.js, and more."
        );
        break;
      case "cd projects":
        addLine("Some of my projects include:");
        addLine("1. This retro computer portfolio");
        addLine("2. E-commerce platform");
        addLine("3. Weather application");
        break;
      case "contact":
        addLine("Email: your.email@example.com");
        addLine("GitHub: https://github.com/yourusername");
        addLine("LinkedIn: https://linkedin.com/in/yourprofile");
        break;
      case "clear":
        setLines([{ type: "output", content: WELCOME_MESSAGE }]);
        break;
      default:
        addLine(`Command not recognized: ${command}`);
    }
  };

  const addLine = (content: string) => {
    setLines((prevLines) => [...prevLines, { type: "output", content }]);
  };

  return (
    <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gray-700 p-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-grow text-center text-white text-sm font-semibold">
          Terminal
        </div>
        <Monitor className="text-gray-400" size={20} />
      </div>
      <div
        ref={terminalRef}
        className="h-[70vh] overflow-y-auto p-4 font-mono text-sm bg-gray-900"
      >
        <div className="mb-4">
          {lines.map((line, index) => (
            <div
              key={index}
              className={`${
                line.type === "input" ? "text-blue-400" : "text-green-400"
              } mb-1`}
            >
              {line.content}
            </div>
          ))}
        </div>
        <form onSubmit={handleInputSubmit} className="flex items-center">
          <span className="text-blue-400 mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            className="flex-grow bg-transparent text-white focus:outline-none p-1"
            autoFocus
            placeholder="Type a command..."
          />
        </form>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
