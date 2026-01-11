"use client";

import React from "react";
import AnimatedDiv from "@/components/AnimatedDiv";

const AboutPage: React.FC = () => {
  return (
    <div className="w-full md:w-5/6 mx-auto p-6">
      <AnimatedDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6">Proyectos</h1>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Proyecto 1</h2>
            <p className="text-muted-foreground">Descripción del proyecto 1.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Proyecto 2</h2>
            <p className="text-muted-foreground">Descripción del proyecto 2.</p>
          </div>
        </div>
      </AnimatedDiv>
    </div>
  );
};

export default AboutPage;
