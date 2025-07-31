"use client";

import Link from "next/link";
import Image from "next/image";
import ProjectShowcase from "./components/ProjectShowcase";
import SkillsBox from "./components/SkillsBox";

export default function Home() {
  return (
    <div className="min-h-screen">
   <section className="relative bg-gradient-to-br from-black to-gray-800 h-screen flex items-center">
  <Image
    src="/images/home.jpg"
    alt="Background"
    fill
    className="object-cover opacity-20"
    priority
  />
        <div className="relative max-w-4xl mx-auto px-4 text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200 mb-6">
            Hey, I'm <span className="text-purple-600">Maicol Moet</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Software Developer
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            I create all kinds of applications for web, mobile, and desktop. Most of all, I enjoy
            improving and learning new things.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/projects" 
              className="border-2 border-purple-600 text-gray-200 px-8 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-colors font-medium"
            >
              See My Work
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-purple-600 text-gray-200 px-8 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-colors font-medium"
            >
              Contact Me
            </Link>
          </div>
        </div>
  <Image
    src="/images/icons/DownArrow.png"
    alt="Arrow Down"
      className="justify-center mx-auto absolute bottom-10 left-0 right-0 opacity-20 brightness-100 invert hover:opacity-40 hover:cursor-pointer mb-10"
  width={64}
  height={64}
  priority
   onClick={() => {
      const projectsSection = document.getElementById('projects');
  if (projectsSection) {
    const offsetTop = projectsSection.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
    }}
 />
      </section>
<section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20" id="projects">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-4 text-white">Featured Projects</h2>
    <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
      Here are some of the projects I am most proud of, showing my skills in various technologies and frameworks.
    </p>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectShowcase 
        new={true}
        title="Portfolio Website"
        description="A personal portfolio website built with Next.js and Tailwind CSS."
        link="/projects"
        tech={["Next.js", "Tailwind CSS", "React"]}
      />
      <ProjectShowcase 
        new={false}
        title="Space Shooters"
        description="A very simple game, inspired by Space Invaders. Made using WPF in Visual Studio."
        link="/projects"
        tech={["WPF", "C#", ".NET", ".NET Core", "Game Development"]}
      />
      <ProjectShowcase 
        new={false}
        title="Facial Recognition System"
        description="A part of a larger 2D mobile game. Made using OpenCVForUnity in Unity."
        link="/projects"
        tech={["Unity", "C#", "Game Development"]}
      />
    </div>
    
    <div className="text-center mt-12">
      <Link 
        href="/projects"
        className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        View All Projects
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  </div>
</section>
      <section className="bg-gradient-to-br from-black to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <div className="flex flex-wrap justify-center items-center text-center gap-2">
                 {["React", "Next.js", "TypeScript", "Tailwind CSS", "CSS3", "HTML5", "XAML", "JavaScript"].map((skill) => (
                 <SkillsBox key={skill} size="small" color="red" text={skill} />))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <div className="flex flex-wrap justify-center items-center text-center gap-2">
                  {["C#", "Python", "PostgreSQL", "PHP", "MySQL", "GDScript", "Luau"].map((skill) => (
                        <SkillsBox key={skill} size="small" color="blue" text={skill} />
                 ))}
              </div>
            </div>
             <div>
              <h3 className="text-xl font-semibold mb-4">Frameworks</h3>
              <div className="flex flex-wrap justify-center items-center text-center gap-2">
                      {[".NET (7,8,9)", ".NET Core", "Laravel", "Vue.js", "React", "Next.js"].map((skill) => (
                      <SkillsBox key={skill} size="small" color="green" text={skill} />))}
             
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Tools</h3>
              <div className="flex flex-wrap justify-center items-center text-center gap-2">
                       {["Git", "VS Code", "Docker", "Figma", "Ubuntu Server", "Godot", "Unity", "Roblox Studio"].map((skill) => (
                     <SkillsBox key={skill} size="small" color="purple" text={skill} />))}
             
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
