"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Project = {
  id: string;
  title: string;
  description: string;
  image?: string;
  video?: string;
  tags: string[];
  featured: boolean;
};

const projects: Project[] = [
  {
    id: "project-1",
    title: "Home Insurance Quotation Tool",
    description:
      "A web app to quickly quote home insurance with coverage for damages, incidents, and assistance services.",
    image: "/projects/gnp.webp",
    tags: ["Angular", "TypeScript", "Angular Material", "Node.js"],
    featured: true,
  },
  {
    id: "project-2",
    title: "Kapital Flex",
    description:
      "A fintech solution offering flexible credit lines to finance supplier payments and improve cash flow management.",
    video: "/projects/k-flex.mp4",
    tags: ["React", "JavaScript", "Redux Toolkit", "MongoDB"],
    featured: true,
  },
  {
    id: "project-3",
    title: "Fitness Tracker",
    description:
      "A mobile-responsive application for tracking workouts, nutrition, and progress with data visualization and personalized insights.",
    image: "https://picsum.photos/804/504",
    tags: ["React", "Node.js", "MongoDB", "Chart.js"],
    featured: false,
  },
  {
    id: "project-4",
    title: "Weather App",
    description:
      "A weather forecast application with location detection, extended forecasts, and interactive weather maps.",
    image: "https://picsum.photos/803/503",
    tags: ["JavaScript", "HTML5", "CSS3", "API Integration"],
    featured: false,
  },
  {
    id: "project-5",
    title: "Blog Platform",
    description:
      "A full-featured blog platform with markdown support, comment system, and user authentication.",
    image: "https://picsum.photos/802/502",
    tags: ["Angular", "TypeScript", "Node.js", "PostgreSQL"],
    featured: true,
  },
  {
    id: "project-6",
    title: "Recipe Finder",
    description:
      "A recipe search application with filtering by ingredients, dietary restrictions, and meal type.",
    image: "https://picsum.photos/801/501",
    tags: ["React", "Redux", "CSS3", "API Integration"],
    featured: false,
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="relative w-full aspect-video">
        {project.video ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            preload="auto"
          >
            <source src={project.video} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={project.image || "/projects/default-project.jpg"}
            alt={project.title}
            className="object-cover"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
      </div>

      <div className="flex-1 p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-muted font-medium"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-1 text-xs rounded-full bg-muted font-medium">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          {project.description}
        </p>

        <div className="flex items-center gap-3 mt-auto">
          <Link
            href={`/projects/${project.id}`}
            className="ml-auto flex items-center gap-1 text-sm font-medium hover:underline"
          >
            View Details
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

// Main Projects component
const Projects: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "featured">("all");

  // Filter projects based on current filter
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.featured);

  return (
    <section className="w-full max-w-8xl py-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-3">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl">
            A collection of applications and websites I&apos;ve built,
            showcasing my skills and experience in web development.
          </p>
        </div>

        <div className="flex gap-3 mt-4 md:mt-0">
          <button
            onClick={() => setFilter("all")}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
              filter === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted/80"
            )}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter("featured")}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
              filter === "featured"
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted/80"
            )}
          >
            Featured
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
        >
          View All Projects
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
