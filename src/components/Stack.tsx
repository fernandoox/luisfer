"use client";

import { useState } from "react";
import StackIcon from "tech-stack-icons";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

// Organized technologies by categories with frontend first
const techStack = {
  frontend: [
    { name: "js", label: "JavaScript" },
    { name: "typescript", label: "TypeScript" },
    { name: "angular17", label: "Angular" },
    { name: "reactjs", label: "React" },
    { name: "nextjs2", label: "Next.js" },
    { name: "html5", label: "HTML5" },
    { name: "css3", label: "CSS3" },
    { name: "sass", label: "Sass" },
    { name: "tailwindcss", label: "Tailwind CSS" },
  ],
  stateManagement: [
    { name: "redux", label: "Redux" },
    { name: "pinia", label: "Pinia" },
    { name: "reactquery", label: "React Query" },
  ],
  testing: [
    { name: "jest", label: "Jest" },
    { name: "vitest", label: "Vitest" },
  ],
  tools: [
    { name: "git", label: "Git" },
    { name: "github", label: "GitHub" },
    { name: "docker", label: "Docker" },
    { name: "storybook", label: "Storybook" },
  ],
  backend: [
    { name: "nodejs", label: "Node.js" },
    { name: "rails", label: "Ruby on Rails" },
    { name: "spring", label: "Spring" },
  ],
  database: [
    { name: "mongodb", label: "MongoDB" },
    { name: "mysql", label: "MySQL" },
    { name: "postgresql", label: "PostgreSQL" },
  ],
};

// Category labels in English
const categoryLabels = {
  frontend: "Frontend",
  stateManagement: "State Management",
  testing: "Testing",
  tools: "Tools",
  backend: "Backend",
  database: "Databases",
};

const MyStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Preserve the order of categories
  const allCategories = Object.keys(techStack);

  // Function to get all tech items for "All" view
  const getAllTechItems = () => {
    const allItems: { name: string; label: string }[] = [];
    allCategories.forEach((category) => {
      allItems.push(...techStack[category as keyof typeof techStack]);
    });
    return allItems;
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-12">My Stack</h2>

      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          onClick={() => setActiveCategory(null)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            activeCategory === null
              ? "bg-primary text-primary-foreground"
              : "bg-muted hover:bg-muted/80"
          )}
        >
          All
        </button>
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
              activeCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted/80"
            )}
          >
            {categoryLabels[category as keyof typeof categoryLabels]}
          </button>
        ))}
      </div>

      {/* Tech grid - different view for All vs. specific category */}
      {activeCategory === null ? (
        // All technologies in a continuous grid without category headers
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {getAllTechItems().map((tech) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-card hover:bg-card/80 transition-colors"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <StackIcon name={tech.name} />
              </div>
              <span className="mt-2 text-sm font-medium text-center">
                {tech.label}
              </span>
            </motion.div>
          ))}
        </div>
      ) : (
        // Single category view with header
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div className="col-span-full">
            <h3 className="text-xl font-semibold mb-4 mt-2">
              {categoryLabels[activeCategory as keyof typeof categoryLabels]}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {techStack[activeCategory as keyof typeof techStack].map(
                (tech) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-card hover:bg-card/80 transition-colors"
                  >
                    <div className="w-12 h-12 flex items-center justify-center">
                      <StackIcon name={tech.name} />
                    </div>
                    <span className="mt-2 text-sm font-medium text-center">
                      {tech.label}
                    </span>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyStack;
