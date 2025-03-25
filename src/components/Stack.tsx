"use client";

import { useState } from "react";
import StackIcon from "tech-stack-icons";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

// Organized technologies by categories with frontend first
const techStack = {
  frontend: [
    { name: "html5", label: "HTML5" },
    { name: "css3", label: "CSS3" },
    { name: "sass", label: "Sass" },
    { name: "tailwindcss", label: "Tailwind CSS" },
    { name: "js", label: "JavaScript" },
    { name: "typescript", label: "TypeScript" },
    { name: "reactjs", label: "React" },
    { name: "nextjs2", label: "Next.js" },
    { name: "angular17", label: "Angular" },
  ],
  stateManagement: [
    { name: "redux", label: "Redux" },
    { name: "pinia", label: "Pinia" },
    { name: "reactquery", label: "React Query" },
    { name: "graphql", label: "GraphQL" },
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

// Category labels with emojis
const categoryLabels = {
  frontend: "🚀 Frontend",
  stateManagement: "🔄 State Management",
  testing: "🧪 Testing",
  tools: "🔧 Tools",
  backend: "⚙️ Backend",
  database: "🗄️ Databases",
};

const MyStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Preserve the order of categories
  const allCategories = Object.keys(techStack);

  // Calculate grid rows and columns based on the number of items
  const getCategorySpan = (category: string) => {
    const itemCount = techStack[category as keyof typeof techStack].length;

    // Define the row and column spans based on item count
    if (itemCount <= 2) return "md:col-span-1"; // Small
    if (itemCount <= 5) return "md:col-span-2"; // Medium
    return "md:col-span-3"; // Large
  };

  return (
    <div className="w-full px-0 py-10">
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

      <AnimatePresence mode="wait">
        {activeCategory === null ? (
          // All categories view - Pinterest-style masonry grid
          <motion.div
            key="all-categories"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 auto-rows-min"
          >
            {allCategories.map((category) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={cn(
                  "col-span-1 rounded-xl border-2 border-border/50 p-5",
                  getCategorySpan(category)
                )}
              >
                <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-border/20">
                  {categoryLabels[category as keyof typeof categoryLabels]}
                </h3>

                <div
                  className={cn(
                    "grid gap-2 sm:gap-3",
                    techStack[category as keyof typeof techStack].length <= 2
                      ? "grid-cols-1 place-items-center" // Vertical layout for categories with ≤2 items
                      : "grid-cols-2 sm:grid-cols-3" // Responsive grid for other categories
                  )}
                >
                  {techStack[category as keyof typeof techStack].map((tech) => (
                    <motion.div
                      key={tech.name}
                      layout
                      className="flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-300"
                    >
                      <div className="w-10 h-10 flex items-center justify-center">
                        <StackIcon name={tech.name} />
                      </div>
                      <span className="mt-2 text-xs font-medium text-center">
                        {tech.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          // Single category view
          <motion.div
            key={`category-${activeCategory}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full p-6"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {techStack[activeCategory as keyof typeof techStack].map(
                (tech) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300"
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MyStack;
