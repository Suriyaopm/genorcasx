import AITool from '@/components/AITool';
import { Brain, Scissors, MessageSquare, Database, BarChart3, Zap } from 'lucide-react';

export default function Tools() {
  const aiTools = [
    {
      title: "Tokenization Tool",
      description: "Break down text into individual tokens for natural language processing tasks. Supports multiple languages and tokenization strategies.",
      icon: <Scissors className="h-5 w-5" />,
      category: "NLP",
      inputs: [
        { name: "text", type: "textarea" as const, placeholder: "Enter text to tokenize...", required: true },
        { name: "language", type: "text" as const, placeholder: "Language (e.g., English, Spanish)", required: false },
        { name: "strategy", type: "text" as const, placeholder: "Tokenization strategy (optional)", required: false }
      ]
    },
    {
      title: "Chunking Tool",
      description: "Split large text documents into smaller, manageable chunks with customizable size and overlap for better processing.",
      icon: <Database className="h-5 w-5" />,
      category: "Text Processing",
      inputs: [
        { name: "text", type: "textarea" as const, placeholder: "Enter text to chunk...", required: true },
        { name: "chunk_size", type: "number" as const, placeholder: "Chunk size (e.g., 1000)", required: true },
        { name: "overlap", type: "number" as const, placeholder: "Overlap size (e.g., 200)", required: false }
      ]
    },
    {
      title: "AI Assistant",
      description: "Chat with our AI assistant powered by Groq's advanced language models. Supports various conversation contexts and use cases.",
      icon: <MessageSquare className="h-5 w-5" />,
      category: "Chat",
      inputs: [
        { name: "groq_api_key", type: "text" as const, placeholder: "Your Groq API key...", required: true },
        { name: "message", type: "textarea" as const, placeholder: "Ask me anything...", required: true },
        { name: "model", type: "text" as const, placeholder: "Model name (optional)", required: false }
      ]
    },
    {
      title: "RAG Tool",
      description: "Retrieval-Augmented Generation for question answering over your documents. Upload files and get intelligent responses.",
      icon: <Brain className="h-5 w-5" />,
      category: "RAG",
      inputs: [
        { name: "groq_api_key", type: "text" as const, placeholder: "Your Groq API key...", required: true },
        { name: "openai_embed_key", type: "text" as const, placeholder: "OpenAI Embedding API key...", required: true },
        { name: "file", type: "file" as const, placeholder: "Upload document...", required: true },
        { name: "query", type: "textarea" as const, placeholder: "Ask a question about your document...", required: true }
      ]
    },
    {
      title: "Evaluation Tool",
      description: "Evaluate and compare AI model responses with comprehensive metrics including accuracy, relevance, and coherence scores.",
      icon: <BarChart3 className="h-5 w-5" />,
      category: "Evaluation",
      inputs: [
        { name: "model_responses", type: "textarea" as const, placeholder: "Enter model responses to evaluate...", required: true },
        { name: "ground_truth", type: "textarea" as const, placeholder: "Expected/reference responses (optional)", required: false },
        { name: "metrics", type: "text" as const, placeholder: "Evaluation metrics (e.g., bleu, rouge)", required: false }
      ]
    },
    {
      title: "Embedding Tool",
      description: "Convert text into high-dimensional vector embeddings for semantic analysis, similarity search, and clustering tasks.",
      icon: <Zap className="h-5 w-5" />,
      category: "Embeddings",
      inputs: [
        { name: "text", type: "textarea" as const, placeholder: "Text to embed...", required: true },
        { name: "model", type: "text" as const, placeholder: "Embedding model (e.g., text-embedding-ada-002)", required: false },
        { name: "dimensions", type: "number" as const, placeholder: "Output dimensions (optional)", required: false }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-background via-muted/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            AI Tools Suite
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Powerful AI tools designed to accelerate your development process. From tokenization to embeddings, 
            our comprehensive toolkit has everything you need for modern AI applications.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {['All', 'NLP', 'Chat', 'RAG', 'Evaluation', 'Embeddings', 'Text Processing'].map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-glass-primary dark:bg-glass-dark-primary backdrop-blur-lg border border-glass-border dark:border-glass-dark-border text-sm font-medium text-foreground hover-elevate transition-all duration-200"
                data-testid={`filter-${category.toLowerCase()}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {aiTools.map((tool, index) => (
              <AITool key={index} {...tool} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-muted/10 via-background to-muted/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            Need Custom AI Solutions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our tools are just the beginning. Get in touch to discuss custom AI development for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover-elevate transition-all duration-200" data-testid="button-contact-sales">
              Contact Sales
            </button>
            <button className="px-8 py-3 bg-glass-primary dark:bg-glass-dark-primary backdrop-blur-lg border border-glass-border dark:border-glass-dark-border rounded-lg font-medium text-foreground hover-elevate transition-all duration-200" data-testid="button-view-documentation">
              View Documentation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}