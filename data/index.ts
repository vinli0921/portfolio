export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I have a variety of interests including tennis, astronomy, F1, and learning foreign languages. ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Please reach out! I'm very flexible and open to new ideas.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "CS student with a passion for computer vision.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently developing an AI Interview Bot to supplement the resume screening process.",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Automating Theorem Proving with LLMs and KGs",
      des: "Research project on automating mathematical proof generation using large language models and knowledge graph powered retrieval augmented generation.",
      img: "/llmproof.svg",
      iconLists: ["/py.svg", "/tensorflowdark.svg"],
      link: "https://github.com/vinli0921/LLM-Proof",
    },
    {
      id: 2,
      title: "Talentora: AI Interview Bot",
      des: "AI-powered interview bot to augment resume screening, providing recruiters with a comprehensive understanding of candidates beyond traditional methods.",
      img: "/talentora.svg",
      iconLists: ["/py.svg", "/next.svg", "/ts.svg", "/tail.svg", "/supabase.svg", "/dock.svg", "/verceldark.svg"],
      link: "https://github.com/RoboRecruiter-Organization",
    },
    {
      id: 3,
      title: "Recyclify: Making Recycling Simpler",
      des: "A binary image classification program determining recyclability of personal waste using Keras from Tensorflow.",
      img: "/recyclify.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/vinli0921/BostonHacks",
    },
    {
      id: 4,
      title: "College Mart: Get More for Less",
      des: "A platform where college students can trade, sell, or buy items with each other.",
      img: "/collegemart.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/supabase.svg"],
      link: "https://github.com/SamuelLo1/college-mart",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "AI Engineer",
      desc: "Worked with Red Hat's Ecosystem Engineering team to develop a LLM guardrails framework to prevent PII leakage and other security issues.",
      className: "md:col-span-2",
      thumbnail: "/redhat.svg",
    },
    {
      id: 2,
      title: "AI Researcher",
      desc: "Researched under Berkeley graduates on knowledge graph traversal by LLMs to produce mathematical proofs.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/algoverse.svg",
    },
    {
      id: 3,
      title: "Co-Founder",
      desc: "Created an innovative HR technology platform that harnesses real-time generative AI to deliver interactive, human-like candidate assessments and deep talent insights.",
      className: "md:col-span-2",
      thumbnail: "/talentora-logo.svg",
    },
    {
      id: 4,
      title: "Course Assistant",
      desc: "Helped TAs facilitate labs, hosted office hours, graded assignments, and answered piazza inquiries.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/bu.svg",
    },
    
  ];
  
  export const socialMedia = [
    {
      id: "1",
      img: "/git.svg",
      link: "https://github.com/vinli0921/",
    },
    {
      id: "2",
      img: "/link.svg",
      link:"https://www.linkedin.com/in/vinli0921/",
    },
  ];