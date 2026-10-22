"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Project = {
  id: string;
  title: string;
  description: string;
  image?: string;
  // Fuentes del video en orden de preferencia (p. ej. WebM y MP4 de respaldo)
  video?: string[];
  // Imagen que se muestra mientras el video no ha cargado
  poster?: string;
  // Media vertical (p. ej. grabaciones de apps móviles) se muestra como teléfono
  portrait?: boolean;
  // Clases de Tailwind para el fondo detrás de la media vertical
  mediaBg?: string;
  tags: string[];
  featured: boolean;
};

const projects: Project[] = [
  {
    id: "project-4",
    title: "MaxiSend",
    description:
      "A money transfer platform designed for Latin American families, enabling secure and fast remittances from the U.S. to 17 countries through a wide agent network.",
    image: "/projects/maxi.webp",
    tags: ["Angular", "Redux", "GraphQL", "WebSockets"],
    featured: true,
  },
  {
    id: "project-6",
    title: "Cornershop by UBER",
    description:
      "A customer service platform built for Cornershop’s grocery delivery operations, enabling support teams to manage inquiries, track issues, and deliver fast, personalized assistance.",
    image: "/projects/corner.png",
    tags: ["React", "Zustand", "i18n", "Design System"],
    featured: true,
  },
  {
    id: "project-9",
    title: "Juntos+ Coca-Cola FEMSA",
    description:
      "A mobile app for Coca-Cola FEMSA used across 11 Latin American countries, including Mexico, Colombia and Brazil, connecting store owners with ordering, promotions and rewards.",
    // Video comprimido con la velocidad 2x ya aplicada
    video: ["/projects/juntos-plus-2x.webm", "/projects/juntos-plus-2x.mp4"],
    poster: "/projects/juntos-plus-poster.webp",
    portrait: true,
    mediaBg: "bg-gradient-to-br from-[#FF4D52] to-[#F40009]",
    tags: ["React Native", "Native Modules", "iOS", "Android"],
    featured: true,
  },
  {
    id: "project-10",
    title: "Santander LikeU Credit Card",
    description:
      "A mobile-first digital onboarding flow for Santander, letting customers apply for the LikeU credit card in minutes from their phone, built on Santander's style guide.",
    image: "/projects/santandr-like-u.png",
    portrait: true,
    mediaBg: "bg-gradient-to-br from-neutral-200 to-neutral-400",
    tags: ["Angular", "Style Guide", "Onboarding", "Mobile-first"],
    featured: true,
  },
  {
    id: "project-2",
    title: "Kapital Flex",
    description:
      "A fintech solution offering flexible credit lines to finance supplier payments and improve cash flow management.",
    image: "/projects/kapital.webp",
    tags: ["React", "JavaScript", "Redux Toolkit", "MongoDB"],
    featured: true,
  },
  {
    id: "project-7",
    title: "Liverpool E-commerce",
    description:
      "Enhancements to Liverpool’s online retail experience, focusing on performance, SEO, and digital marketing strategies to boost visibility and drive organic growth.",
    image: "/projects/liverpool.webp",
    tags: ["Next", "SEO On-page", "Google Analytics", "GTM"],
    featured: true,
  },
  {
    id: "project-3",
    title: "Líderes Coca-Cola",
    description:
      "A loyalty rewards platform where store owners earn points based on Coca-Cola purchases, store performance, and monthly sales goals.",
    image: "/projects/lideres.webp",
    tags: ["Angular", "PrimeNG", "Chart.js"],
    featured: true,
  },
  {
    id: "project-8",
    title: "Banorte SPEI Integration",
    description:
      "Developed a robust integration for Banorte using the SPEI system, enabling real-time, secure fund transfers through optimized APIs and banking protocols.",
    image: "/projects/banorte.webp",
    tags: ["Express", "Spring Boot", "Kafka"],
    featured: true,
  },
  {
    id: "project-1",
    title: "Home Insurance Quotation Tool",
    description:
      "A web app to quickly quote home insurance with coverage for damages, incidents, and assistance services.",
    image: "/projects/gnp.webp",
    tags: ["Angular", "TypeScript", "Angular Material", "Express"],
    featured: true,
  },
  {
    id: "project-5",
    title: "OrkestaDoc (Tax Materiality)",
    description:
      "A blockchain-powered compliance platform that streamlines legal processes, workplace safety, intercompany financial operations, and tax materiality through secure and transparent solutions.",
    image: "/projects/orkesta.webp",
    tags: ["React", "Blockchain", "Express", "MongoDB"],
    featured: true,
  },
];

const videoType = (src: string) =>
  src.endsWith(".webm") ? "video/webm" : "video/mp4";

// Descarga el video solo cuando está cerca del viewport y lo pausa al salir
const LazyVideo = ({
  sources,
  poster,
  controls,
  className,
}: {
  sources: string[];
  poster?: string;
  controls?: boolean;
  className?: string;
}) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          video.pause();
          return;
        }
        if (!video.getAttribute("src")) {
          const src =
            sources.find((s) => video.canPlayType(videoType(s)) !== "") ??
            sources[0];
          video.src = src;
        }
        video.play().catch(() => {});
      },
      { rootMargin: "200px" }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [sources]);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      controls={controls}
      className={className}
    />
  );
};

const ProjectMedia = ({
  project,
  inModal = false,
}: {
  project: Project;
  inModal?: boolean;
}) => {
  // Radio elíptico (~igual en px en ambos ejes para una pantalla ~9:19.5)
  // que recorta las esquinas negras de las grabaciones de pantalla
  const portraitClass = cn(
    "w-auto rounded-[15%/7%] shadow-2xl ring-1 ring-black/10",
    inModal ? "max-h-[80vh]" : "h-[90%]"
  );

  if (project.video) {
    return (
      <LazyVideo
        sources={project.video}
        poster={project.poster}
        controls={inModal}
        className={
          project.portrait
            ? portraitClass
            : "absolute inset-0 w-full h-full object-cover"
        }
      />
    );
  }

  if (project.portrait && project.image) {
    // width/height en 0 + sizes: Next calcula el tamaño y el CSS fija el alto
    return (
      <Image
        src={project.image}
        alt={project.title}
        width={0}
        height={0}
        sizes={inModal ? "450px" : "250px"}
        className={portraitClass}
      />
    );
  }

  return (
    <Image
      src={project.image || "/projects/default-project.jpg"}
      alt={project.title}
      className={inModal ? "object-contain" : "object-cover"}
      fill
      sizes={
        inModal
          ? "(max-width: 1024px) 100vw, 1024px"
          : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      }
    />
  );
};

const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  // Cierra con Escape y bloquea el scroll del fondo mientras está abierto
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={cn(
          "relative w-full max-h-[90vh] overflow-y-auto bg-card rounded-xl shadow-2xl",
          project.portrait ? "max-w-4xl md:flex" : "max-w-5xl"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/80 backdrop-blur hover:bg-background transition-colors"
        >
          <X size={18} />
        </button>

        <div
          className={cn(
            "relative flex items-center justify-center",
            project.portrait
              ? cn("p-6 md:w-1/2 shrink-0", project.mediaBg ?? "bg-muted")
              : "w-full aspect-video bg-muted"
          )}
        >
          <ProjectMedia project={project} inModal />
        </div>

        <div className="p-6 md:p-8 flex flex-col justify-center">
          <h3 id="project-modal-title" className="text-2xl font-bold mb-3">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-muted font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "flex flex-col bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300",
        // Los proyectos verticales ocupan 2 columnas: teléfono a la izquierda, texto a la derecha
        project.portrait && "md:col-span-2 md:flex-row"
      )}
    >
      <button
        onClick={onOpen}
        aria-label={`Open ${project.title} details`}
        className={cn(
          "relative w-full flex items-center justify-center overflow-hidden",
          project.portrait
            ? cn(
                "aspect-square md:aspect-auto md:w-3/5 md:h-[28rem] shrink-0",
                project.mediaBg ?? "bg-muted"
              )
            : "aspect-video"
        )}
      >
        <ProjectMedia project={project} />
      </button>

      <div
        className={cn(
          "flex-1 p-5",
          project.portrait && "md:p-8 md:flex md:flex-col md:justify-center"
        )}
      >
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
        <p
          className={cn(
            "text-sm text-muted-foreground mb-4 line-clamp-3",
            project.portrait && "md:text-base md:line-clamp-none"
          )}
        >
          {project.description}
        </p>

        <div
          className={cn(
            "flex items-center gap-3 mt-auto",
            project.portrait && "md:mt-2"
          )}
        >
          <button
            onClick={onOpen}
            className="ml-auto flex items-center gap-1 text-sm font-medium hover:underline"
          >
            View Details
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "featured">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    null
  );

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
          {/*  <button
            onClick={() => setFilter("featured")}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
              filter === "featured"
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted/80"
            )}
          >
            Featured
          </button> */}
        </div>
      </div>

      {/* grid-flow-dense rellena con la siguiente tarjeta el hueco que deja una ancha */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-dense gap-10">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
