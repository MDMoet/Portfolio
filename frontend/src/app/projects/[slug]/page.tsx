import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const projects = {
  "portfolio-website": {
    title: "Portfolio Website",
    description: "A full-stack e-commerce solution built with Next.js and Python",
    fullDescription: `This project is a comprehensive e-commerce platform that handles everything from product catalog management to payment processing. Built with modern technologies and following best practices for scalability and security.`,
    technologies: ["Next.js", "Python", "PostgreSQL", "Stripe", "Docker"],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and checkout process",
      "Payment integration with Stripe",
      "Admin dashboard for inventory management",
      "Order tracking and management"
    ],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://your-ecommerce-demo.com",
    image: "/project1.jpg"
  },
  "task-management": {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    fullDescription: `A real-time collaborative task management application that helps teams organize and track their work efficiently. Features include project boards, real-time updates, and team collaboration tools.`,
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    features: [
      "Real-time collaboration with Socket.io",
      "Drag-and-drop task management",
      "Project boards and task categorization",
      "Team member invitations and roles",
      "Deadline tracking and notifications",
      "File attachments and comments"
    ],
    githubUrl: "https://github.com/yourusername/task-management",
    liveUrl: "https://your-task-app.com",
    image: "/project2.jpg"
  },
  "weather-dashboard": {
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with location-based forecasts",
    fullDescription: `A beautiful and responsive weather dashboard that provides detailed weather information and forecasts. Features location-based weather data, interactive charts, and a clean, intuitive interface.`,
    technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    features: [
      "Current weather conditions",
      "5-day weather forecast",
      "Location-based weather search",
      "Interactive weather charts",
      "Responsive design for all devices",
      "Weather alerts and notifications"
    ],
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://your-weather-app.com",
    image: "/project3.jpg"
  }
};

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects];
  
  if (!project) {
    notFound();
  }
  
  return (
       <div className="min-h-screen">
    <section className="relative bg-gradient-to-br from-black min-h-screen to-gray-800 py-5">
    <div className="max-w-4xl mx-auto py-20 px-4">
      <Link href="/projects" className="text-purple-600 hover:text-purple-800 mb-8 inline-block">
        ← Back to Projects
      </Link>
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-200 mb-4">{project.title}</h1>
        <p className="text-xl text-gray-400">{project.description}</p>
      </div>
      
      <div className="h-64 bg-gray-200 rounded-lg mb-8 flex items-center justify-center">
        <span className="text-gray-500">Project Screenshot</span>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
          <p className="text-gray-400 mb-6">{project.fullDescription}</p>
          
          <div className="flex space-x-4">
            <div className="flex items-center text-center">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-white px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
              >
                <Image
                  src="/images/logos/GitHub.png"
                  alt="GitHub"
                  width={64}
                  height={64}
                />
              </a>
            </div>
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Live Demo
            </a>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md">
                {tech}
              </span>
            ))}
          </div>
          
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </section>
    </div>
  );
}
