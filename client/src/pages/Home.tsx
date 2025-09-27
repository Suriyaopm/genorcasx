import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import GlassCard from '@/components/GlassCard';
import ScrollStats from '@/components/ScrollStats';
import FeatureShowcase from '@/components/FeatureShowcase';
import { Button } from '@/components/ui/button';
import { Brain, Zap, Shield, Rocket, ArrowRight, Users, Award, TrendingUp } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

export default function Home() {
  const { theme } = useTheme();
  const services = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Development",
      description: "Custom AI solutions tailored to your business needs, from machine learning models to intelligent automation systems."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "AI Tools Suite",
      description: "Access our comprehensive toolkit including tokenization, embeddings, chunking, and RAG implementations."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "Secure, scalable AI implementations with enterprise-grade security and compliance standards."
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Rapid Deployment",
      description: "Get your AI solutions up and running quickly with our streamlined development and deployment process."
    }
  ];

  const testimonials = [
    {
      quote: "GenOrcasX transformed our data processing capabilities. Their AI tools increased our efficiency by 300%.",
      author: "Sarah Johnson",
      role: "CTO, TechFlow Inc.",
      company: "TechFlow"
    },
    {
      quote: "The RAG implementation was flawless. We saw immediate improvements in our customer support automation.",
      author: "Michael Chen",
      role: "Head of Engineering, DataSync",
      company: "DataSync"
    },
    {
      quote: "Outstanding AI consultation and development. The team's expertise in machine learning is unmatched.",
      author: "Emily Rodriguez",
      role: "CEO, InnovateCorp",
      company: "InnovateCorp"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroGeometric 
        badge="AI Innovation"
        title1="Next-Gen AI"
        title2="Solutions"
        description="Unlock the power of artificial intelligence with GenOrcasX's comprehensive suite of AI tools and enterprise solutions. Transform your business with cutting-edge technology."
        isDark={theme === 'dark'}
      />

      {/* Stats Section */}
      <ScrollStats />

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-background via-muted/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our AI Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive artificial intelligence services designed to accelerate your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <GlassCard key={index} hover className="text-center h-full">
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mx-auto">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" data-testid="button-view-all-services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <FeatureShowcase />

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-muted/10 via-background to-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  Why Choose GenOrcasX?
                </h2>
                <p className="text-xl text-muted-foreground">
                  We combine cutting-edge AI research with practical business applications to deliver solutions that drive real results.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: <Users className="h-6 w-6" />,
                    title: "Expert Team",
                    description: "PhD-level researchers and industry veterans with 10+ years experience"
                  },
                  {
                    icon: <Award className="h-6 w-6" />,
                    title: "Proven Results",
                    description: "Successfully delivered 100+ AI projects across various industries"
                  },
                  {
                    icon: <TrendingUp className="h-6 w-6" />,
                    title: "Scalable Solutions",
                    description: "Built for growth with enterprise-grade architecture and performance"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <GlassCard className="p-8">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-display font-bold text-foreground">
                  Ready to Get Started?
                </h3>
                <p className="text-muted-foreground">
                  Book a free consultation to discuss your AI needs and explore how we can help transform your business.
                </p>
                <div className="space-y-4">
                  <Button size="lg" className="w-full" data-testid="button-book-consultation">
                    Book Free Consultation
                  </Button>
                  <Button variant="outline" size="lg" className="w-full" data-testid="button-explore-tools-cta">
                    Explore AI Tools
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Trusted by leading companies worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <GlassCard key={index} className="h-full">
                <div className="space-y-4">
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-primary font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}