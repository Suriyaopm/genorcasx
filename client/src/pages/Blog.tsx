import { useState } from 'react';
import BlogCard from '@/components/BlogCard';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import aiImage from '@assets/generated_images/AI_blog_featured_image_68fe2b91.png';
import marketingImage from '@assets/generated_images/Marketing_blog_featured_image_88a4b838.png';
import mvpImage from '@assets/generated_images/MVP_blog_featured_image_73ac93ec.png';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      title: "The Future of Artificial Intelligence in Enterprise",
      excerpt: "Explore how AI is transforming business operations across industries. From automated decision-making to predictive analytics, discover the key trends that will shape the future of enterprise technology and how your organization can prepare for the AI revolution.",
      category: "AI",
      readTime: "8 min read",
      publishDate: "Dec 15, 2024",
      image: aiImage,
      slug: "future-ai-enterprise"
    },
    {
      title: "Building Your First MVP: A Complete Guide",
      excerpt: "Learn the essential steps to build and launch a minimum viable product that resonates with your target audience. We cover everything from ideation and validation to development and launch strategies that drive sustainable growth.",
      category: "MVP",
      readTime: "12 min read",
      publishDate: "Dec 10, 2024",
      image: mvpImage,
      slug: "building-first-mvp"
    },
    {
      title: "Digital Marketing Strategies for Tech Startups",
      excerpt: "Discover proven marketing strategies that help tech startups scale efficiently and build sustainable customer acquisition channels. Learn from successful case studies and avoid common pitfalls in digital marketing.",
      category: "Marketing",
      readTime: "6 min read",
      publishDate: "Dec 5, 2024",
      image: marketingImage,
      slug: "digital-marketing-tech-startups"
    },
    {
      title: "Machine Learning Model Deployment Best Practices",
      excerpt: "A comprehensive guide to deploying machine learning models in production environments. Cover containerization, monitoring, versioning, and scaling strategies for reliable AI applications.",
      category: "AI",
      readTime: "15 min read",
      publishDate: "Nov 28, 2024",
      image: aiImage,
      slug: "ml-model-deployment"
    },
    {
      title: "Customer Validation Techniques for Product Managers",
      excerpt: "Master the art of customer validation to build products people actually want. Learn interview techniques, survey design, and validation frameworks used by successful product teams.",
      category: "MVP",
      readTime: "10 min read",
      publishDate: "Nov 20, 2024",
      image: mvpImage,
      slug: "customer-validation-techniques"
    },
    {
      title: "Growth Hacking Tactics That Actually Work",
      excerpt: "Cut through the noise and discover growth hacking tactics that deliver real results. Based on data from 100+ startups, learn what works and what doesn't in modern growth marketing.",
      category: "Marketing",
      readTime: "9 min read",
      publishDate: "Nov 15, 2024",
      image: marketingImage,
      slug: "growth-hacking-tactics"
    }
  ];

  const categories = ['All', 'AI', 'MVP', 'Marketing'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-background via-muted/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Our Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, tutorials, and thought leadership on AI, product development, and digital transformation
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between max-w-4xl mx-auto">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-glass-primary dark:bg-glass-dark-primary backdrop-blur-lg border-glass-border dark:border-glass-dark-border"
                data-testid="input-search-blog"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-glass-primary dark:bg-glass-dark-primary backdrop-blur-lg border border-glass-border dark:border-glass-dark-border text-foreground hover-elevate'
                  }`}
                  data-testid={`filter-category-${category.toLowerCase()}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No articles found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-br from-muted/10 via-background to-muted/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get the latest insights on AI, product development, and digital transformation delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-glass-primary dark:bg-glass-dark-primary backdrop-blur-lg border-glass-border dark:border-glass-dark-border"
              data-testid="input-newsletter-email"
            />
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover-elevate transition-all duration-200 whitespace-nowrap" data-testid="button-subscribe-newsletter">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}