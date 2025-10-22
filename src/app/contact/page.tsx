// src/app/contact/page.tsx
"use client";

import React from "react";
import AnimatedDiv from "@/components/AnimatedDiv";
import { Github, Linkedin, Instagram } from "lucide-react";

const ContactPage: React.FC = () => {
  return (
    <div className="w-full md:w-5/6 mx-auto p-6">
      <AnimatedDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Let&apos;s Connect 👋
          </h1>
          <p className="text-muted-foreground text-lg">
            Find me on social media and let&apos;s build something amazing
            together
          </p>
        </div>
      </AnimatedDiv>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a
            href="https://www.linkedin.com/in/luis-fernando-fern%C3%A1ndez-cruz-056054168/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col h-full bg-card border border-border rounded-lg p-8 shadow-sm hover:shadow-md hover:border-primary transition-all group"
          >
            <div className="flex flex-col items-center text-center flex-1">
              <div className="mb-4 p-4 bg-[#0A66C2]/10 rounded-full group-hover:scale-110 transition-transform">
                <Linkedin size={32} className="text-[#0A66C2]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">
                Professional network & career updates
              </p>
            </div>
          </a>
        </AnimatedDiv>

        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="https://github.com/fernandoox/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col h-full bg-card border border-border rounded-lg p-8 shadow-sm hover:shadow-md hover:border-primary transition-all group"
          >
            <div className="flex flex-col items-center text-center flex-1">
              <div className="mb-4 p-4 bg-[#6e5494]/10 rounded-full group-hover:scale-110 transition-transform">
                <Github size={32} className="text-[#6e5494]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-sm text-muted-foreground">
                Open source projects & code repositories
              </p>
            </div>
          </a>
        </AnimatedDiv>

        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://instagram.com/_fernando_ox"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col h-full bg-card border border-border rounded-lg p-8 shadow-sm hover:shadow-md hover:border-primary transition-all group"
          >
            <div className="flex flex-col items-center text-center flex-1">
              <div className="mb-4 p-4 bg-[#E4405F]/10 rounded-full group-hover:scale-110 transition-transform">
                <Instagram size={32} className="text-[#E4405F]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instagram</h3>
              <p className="text-sm text-muted-foreground">
                Behind the scenes & personal updates
              </p>
            </div>
          </a>
        </AnimatedDiv>
      </div>
    </div>
  );
};

export default ContactPage;
