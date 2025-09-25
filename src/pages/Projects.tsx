import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 mesh-gradient" />
      <div className="floating-shapes" />
      
      <div className="max-w-8xl mx-auto space-y-20 relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 fade-in visible">
          <h1 className="text-5xl md:text-7xl font-black gradient-text">My Projects</h1>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            A collection of projects I've built, showcasing different technologies and solutions
          </p>
        </div>

        {/* Featured Projects */}
        <section className="space-y-12">
          <h2 className="text-4xl font-black text-center gradient-text">Featured Projects</h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="project-card group overflow-hidden">
                <div className="space-y-8">
                  {/* Project Image/Icon */}
                  <div className="relative h-64 glow-effect glass-card rounded-3xl flex items-center justify-center border-2 border-primary/20 group-hover:border-primary/40">
                    <span className="text-8xl">{project.image}</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-3xl font-black group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="skill-badge text-sm"
                          style={{animationDelay: `${techIndex * 0.1}s`}}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex space-x-4 pt-4">
                      <Button variant="outline" size="lg" asChild className="glass-card border-2 border-primary/30 hover:border-primary/60">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5 mr-3" />
                          Code
                        </a>
                      </Button>
                      <Button size="lg" asChild className="hero-button">
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-5 w-5 mr-3" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* More Projects */}
        <section className="space-y-12">
          <h2 className="text-4xl font-black text-center gradient-text">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div key={project.id} className="project-card group">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 glow-effect glass-card rounded-2xl flex items-center justify-center border border-primary/20 group-hover:border-primary/40">
                      <span className="text-3xl">{project.image}</span>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="skill-badge text-xs"
                        style={{animationDelay: `${techIndex * 0.1}s`}}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="skill-badge text-xs">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3 pt-2">
                    <Button variant="ghost" size="sm" asChild className="glass-card border border-primary/20 hover:border-primary/40 p-2">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild className="glass-card border border-primary/20 hover:border-primary/40 p-2">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-8 py-20">
          <div className="relative">
            <h2 className="text-4xl font-black gradient-text mb-4">Interested in Working Together?</h2>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl -z-10 rounded-full" />
          </div>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new projects and opportunities. Let's create something amazing together!
          </p>
          <Link to="/contact">
            <button className="hero-button">
              Get In Touch
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Projects;
