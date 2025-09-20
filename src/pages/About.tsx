import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python', 'Next.js', 'TailwindCSS',
    'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'Figma'
  ];

  const achievements = [
    {
      title: 'Certified AWS Solutions Architect',
      year: '2023',
      description: 'Professional certification in cloud architecture and deployment'
    },
    {
      title: 'Open Source Contributor',
      year: '2022-Present',
      description: 'Active contributor to popular React and TypeScript libraries'
    },
    {
      title: 'Tech Speaker',
      year: '2023',
      description: 'Presented at 3 major tech conferences on modern web development'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
          <p className="text-xl text-muted-foreground">
            Get to know the person behind the code
          </p>
        </div>

        {/* Personal Story */}
        <section className="space-y-8">
          <Card className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">My Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a passionate full-stack developer with over 5 years of experience 
                    creating digital solutions that make a difference. My journey started 
                    with a Computer Science degree and evolved through various roles in 
                    startups and tech companies.
                  </p>
                  <p>
                    I believe in writing clean, maintainable code and creating user 
                    experiences that are both beautiful and functional. When I'm not 
                    coding, you'll find me exploring new technologies, contributing to 
                    open source, or mentoring aspiring developers.
                  </p>
                  <p>
                    My goal is to bridge the gap between design and development, 
                    creating products that users love and businesses value.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Skills */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Skills & Technologies</h2>
          <Card className="p-8">
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium hover:bg-muted transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </section>

        {/* Achievements */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="project-card text-center">
                <div className="space-y-4">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🏆</span>
                </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{achievement.title}</h3>
                    <p className="text-muted-foreground font-medium">{achievement.year}</p>
                    <p className="text-muted-foreground text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Personal Touch */}
        <section className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Beyond Coding</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <span className="text-4xl">🎸</span>
              <p className="font-medium">Music</p>
              <p className="text-sm text-muted-foreground">Playing guitar in my free time</p>
            </div>
            <div className="space-y-2">
              <span className="text-4xl">🏃‍♂️</span>
              <p className="font-medium">Running</p>
              <p className="text-sm text-muted-foreground">Marathon runner and fitness enthusiast</p>
            </div>
            <div className="space-y-2">
              <span className="text-4xl">📚</span>
              <p className="font-medium">Learning</p>
              <p className="text-sm text-muted-foreground">Always exploring new technologies</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;