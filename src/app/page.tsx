// src/app/page.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import AnimatedDiv from "@/components/AnimatedDiv";

const HomePage: React.FC = () => {
  const router = useRouter();

  const navigateToProjects = () => {
    router.push("/projects");
  };

  return (
    <div>
      <h1>Bienvenido a mi Portfolio</h1>
      <p>Explora mis proyectos destacados:</p>

      {/* Botón de navegación a la página de proyectos */}
      <AnimatedDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button onClick={navigateToProjects}>Ver Proyectos</button>
      </AnimatedDiv>
    </div>
  );
};

export default HomePage;
