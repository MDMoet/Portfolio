import Link from "next/link";
import SkillsBox from "./SkillsBox";
import Image from "next/image";

type ProjectProps = {
  new: boolean;
  title: string;
  description: string;
  link: string;
  tech: string[];
};

export default function ProjectShowcase({ new: isNew, title, description, tech, link }: ProjectProps) {
  return (
    <Link href={link} className="group">
    <div 
      className="group bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700"
    >
      <div className={`h-48 bg-gradient-to-br from-purple-500 to-purple-800 relative overflow-hidden`}>
        <Image 
          src="/images/projects/PortfolioWebsite.png"
          alt="Project Screenshot"
          fill
          className="object-cover"
        />
          
        <div className="absolute inset-0 ml-4 mt-2">
          {isNew && (
            <div className="text-white text-1xl font-bold opacity-50 group-hover:opacity-80 transition-opacity duration-300">
              New!
            </div>
          )}
        </div>
        <div className="absolute top-4 right-4">
          <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((skill) => (
           <SkillsBox key={skill} size="small" color="red" text={skill} />))}
        </div>
        
        <Link 
          href={link} 
          className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
        >
          View Details 
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
    </Link>
  );
}