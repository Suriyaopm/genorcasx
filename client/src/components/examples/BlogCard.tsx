import BlogCard from '../BlogCard';
import aiImage from '@assets/generated_images/AI_blog_featured_image_68fe2b91.png';
import marketingImage from '@assets/generated_images/Marketing_blog_featured_image_88a4b838.png';
import mvpImage from '@assets/generated_images/MVP_blog_featured_image_73ac93ec.png';

export default function BlogCardExample() {
  const mockBlogs = [
    {
      title: "The Future of Artificial Intelligence in Enterprise",
      excerpt: "Explore how AI is transforming business operations and discover the key trends that will shape the future of enterprise technology.",
      category: "AI",
      readTime: "8 min read",
      publishDate: "Dec 15, 2024",
      image: aiImage,
      slug: "future-ai-enterprise"
    },
    {
      title: "Building Your First MVP: A Complete Guide",
      excerpt: "Learn the essential steps to build and launch a minimum viable product that resonates with your target audience and drives growth.",
      category: "MVP",
      readTime: "12 min read",
      publishDate: "Dec 10, 2024",
      image: mvpImage,
      slug: "building-first-mvp"
    },
    {
      title: "Digital Marketing Strategies for Tech Startups",
      excerpt: "Discover proven marketing strategies that help tech startups scale efficiently and build sustainable customer acquisition channels.",
      category: "Marketing",
      readTime: "6 min read",
      publishDate: "Dec 5, 2024",
      image: marketingImage,
      slug: "digital-marketing-tech-startups"
    }
  ];

  return (
    <div className="p-8 bg-gradient-to-br from-background to-muted/20 min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockBlogs.map((blog) => (
          <BlogCard key={blog.slug} {...blog} />
        ))}
      </div>
    </div>
  );
}