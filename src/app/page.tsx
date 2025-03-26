// src/app/page.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import AnimatedDiv from "@/components/AnimatedDiv";
import MyStack from "@/components/Stack";
import Projects from "@/components/Projects";
import AboutMe from "@/components/About";

const HomePage: React.FC = () => {
  const router = useRouter();

  const navigateToProjects = () => {
    router.push("/projects");
  };

  return (
    <>
      <AboutMe />
      <div className="w-full md:w-5/6 mx-auto p-6">
        <Projects />
        <MyStack />
        {/* Botón de navegación a la página de proyectos */}
        <AnimatedDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button onClick={navigateToProjects}>Ver Proyectos</button>
        </AnimatedDiv>
      </div>
    </>
  );
};

export default HomePage;
