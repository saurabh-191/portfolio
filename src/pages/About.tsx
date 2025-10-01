import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import VideoPlayer from '@/components/VideoPlayer';

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

        {/* Intro Video */}
        <section className="space-y-8">
          <h2 className="text-4xl font-black text-center gradient-text">Introduction Video</h2>
          <div className="project-card group">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 p-1">
              <div className="relative rounded-xl overflow-hidden bg-background/50 backdrop-blur-sm">
                <VideoPlayer
                  src="/intro-video.mp4"
                  poster="/placeholder.svg"
                />
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-4">
              Watch my introduction to learn more about my journey and passion for development
            </p>
          </div>
        </section>

        {/* Personal Story */}
        <section className="space-y-8">
          <div className="project-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-black gradient-text">My Story</h2>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    I’m a software engineer with around 3 years of experience of working on multiple projects with client and building web apps and solving real-world problems. My journey began with a Computer Science degree, and since then I’ve worked in tech firm and also worked on different projects and with different tech teams, learn how to turn ideas into working products.
                  </p>
                  <p>
                    I focus on writing clean and practical code and have integrating AI to enhance efficiency and quality of my work. Also have a exprerince of working on production level application and solving issue over the application and also have a good knowledge of database and cloud services. Also interacting with client to understand their requirement and their business logic to build project which can solve their problem.
                  </p>
                  <p>
                    When I'm not coding, I make sure to spend time with my friends and family and get outdoors to play sports. I also dedicate my leisure time to exploring new tools, frameworks, and the latest AI developments, always looking for better use cases and ways to apply them to my professional projects.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 glow-effect glass-card rounded-full flex items-center justify-center border-2 border-primary/30 group-hover:border-primary/60">
                    <span className="text-8xl">👨‍💻</span>
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl -z-10 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="space-y-12">
          <h2 className="text-4xl font-black text-center gradient-text">Skills & Technologies</h2>
          <div className="project-card">
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="skill-badge"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
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
              <p className="font-medium">Playing</p>
              <p className="text-sm text-muted-foreground">Playing Cricket in my free time</p>
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