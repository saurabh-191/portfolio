import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include product management, cart functionality, and secure payments.',
      image: '🛒',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'TailwindCSS'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '📋',
      techStack: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://demo.com',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and historical weather data visualization.',
      image: '🌤️',
      techStack: ['React', 'Chart.js', 'OpenWeather API', 'CSS Grid'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://demo.com',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and TailwindCSS, featuring smooth animations and dark mode support.',
      image: '💼',
      techStack: ['React', 'TailwindCSS', 'Framer Motion', 'Vercel'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://demo.com',
      featured: false
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'A full-featured blog platform with markdown support, user authentication, comments system, and SEO optimization.',
      image: '📝',
      techStack: ['Next.js', 'MDX', 'Prisma', 'NextAuth.js'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://demo.com',
      featured: false
    },
    {
      id: 6,
      title: 'Real-time Chat App',
      description: 'A real-time messaging application with group chats, file sharing, emoji reactions, and push notifications.',
      image: '💬',
      techStack: ['React', 'Socket.io', 'Express', 'Redis'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://demo.com',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've built, showcasing different technologies and solutions
          </p>
        </div>

        {/* Featured Projects */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="project-card overflow-hidden">
                <div className="space-y-6">
                  {/* Project Image/Icon */}
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-t-xl flex items-center justify-center">
                    <span className="text-6xl">{project.image}</span>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex space-x-3 pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <Card key={project.id} className="project-card">
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{project.image}</span>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.techStack.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button variant="ghost" size="sm" asChild className="p-1">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild className="p-1">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-6 py-12">
          <h2 className="text-3xl font-bold">Interested in Working Together?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects and opportunities. Let's create something amazing together!
          </p>
          <Button size="lg" className="hero-button">
            <a href="/contact">Get In Touch</a>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Projects;
