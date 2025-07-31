import ProjectShowcase from "../components/ProjectShowcase";

const projects = [
  {
    id: 1,
    slug: "portfolio-website",
  },
  {
    id: 2,
    slug: "portfolio-website",
  },
   {
    id: 3,
    slug: "portfolio-website",
  },
   {
    id: 4,
    slug: "portfolio-website",
  },
   {
    id: 5,
    slug: "portfolio-website",
  },
   {
    id: 6,
    slug: "portfolio-website",
  }
];

export default function Projects() {
  return (
    <section className="relative bg-gradient-to-br from-black to-gray-800 py-20 min-h-screen">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200 mb-8"><span className="text-purple-600">My</span> Projects</h1>      
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
             <ProjectShowcase 
        new={true}
        title="Portfolio Website"
        description="A personal portfolio website built with Next.js and Tailwind CSS."
        link={`/projects/portfolio-website`}
        tech={["Next.js", "Tailwind CSS", "React"]}
      />
          <ProjectShowcase 
        new={true}
        title="Portfolio Website"
        description="A personal portfolio website built with Next.js and Tailwind CSS."
        link={`/projects/portfolio-website`}
        tech={["Next.js", "Tailwind CSS", "React"]}
      />
          <ProjectShowcase 
        new={true}
        title="Portfolio Website"
        description="A personal portfolio website built with Next.js and Tailwind CSS."
        link={`/projects/portfolio-website`}
        tech={["Next.js", "Tailwind CSS", "React"]}
      />
          <ProjectShowcase 
        new={true}
        title="Portfolio Website"
        description="A personal portfolio website built with Next.js and Tailwind CSS."
        link={`/projects/portfolio-website`}
        tech={["Next.js", "Tailwind CSS", "React"]}
      />
      </div>
    </div>
    </section>
  );
}
