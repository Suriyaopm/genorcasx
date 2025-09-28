import SingleToolInterface from '@/components/SingleToolInterface';
import { Sparkles } from 'lucide-react';

export default function EmbeddingTool() {
  return (
    <SingleToolInterface
      title="Embedding Tool"
      description="Generate high-dimensional vector embeddings for semantic analysis, similarity search, and advanced AI applications."
      icon={<Sparkles className="h-8 w-8" />}
      category="Embeddings"
      inputs={[
        { 
          name: "text", 
          type: "textarea", 
          placeholder: "Text to embed...", 
          required: true,
          description: "Text content to convert into vector embeddings"
        },
        { 
          name: "model", 
          type: "text", 
          placeholder: "text-embedding-3-small", 
          required: false,
          description: "Embedding model to use (OpenAI format)"
        },
        { 
          name: "dimensions", 
          type: "number", 
          placeholder: "1536", 
          required: false,
          description: "Number of dimensions for the output vector"
        }
      ]}
      features={[
        "High-dimensional vector generation for semantic analysis",
        "Configurable output dimensions for different use cases",
        "Vector magnitude analysis and statistics",
        "Semantic representation suitable for similarity search",
        "Clustering-ready output format",
        "Min/max value analysis for normalization",
        "Compatible with vector databases",
        "Demo mode with realistic sample vectors"
      ]}
      examples={[
        {
          title: "Semantic Search",
          description: "Create embeddings for documents to enable semantic search and similarity matching."
        },
        {
          title: "Content Clustering",
          description: "Generate vectors for content classification and automated categorization systems."
        },
        {
          title: "Recommendation Systems",
          description: "Build recommendation engines by comparing content embeddings for similarity."
        }
      ]}
    />
  );
}
