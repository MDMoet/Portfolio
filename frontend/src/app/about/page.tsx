"use client";

import Link from "next/link";
import SkillsBox from "../components/SkillsBox";

export default function About() {
  return (
    <div className="min-h-screen">
    <section className="relative bg-gradient-to-br from-black to-gray-800 py-20 min-h-screen">
  <div className="relative max-w-6xl mx-auto px-4">
    <div className="text-center mb-8 lg:mb-16">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200 mb-4 lg:mb-6">
        About <span className="text-purple-600">Me</span>
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-4 lg:mb-8 max-w-3xl mx-auto">
        A developer whos goal is to create, improve and learn.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start">
      {/* Left Column */}
      <div className="bg-gray-800 rounded-xl h-full p-4 lg:p-8 border border-gray-700 hover:border-purple-600 transition-all duration-300 hover:shadow-xl hover:shadow-purple-600/20 h-auto">
        <h2 className="text-xl lg:text-3xl font-bold text-white mb-3 lg:mb-6">
          Who <span className="text-purple-600">I</span> Am
        </h2>
        <p className="text-gray-300 mb-3 lg:mb-6 leading-relaxed text-sm lg:text-base">
          I'm <span className="text-purple-400 font-semibold">Maicol Moet</span>, a software developer with expertise in 
          desktop, mobile, game and web development. I love creating powerful, functional, secure, and performance friendly
          applications. Applications that can entertain, solve problems, or provide valuable support for personal and business needs.
        </p>
        <p className="text-gray-300 mb-3 lg:mb-6 leading-relaxed text-sm lg:text-base">
          Whenever I'm not coding, you'll see me work on various projects and hobbies, from hosting game servers, websites, and applications,
          to designing UI/UX for my projects. Alongside that I also enjoy building and refurbishing computers.
        </p>
        <div className="flex flex-wrap gap-2 lg:gap-3">
         <SkillsBox color="red" text="Problem Solver" size="medium" />
         <SkillsBox color="green" text="Creative Thinking" size="medium" />
         <SkillsBox color="blue" text="Fast Learner" size="medium" />
        </div>
      </div>
      {/* Right Column */}
      <div className="bg-gray-800 rounded-xl h-full p-4 lg:p-8 border border-gray-700 hover:border-purple-600 transition-all duration-300 hover:shadow-xl hover:shadow-purple-600/20 h-auto">
        <h2 className="text-xl lg:text-3xl font-bold text-white mb-3 lg:mb-6">
         <span className="text-purple-600">My</span> Approach
        </h2>
        <div className="space-y-2 lg:space-y-4">
          <div className="bg-gradient-to-b from-red-500 to-red-800 pl-1">
            <div className="bg-gray-800 p-2 lg:p-3">
              <h3 className="text-base lg:text-xl font-semibold text-white mb-1 lg:mb-2">User Focused Design</h3>
              <p className="text-gray-300 text-xs lg:text-sm">
                My projects start with understanding what needs there are. Based on those needs, I create what is asked of me.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-b from-blue-500 to-blue-800 pl-1">
            <div className="bg-gray-800 p-2 lg:p-3">
              <h3 className="text-base lg:text-xl font-semibold text-white mb-1 lg:mb-2">Secure, Efficient & Scalable Code</h3>
              <p className="text-gray-300 text-xs lg:text-sm">
                My focus is on security and performance, ensuring my code is efficient and scalable. Using best practices and writing documentation.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-b from-green-500 to-green-800 pl-1">
            <div className="bg-gray-800 p-2 lg:p-3">
              <h3 className="text-base lg:text-xl font-semibold text-white mb-1 lg:mb-2">Continuous Learning</h3>
              <p className="text-gray-300 text-xs lg:text-sm">
                Technology evolves rapidly, and I stay current with the latest tools and methodologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-all duration-300 group hover:shadow-xl hover:shadow-red-500/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Frontend</h3>
                <p className="text-gray-400 text-sm">User Interface & Experience</p>
              </div>
              <div className="flex flex-wrap justify-center items-center text-center gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind", "CSS3", "HTML5", "XAML", "JavaScript"].map((skill) => (
                  <SkillsBox key={skill} size="small" color="red" text={skill} />
                ))}
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 group hover:shadow-xl hover:shadow-green-500/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Backend</h3>
                <p className="text-gray-400 text-sm">Server, Database & Application Logic</p>
              </div>
              <div className="flex flex-wrap justify-center items-center text-center gap-2">
                {["C#", "Python", "PostgreSQL", "PHP", "MySQL", "GDScript", "Luau"].map((skill) => (
                  <SkillsBox key={skill} size="small" color="green" text={skill} />
                ))}
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 group hover:shadow-xl hover:shadow-blue-500/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Frameworks</h3>
                <p className="text-gray-400 text-sm">Development Foundations</p>
              </div>
              <div className="flex flex-wrap justify-center items-center text-center gap-2">
                {[".NET (7,8,9)", ".NET Core", "Laravel", "Vue.js", "React", "Next.js"].map((skill) => (
                  <SkillsBox key={skill} size="small" color="blue" text={skill} />
                ))}
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 group hover:shadow-xl hover:shadow-purple-500/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">⌨️</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Tools</h3>
                <p className="text-gray-400 text-sm">Development Environments</p>
              </div>
              <div className="flex flex-wrap justify-center items-center text-center gap-2">
                {["Git", "VS Code", "Docker", "Figma", "Ubuntu Server", "Godot", "Unity", "Roblox Studio"].map((skill) => (
                  <SkillsBox key={skill} size="small" color="purple" text={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-black to-gray-800 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let's Develop Something <span className="text-purple-600">Together.</span> 
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Do you have an idea or an already existing project? Tell me all about it and let's see what we can do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/projects" 
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View My Work
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-purple-600 text-gray-200 px-8 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-colors font-medium"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
