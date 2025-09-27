import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Zap, Shield, Cpu, Database, Code2 } from 'lucide-react';
import GlassCard from './GlassCard';

export default function FeatureShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Machine Learning",
      description: "Advanced ML algorithms powered by the latest research",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-time Processing",
      description: "Lightning-fast AI inference with sub-millisecond latency",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Scalable Infrastructure",
      description: "Auto-scaling cloud infrastructure that grows with you",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Smart Analytics",
      description: "Deep insights from your data with AI-powered analytics",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Easy Integration",
      description: "Simple APIs and SDKs for seamless integration",
      color: "from-red-500 to-pink-500"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-muted/5 via-background to-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Cutting-Edge AI Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with the latest advancements in artificial intelligence and machine learning
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlassCard hover className="h-full group">
                <div className="space-y-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color} w-fit text-white`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}