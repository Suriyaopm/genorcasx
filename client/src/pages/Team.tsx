import TeamMember from '@/components/TeamMember';
import GlassCard from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import engineerImage from '@assets/generated_images/Male_engineer_headshot_260d43bc.png';
import researcherImage from '@assets/generated_images/Female_AI_researcher_headshot_57e56034.png';
import scientistImage from '@assets/generated_images/Male_data_scientist_headshot_da570fbb.png';

export default function Team() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Senior AI Engineer",
      bio: "Specializes in machine learning algorithms and neural network optimization with 8+ years of experience in developing production AI systems for Fortune 500 companies.",
      image: engineerImage,
      social: {
        linkedin: "https://linkedin.com/in/alexjohnson",
        github: "https://github.com/alexjohnson",
        twitter: "https://twitter.com/alexjohnson"
      }
    },
    {
      name: "Sarah Chen",
      role: "AI Research Scientist",
      bio: "PhD in Computer Science from Stanford, focusing on natural language processing and deep learning research. Published 15+ papers in top-tier AI conferences.",
      image: researcherImage,
      social: {
        linkedin: "https://linkedin.com/in/sarahchen",
        github: "https://github.com/sarahchen"
      }
    },
    {
      name: "Michael Rodriguez",
      role: "Data Science Lead",
      bio: "Expert in data analytics, statistical modeling, and business intelligence with extensive Fortune 500 experience. Former data science lead at Google and Microsoft.",
      image: scientistImage,
      social: {
        linkedin: "https://linkedin.com/in/michaelrodriguez",
        twitter: "https://twitter.com/michaelrodriguez"
      }
    },
    {
      name: "Emily Wang",
      role: "ML Operations Engineer",
      bio: "Specializes in MLOps, model deployment, and infrastructure scaling. Led DevOps transformations for AI initiatives at multiple startups and enterprises.",
      image: engineerImage,
      social: {
        linkedin: "https://linkedin.com/in/emilywang",
        github: "https://github.com/emilywang"
      }
    },
    {
      name: "David Kim",
      role: "Product Manager",
      bio: "Product strategy expert with 6+ years experience launching AI products. Former PM at OpenAI and Anthropic, passionate about AI safety and user experience.",
      image: scientistImage,
      social: {
        linkedin: "https://linkedin.com/in/davidkim",
        twitter: "https://twitter.com/davidkim"
      }
    },
    {
      name: "Lisa Thompson",
      role: "Business Development Director",
      bio: "Strategic partnerships and enterprise sales specialist. Built relationships with 100+ enterprise clients and closed $50M+ in AI consulting contracts.",
      image: researcherImage,
      social: {
        linkedin: "https://linkedin.com/in/lisathompson"
      }
    }
  ];

  const companyStats = [
    { label: "Team Members", value: "25+" },
    { label: "Years Combined Experience", value: "150+" },
    { label: "AI Projects Delivered", value: "200+" },
    { label: "Enterprise Clients", value: "50+" }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-background via-muted/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Meet Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            World-class AI experts and engineers passionate about building the future of artificial intelligence. 
            Our diverse team combines deep technical expertise with real-world business experience.
          </p>

          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-gradient-to-br from-muted/10 via-background to-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our Culture & Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in innovation, collaboration, and making AI accessible to everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation First",
                description: "We push the boundaries of what's possible with AI, always staying at the forefront of technological advancement."
              },
              {
                title: "Collaborative Spirit",
                description: "Our diverse team works together to solve complex problems, sharing knowledge and learning from each other."
              },
              {
                title: "Ethical AI",
                description: "We're committed to developing AI responsibly, with transparency, fairness, and safety as core principles."
              }
            ].map((value, index) => (
              <GlassCard key={index} className="text-center h-full">
                <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GlassCard className="p-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Join Our Team
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for talented individuals who share our passion for AI and innovation. 
              Explore career opportunities and help us shape the future of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" data-testid="button-view-careers">
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" data-testid="button-contact-talent">
                Contact Our Talent Team
              </Button>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}