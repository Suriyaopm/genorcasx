import GlassCard from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Globe, Target, ArrowRight, Zap, Heart, Lightbulb } from 'lucide-react';

export default function About() {
  const stats = [
    { label: "Years of Experience", value: "10+", icon: <Award className="h-6 w-6" /> },
    { label: "AI Projects Delivered", value: "500+", icon: <Target className="h-6 w-6" /> },
    { label: "Global Clients", value: "200+", icon: <Globe className="h-6 w-6" /> },
    { label: "Team Members", value: "50+", icon: <Users className="h-6 w-6" /> },
  ];

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI, constantly exploring new frontiers and breakthrough technologies."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Human-Centered",
      description: "Our AI solutions are designed to augment human capabilities, not replace them. We believe in technology that serves humanity."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Excellence Driven",
      description: "We maintain the highest standards in everything we do, from code quality to customer service and project delivery."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-muted/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge variant="outline" className="text-primary border-primary/20">
              About GenOrcasX
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground">
              Pioneering the Future of
              <span className="text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text"> AI Innovation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Founded in 2014, GenOrcasX has been at the forefront of artificial intelligence innovation, 
              helping businesses transform their operations with cutting-edge AI solutions and tools.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-glass-primary dark:bg-glass-dark-primary backdrop-blur-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <GlassCard key={index} className="text-center p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  GenOrcasX began as a vision to democratize artificial intelligence and make advanced 
                  AI capabilities accessible to businesses of all sizes. What started as a small team 
                  of AI researchers has grown into a global leader in AI innovation.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we're proud to serve over 200 clients worldwide, from startups to Fortune 500 
                  companies, helping them harness the power of AI to solve complex challenges and 
                  unlock new opportunities.
                </p>
              </div>
              <Button size="lg" className="group">
                Our Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <GlassCard className="p-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-display font-bold text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses worldwide with intelligent AI solutions that drive innovation, 
                  increase efficiency, and create sustainable competitive advantages in the digital age.
                </p>
                <div className="pt-4 border-t border-glass-border dark:border-glass-dark-border">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Key Achievements</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center"><div className="w-1 h-1 bg-primary rounded-full mr-3"></div>500+ AI projects delivered successfully</li>
                    <li className="flex items-center"><div className="w-1 h-1 bg-primary rounded-full mr-3"></div>99.9% client satisfaction rate</li>
                    <li className="flex items-center"><div className="w-1 h-1 bg-primary rounded-full mr-3"></div>Patents in AI optimization</li>
                    <li className="flex items-center"><div className="w-1 h-1 bg-primary rounded-full mr-3"></div>Industry leadership recognition</li>
                  </ul>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-muted/5 via-background to-primary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and shape our approach to AI innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <GlassCard key={index} className="text-center p-8 h-full hover-elevate group">
                <div className="space-y-6">
                  <div className="p-4 rounded-2xl bg-primary/10 text-primary w-fit mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GlassCard className="p-12">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join hundreds of companies already benefiting from our AI solutions. 
                Let's discuss how we can help accelerate your AI journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group">
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  Meet Our Team
                </Button>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
