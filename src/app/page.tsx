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
    <div className="w-full md:w-2/5 mx-auto p-6">
      <p className="mb-4">
        Hola! 👋 I am a software engineer and problem solver with a passion for
        technology, currently writing solutions for MaxiSend. I love developing
        front-end applications using React & Angular, among other technologies –
        see my full stack [link].
      </p>
      <p className="mb-4">
        I have previously worked at Cornershop by Uber and later at Uber, and I
        also have experience collaborating with companies in diverse sectors
        such as insurance, banking/fintech, retail, and remittances.
      </p>
      <p className="mb-4">
        At Badak, as an engineering lead, I designed and implemented a training
        program for new interns. This initiative was created to help fresh
        talent start their careers within the company smoothly and effectively.
      </p>
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
