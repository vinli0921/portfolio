"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";

const Research = () => {
  return (
    <section className="w-full py-20" id="research">
        <h1 className="heading">
            My <span className="text-purple">Research</span>
        </h1>
        <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card 
            title="Surveillance Policies as a Means for Pandemic Prevention and Monitoring" 
            icon={<AceternityIcon order="Capstone Paper"/>}
            description="Policy analysis exploring the ethical and practical implications of surveillance technology in public health response"
        >
            <CanvasRevealEffect
                animationSpeed={5}
                containerClassName="bg-black"
            />
            <a 
              href="https://docs.google.com/document/d/1vgChdi0EqrDK35akc66_Ym_6R_BitUT2vvaYOufJsdo/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center z-30"
            >
              <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
              </button>
            </a>
        </Card>
        <Card 
            title="Automating Mathematical Proof Generation Using Large Language Models and Knowledge Graphs" 
            icon={<AceternityIcon order="ICML and NAACL"/>}
            description="Novel approach combining LLMs with knowledge graph traversal for automated theorem proving - advancing AI reasoning capabilities"
        >
            <CanvasRevealEffect
                animationSpeed={5}
                containerClassName="bg-black"
                colors={[
                    [236, 72, 153],
                    [232, 121, 249],
                ]}
                dotSize={2}
            />
            <a 
              href="https://arxiv.org/abs/2503.11657"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center z-30"
            >
              <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
              </button>
            </a>
            
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center text-3xl">
          {title}
        </h2>
        <h2 className="text-sm dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center" style={{ color: '#e4ecff'}}>
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="text-2xl font-bold px-5 py-2">
                {order}
            </span>
        </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Research;