"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  SiGo, 
  SiJavascript, 
  SiMysql, 
  SiMongodb, 
  SiTerraform, 
  SiYaml,
  SiKubernetes,
  SiRedhatopenshift,
  SiAmazonwebservices,
  SiFigma,
  SiJira,
  SiFlask,
  SiPandas,
  SiNumpy,
  SiPytorch,
  SiScikitlearn,
  SiOpenai,
  SiClaude,
  SiMeta,
  SiHuggingface,
  SiTensorflow,
  SiCplusplus,
  SiGit,
  SiDocker,
  SiPython,
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiSupabase,
} from 'react-icons/si';
import { FaJava, FaLinux } from 'react-icons/fa';

interface TechItem {
  name: string;
  icon?: React.ReactNode;
  svgPath?: string;
}

const techStack: TechItem[] = [
  // Programming Languages
  { name: 'Python', icon: <SiPython className="w-6 h-6 text-yellow-500" /> },
  { name: 'Java', icon: <FaJava className="w-6 h-6 text-orange-600" /> },
  { name: 'Go', icon: <SiGo className="w-6 h-6 text-cyan-400" /> },
  { name: 'JavaScript', icon: <SiJavascript className="w-6 h-6 text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="w-6 h-6 text-blue-500" /> },
  { name: 'C/C++', icon: <SiCplusplus className="w-6 h-6 text-blue-500" /> },
  { name: 'SQL', icon: <SiMysql className="w-6 h-6 text-blue-500" /> },
  
  // Tools & DevOps
  { name: 'Git', icon: <SiGit className="w-6 h-6 text-gray-300" /> },
  { name: 'Docker', icon: <SiDocker className="w-6 h-6 text-blue-500" /> },
  { name: 'Kubernetes', icon: <SiKubernetes className="w-6 h-6 text-blue-600" /> },
  { name: 'OpenShift', icon: <SiRedhatopenshift className="w-6 h-6 text-red-600" /> },
  { name: 'AWS', icon: <SiAmazonwebservices className="w-6 h-6 text-orange-400" /> },
  { name: 'Terraform', icon: <SiTerraform className="w-6 h-6" style={{ fill: '#7c3aed' }} /> },
  { name: 'YAML', icon: <SiYaml className="w-6 h-6 text-red-500" /> },
  { name: 'Unix', icon: <FaLinux className="w-6 h-6 text-gray-300" /> },
  
  // Design & Project Management
  { name: 'Figma', icon: <SiFigma className="w-6 h-6 text-pink-400" /> },
  { name: 'Jira', icon: <SiJira className="w-6 h-6 text-blue-600" /> },
  
  // AI/ML & Frameworks
  { name: 'TensorFlow', icon: <SiTensorflow className="w-6 h-6 text-orange-500" /> },
  { name: 'PyTorch', icon: <SiPytorch className="w-6 h-6 text-orange-500" /> },
  { name: 'Scikit-learn', icon: <SiScikitlearn className="w-6 h-6 text-orange-600" /> },
  { name: 'Hugging Face', icon: <SiHuggingface className="w-6 h-6 text-yellow-500" /> },
  { name: 'OpenAI', icon: <SiOpenai className="w-6 h-6 text-gray-500" /> },
  { name: 'Claude', icon: <SiClaude className="w-6 h-6 text-orange-600" /> },
  { name: 'Meta-Llama', icon: <SiMeta className="w-6 h-6 text-blue-600" /> },
  { name: 'vLLM', icon: '/vllm.svg' },
  { name: 'Cursor', icon: '/cursor.svg' },
  
  // Web Frameworks
  { name: 'Next.js', icon: <SiNextdotjs className="w-6 h-6 text-white" /> },
  { name: 'React', icon: <SiReact className="w-6 h-6 text-blue-500" /> },
  { name: 'Flask', icon: <SiFlask className="w-6 h-6 text-gray-300" /> },
  
  // Data & Databases
  { name: 'Pandas', icon: <SiPandas className="w-6 h-6 text-blue-600" /> },
  { name: 'NumPy', icon: <SiNumpy className="w-6 h-6 text-blue-500" /> },
  { name: 'Supabase', icon: <SiSupabase className="w-6 h-6 text-green-500" /> },
  { name: 'MySQL', icon: <SiMysql className="w-6 h-6 text-blue-600" /> },
  { name: 'MongoDB', icon: <SiMongodb className="w-6 h-6 text-green-500" /> },

];

const ScrollingTechStack = () => {
  // Split the tech stack into two columns
  const leftColumnTech = techStack.filter((_, index) => index % 2 === 0);
  const rightColumnTech = techStack.filter((_, index) => index % 2 === 1);
  
  // Create tripled arrays for truly seamless looping
  const tripledLeftColumn = [...leftColumnTech, ...leftColumnTech, ...leftColumnTech];
  const tripledRightColumn = [...rightColumnTech, ...rightColumnTech, ...rightColumnTech];

  const renderTechIcon = (tech: TechItem) => {
    if (tech.svgPath) {
      return (
        <div className="flex items-center justify-center w-8 h-8">
          <Image
            src={tech.svgPath}
            alt={tech.name}
            width={24}
            height={24}
            className="object-contain opacity-70"
          />
        </div>
      );
    }
    
    // Special handling for SVG paths in icon property
    if (typeof tech.icon === 'string' && tech.icon.startsWith('/')) {
      // Apply special styling for cursor.svg to make it visible
      const isCursorIcon = tech.icon.includes('cursor.svg');
      const isVllmIcon = tech.icon.includes('vllm.svg');
      
      return (
        <div className="flex items-center justify-center w-8 h-8">
          <Image
            src={tech.icon}
            alt={tech.name}
            width={24}
            height={24}
            className={`object-contain ${isCursorIcon ? 'opacity-90' : isVllmIcon ? 'opacity-80' : 'opacity-70'}`}
            style={
              isCursorIcon 
                ? { filter: 'invert(1) brightness(0.7)' } 
                : isVllmIcon 
                ? { filter: 'brightness(0.9) contrast(1.2)' }
                : {}
            }
          />
        </div>
      );
    }
    
    return tech.icon || <div className="w-6 h-6 bg-gray-500 rounded" />;
  };

  return (
    <div className="flex gap-3 lg:gap-5 w-fit absolute -right-3 lg:-right-2 h-full overflow-hidden">
      {/* Left Column */}
      <div className="flex flex-col relative h-full">
        <motion.div
          className="flex flex-col gap-3 md:gap-3 lg:gap-8"
          animate={{
            y: ["0%", "-33.333%"],
          }}
          transition={{
            y: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {tripledLeftColumn.map((tech, i) => (
            <div
              key={`left-${i}`}
              className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base
                       rounded-lg text-center bg-[#10132E] flex items-center justify-center
                       min-h-[40px] lg:min-h-[60px] opacity-50 lg:opacity-100
                       hover:opacity-100 transition-opacity duration-200"
              title={tech.name}
            >
              {renderTechIcon(tech)}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col relative h-full">
        <motion.div
          className="flex flex-col gap-3 md:gap-3 lg:gap-8"
          animate={{
            y: ["-33.333%", "0%"],
          }}
          transition={{
            y: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {tripledRightColumn.map((tech, i) => (
            <div
              key={`right-${i}`}
              className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base
                       rounded-lg text-center bg-[#10132E] flex items-center justify-center
                       min-h-[40px] lg:min-h-[60px] opacity-50 lg:opacity-100
                       hover:opacity-100 transition-opacity duration-200"
              title={tech.name}
            >
              {renderTechIcon(tech)}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollingTechStack; 