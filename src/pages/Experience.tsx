import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'TechCorp Solutions',
      position: 'Senior Full-Stack Developer',
      location: 'San Francisco, CA',
      duration: 'Jan 2022 - Present',
      type: 'Full-time',
      description: [
        'Led development of a microservices architecture serving 100K+ daily active users',
        'Implemented CI/CD pipelines reducing deployment time by 70%',
        'Mentored 5 junior developers and conducted technical interviews',
        'Built responsive web applications using React, TypeScript, and Node.js'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'Docker', 'PostgreSQL'],
      current: true
    },
    {
      id: 2,
      company: 'StartupXYZ',
      position: 'Full-Stack Developer',
      location: 'Remote',
      duration: 'Jun 2020 - Dec 2021',
      type: 'Full-time',
      description: [
        'Developed MVP from scratch using React and Express.js',
        'Designed and implemented RESTful APIs serving mobile and web clients',
        'Optimized database queries improving response time by 50%',
        'Collaborated with design team to implement pixel-perfect UI components'
      ],
      technologies: ['React', 'Express.js', 'MongoDB', 'Socket.io', 'TailwindCSS'],
      current: false
    },
    {
      id: 3,
      company: 'Digital Agency Pro',
      position: 'Frontend Developer',
      location: 'New York, NY',
      duration: 'Sep 2019 - May 2020',
      type: 'Full-time',
      description: [
        'Built responsive websites for 20+ clients using modern web technologies',
        'Collaborated with UX/UI designers to implement interactive user interfaces',
        'Optimized website performance achieving 95+ Lighthouse scores',
        'Integrated third-party APIs and payment systems'
      ],
      technologies: ['React', 'Vue.js', 'SASS', 'Webpack', 'Figma'],
      current: false
    },
    {
      id: 4,
      company: 'FreelanceWork',
      position: 'Web Developer',
      location: 'Remote',
      duration: 'Jan 2019 - Aug 2019',
      type: 'Freelance',
      description: [
        'Developed custom WordPress themes and plugins for small businesses',
        'Created e-commerce solutions using WooCommerce and Shopify',
        'Provided ongoing maintenance and support for client websites',
        'Managed multiple projects simultaneously with tight deadlines'
      ],
      technologies: ['WordPress', 'PHP', 'JavaScript', 'MySQL', 'Shopify'],
      current: false
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Experience</h1>
          <p className="text-xl text-muted-foreground">
            My professional journey in software development
          </p>
        </div>

        {/* Timeline */}
        <section className="space-y-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                    exp.current 
                      ? 'bg-primary border-primary' 
                      : 'bg-background border-border'
                  }`}></div>
                  
                  {/* Content */}
                  <div className="ml-16">
                    <Card className="project-card">
                      <div className="p-6 space-y-4">
                        {/* Header */}
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <div>
                              <h3 className="text-xl font-bold">{exp.position}</h3>
                              <p className="text-lg font-semibold text-primary">{exp.company}</p>
                            </div>
                            {exp.current && (
                              <Badge className="bg-accent text-accent-foreground">
                                Current
                              </Badge>
                            )}
                          </div>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {exp.type}
                            </Badge>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                          <ul className="space-y-2">
                            {exp.description.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="space-y-2">
                          <p className="text-sm font-medium">Technologies Used:</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Summary */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-semibold text-lg">Full-Stack Development</h3>
              <p className="text-muted-foreground text-sm">
                End-to-end development from database design to user interface implementation
              </p>
            </Card>

            <Card className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="font-semibold text-lg">Team Leadership</h3>
              <p className="text-muted-foreground text-sm">
                Mentoring developers, conducting code reviews, and leading technical decisions
              </p>
            </Card>

            <Card className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-lg">Performance Optimization</h3>
              <p className="text-muted-foreground text-sm">
                Optimizing applications for speed, scalability, and user experience
              </p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;