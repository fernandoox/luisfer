// src/app/page.tsx
"use client";

import React from "react";
import MyStack from "@/components/Stack";
import Projects from "@/components/Projects";
import AboutMe from "@/components/About";

const HomePage: React.FC = () => {
  return (
    <>
      <AboutMe />
      <div className="w-full md:w-5/6 mx-auto p-6">
        <Projects />
        <MyStack />
      </div>
    </>
  );
};

export default HomePage;
