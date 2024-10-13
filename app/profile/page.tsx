"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Server, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [typedText, setTypedText] = useState("");

  const skills = [
    { icon: Code2, text: "TypeScript, JavaScript, C, C++, Python, Core Java" },
    { icon: Code2, text: "React, Next.js, Tailwind CSS, Node.js, HTML5, CSS3" },
    {
      icon: Cpu,
      text: "Database management (SQL, MongoDB, PostgreSQL, MySQL)",
    },
    {
      icon: Server,
      text: "Development Tools: Vitest, Git, Shadcn components, Storybook",
    },
    { icon: Users, text: "Soft Skills: Teamwork, Leadership, Communication" },
  ];

  const projects = [
    {
      title: "Library Management App",
      description:
        "Developed a full-stack library management system using Next.js, PostgreSQL, and Drizzle ORM. Deployed using AWS and Vercel, optimized for high availability.",
      icon: "📚",
      href: "/projects/library-management",
    },
    {
      title: "Alva's Admission Analytics",
      description:
        "Built a web app for admission insights using HTML, CSS, JavaScript, PHP, and MySQL. Helped improve enrollment strategies through data analysis.",
      icon: "📊",
      href: "/projects/admission-analytics",
    },
    {
      title: "Drona.ai",
      description:
        "Created a multi-tasking AI assistant using React and OpenAI API, including a mock interview assistant that provides real-time feedback.",
      icon: "🤖",
      href: "/projects/drona-ai",
    },
  ];

  useEffect(() => {
    const text = "Welcome to My Portfolio";
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setTypedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-green-400 overflow-hidden mx-auto mb-4 sm:mb-6">
            <Image
              src="/profile.jpg"
              alt="Vedanth V"
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 flex items-center justify-center">
            <span className="mr-2">$</span>
            <span>{typedText}</span>
            <span className="animate-pulse">_</span>
          </h1>
          <p className="text-base sm:text-xl px-4 sm:px-0">
            I&apos;m Vedanth V, a web developer with a passion for creating
            interactive and user-friendly applications.
          </p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center">
            <span className="mr-2">$</span> cat skills.txt
          </h2>
          <ul className="space-y-3 sm:space-y-4">
            {skills.map((skill, index) => (
              <motion.li
                key={index}
                className="flex items-start sm:items-center bg-gray-900 rounded p-3 sm:p-4 border border-green-400"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <skill.icon className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 mt-1 sm:mt-0 flex-shrink-0" />
                <span className="text-sm sm:text-base">{skill.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center">
            <span className="mr-2">$</span> ls projects/
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded p-4 sm:p-6 border border-green-400 relative overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <Link href={project.href} passHref>
                  <div className="flex items-center mb-2 sm:mb-4">
                    <span className="text-3xl sm:text-4xl mr-3 sm:mr-4">
                      {project.icon}
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-green-300 text-sm sm:text-base">
                    {project.description}
                  </p>
                </Link>
                <motion.div
                  className="absolute inset-0 bg-green-400 opacity-0"
                  initial={false}
                  animate={{ opacity: hoveredProject === index ? 0.1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
