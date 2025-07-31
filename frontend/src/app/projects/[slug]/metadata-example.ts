// Example: SEO metadata for projects
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // You can fetch project data here
  const project = getProjectBySlug(params.slug);
  
  return {
    title: `${project.title} | Your Name`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

// Example: Static generation for project pages
export async function generateStaticParams() {
  return [
    { slug: 'ecommerce-platform' },
    { slug: 'task-management' },
    { slug: 'weather-dashboard' },
  ];
}
