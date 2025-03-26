"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const AboutMe: React.FC = () => {
  // Referencias para detectar cuándo cada párrafo entra en el viewport
  const ref1 = useRef<HTMLParagraphElement>(null);
  const ref2 = useRef<HTMLParagraphElement>(null);
  const ref3 = useRef<HTMLParagraphElement>(null);

  // Comprueba si los elementos están en el viewport
  const isInView1 = useInView(ref1, { once: true, amount: 0.3 });
  const isInView2 = useInView(ref2, { once: true, amount: 0.3 });
  const isInView3 = useInView(ref3, { once: true, amount: 0.3 });

  return (
    <div className="w-full md:w-2/6 mx-auto p-6 text-gray-500">
      <motion.p
        ref={ref1}
        className="mb-6 font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Hola! 👋 I am a software engineer and problem solver with a passion for
        technology, currently writing solutions for{" "}
        <a
          href="https://maxisend.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-300 font-bold hover:opacity-80"
        >
          MaxiSend
        </a>
        . I love developing front-end applications using React & Angular, among
        other technologies – you can{" "}
        <a
          href="#my-stack"
          onClick={(e) => {
            e.preventDefault();
            const stackElement = document.getElementById("my-stack");
            if (stackElement) {
              stackElement.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="text-inherit underline hover:opacity-80 cursor-pointer"
        >
          see my full stack
        </a>
        .
      </motion.p>

      <motion.p
        ref={ref2}
        className="mb-6 font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        I have previously worked at{" "}
        <a
          href="https://cornershopapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-300 font-bold hover:opacity-80"
        >
          Cornershop
        </a>{" "}
        and later at{" "}
        <a
          href="https://uber.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-300 font-bold hover:opacity-80"
        >
          Uber
        </a>
        , and I also have experience collaborating with companies in diverse
        sectors such as banking/fintech, insurance, startups, retail, e-commerce
        and remittances.
      </motion.p>

      <motion.p
        ref={ref3}
        className="mb-6 font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        At{" "}
        <a
          href="https://badak.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-300 font-bold hover:opacity-80"
        >
          Badak
        </a>
        , as an engineering lead, I designed and implemented a training program
        for new interns. This initiative was created to help fresh talent start
        their careers within the company smoothly and effectively.
      </motion.p>
    </div>
  );
};

export default AboutMe;
