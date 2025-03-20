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
    <div className="w-full md:w-2/6 mx-auto p-6">
      <p className="mb-4">
        Hola! 👋 I am a software engineer and problem solver with a passion for
        technology, currently writing solutions for <strong>MaxiSend</strong>. I
        love developing front-end applications using React & Angular, among
        other technologies – see my full stack [link].
      </p>
      <p className="mb-4">
        I have previously worked at <strong>Cornershop</strong> and later at{" "}
        <strong>Uber</strong>, and I also have experience collaborating with
        companies in diverse sectors such as banking/fintech, insurance,
        startups, retail and remittances.
      </p>
      <p className="mb-4">
        At <strong>Badak</strong>, as an engineering lead, I designed and
        implemented a training program for new interns. This initiative was
        created to help fresh talent start their careers within the company
        smoothly and effectively.
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
