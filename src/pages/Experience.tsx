import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const education = [
    {
      id: 1,
      institution: 'Swami Vivekanand College of Engineering',
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science and Engineering',
      location: 'Indore, India',
      duration: '2019 - 2023',
      grade: 'CGPA: 8.3/10',
      description: [
        'Specialized in Software Engineering and Data Structures & Algorithms',
        'Completed coursework in Web Development, Database Systems, and Machine Learning',
        'Final year project on "GYM management system which solve the accounting and management problem of gym using Python stack" and "Drowsiness Detection of Driver using Machine Learning"',
      ]
    }
  ];

  const experiences = [
    {
      id: 1,
      company: 'Sofmen Technologies Pvt. Ltd.',
      position: 'Full-Stack Developer',
      location: 'Indore, India',
      duration: 'March 2023 - Present',
      type: 'Full-time',
      description: [
        'Developed and maintained scalable web applications serving 50K+ users',
        'Implemented responsive designs using React.js and modern CSS frameworks',
        'Built RESTful APIs with Node.js and integrated with MongoDB databases',
        'Collaborated with cross-functional teams to deliver high-quality products'
      ],
      technologies: ['JavaScript', 'Gitlab', 'Github', 'Git', 'Laravel', 'MySql', 'Python', 'Docker', 'PostgreSQL', ],
      current: true
    },
    // {
    //   id: 2,
    //   company: 'WebCraft Digital',
    //   position: 'Frontend Developer Intern',
    //   location: 'Mumbai, India',
    //   duration: 'Jan 2023 - Jun 2023',
    //   type: 'Internship',
    //   description: [
    //     'Assisted in developing user-friendly web interfaces using React and JavaScript',
    //     'Collaborated with senior developers to implement responsive design patterns',
    //     'Participated in code reviews and learned best practices for clean code',
    //     'Contributed to improving website performance and user experience'
    //   ],
    //   technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    //   current: false
    // },
    // {
    //   id: 3,
    //   company: 'Freelance Projects',
    //   position: 'Web Developer',
    //   location: 'Remote',
    //   duration: 'Aug 2022 - Dec 2022',
    //   type: 'Freelance',
    //   description: [
    //     'Developed custom websites for local businesses and startups',
    //     'Created responsive landing pages with modern design principles',
    //     'Implemented contact forms and basic e-commerce functionality',
    //     'Provided ongoing support and maintenance for client projects'
    //   ],
    //   technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'PHP'],
    //   current: false
    // }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Education & Experience</h1>
          <p className="text-xl text-muted-foreground">
            My academic background and professional journey in software development
          </p>
        </div>

        {/* Education Section */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Education</h2>
            <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
          </div>
          
          <div className="space-y-8">
            {education.map((edu) => (
              <div key={edu.id} className="max-w-3xl mx-auto">
                <Card className="project-card">
                  <div className="p-6 space-y-4">
                    {/* Header */}
                    <div className="space-y-2 text-center">
                      <h3 className="text-2xl font-bold">{edu.degree}</h3>
                      <p className="text-lg font-semibold text-accent">{edu.field}</p>
                      <p className="text-lg font-medium">{edu.institution}</p>
                      
                      <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {edu.grade}
                        </Badge>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <ul className="space-y-2">
                        {edu.description.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Work Experience</h2>
            <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                    exp.current 
                      ? 'bg-accent border-accent' 
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
                              <p className="text-lg font-semibold text-accent">{exp.company}</p>
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
                                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></span>
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
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-semibold text-lg">Full-Stack Development</h3>
              <p className="text-muted-foreground text-sm">
                End-to-end development from database design to user interface implementation
              </p>
            </Card>

            <Card className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="font-semibold text-lg">Team Leadership</h3>
              <p className="text-muted-foreground text-sm">
                Mentoring developers, conducting code reviews, and leading technical decisions
              </p>
            </Card>

            <Card className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
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