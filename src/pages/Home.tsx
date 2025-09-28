import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 mesh-gradient" />
      <div className="floating-shapes" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-6 fade-in visible">
            <div className="relative">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black gradient-text mb-6 leading-tight">
                {t('home.title')}
              </h1>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl -z-10 rounded-full" />
            </div>
            <p className="text-xl md:text-3xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              {t('home.subtitle')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in visible" style={{animationDelay: '0.3s'}}>
            <Link to="/projects" className="group">
              <button className="hero-button group">
                {t('home.viewWork')}
                <ArrowRight className="ml-9 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </Link>
            <Link to="/contact" className="group">
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-card px-10 py-6 text-lg font-semibold border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/10"
              >
                {t('home.getInTouch')}
              </Button>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 fade-in visible" style={{animationDelay: '0.6s'}}>
            <a
              href="https://github.com/saurabh-191"
              target="_blank"
              rel="noopener noreferrer"
              className="floating-element glass-card p-4 rounded-2xl group hover:bg-primary/10 border border-primary/20"
            >
              <Github className="h-7 w-7 group-hover:text-primary transition-colors duration-300" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="floating-element glass-card p-4 rounded-2xl group hover:bg-primary/10 border border-primary/20"
            >
              <Linkedin className="h-7 w-7 group-hover:text-primary transition-colors duration-300" />
            </a>
            <a
              href="mailto:saurabh@example.com"
              className="floating-element glass-card p-4 rounded-2xl group hover:bg-primary/10 border border-primary/20"
            >
              <Mail className="h-7 w-7 group-hover:text-primary transition-colors duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 fade-in visible">
            <h2 className="text-4xl md:text-6xl font-black mb-6 gradient-text">{t('home.whatIDo')}</h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              {t('home.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="project-card group">
              <div className="text-center space-y-6">
                <div className="relative mx-auto">
                  <div className="w-24 h-24 glow-effect glass-card flex items-center justify-center mx-auto rounded-3xl border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-500">
                    <span className="text-4xl">🎨</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">{t('home.uiDesign')}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t('home.uiDesignDesc')}
                </p>
              </div>
            </div>

            <div className="project-card group">
              <div className="text-center space-y-6">
                <div className="relative mx-auto">
                  <div className="w-24 h-24 glow-effect glass-card flex items-center justify-center mx-auto rounded-3xl border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-500">
                    <span className="text-4xl">💻</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">{t('home.frontendDev')}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t('home.frontendDevDesc')}
                </p>
              </div>
            </div>

            <div className="project-card group">
              <div className="text-center space-y-6">
                <div className="relative mx-auto">
                  <div className="w-24 h-24 glow-effect glass-card flex items-center justify-center mx-auto rounded-3xl border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-500">
                    <span className="text-4xl">⚡</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">{t('home.backendDev')}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t('home.backendDevDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;