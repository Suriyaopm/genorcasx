import SingleToolInterface from '@/components/SingleToolInterface';
import { Scissors } from 'lucide-react';

export default function TokenizationTool() {
  return (
    <SingleToolInterface
      title="Tokenization Tool"
      description="Break down text into individual tokens for natural language processing tasks. Advanced tokenization with multiple strategies and language support."
      icon={<Scissors className="h-8 w-8" />}
      category="NLP"
      inputs={[
        { 
          name: "text", 
          type: "textarea", 
          placeholder: "Enter text to tokenize...", 
          required: true,
          description: "The text you want to break down into tokens"
        },
        { 
          name: "language", 
          type: "text", 
          placeholder: "english", 
          required: false,
          description: "Language for tokenization optimization"
        },
        { 
          name: "strategy", 
          type: "text", 
          placeholder: "word", 
          required: false,
          description: "Tokenization strategy: word, sentence, or aggressive"
        }
      ]}
      features={[
        "Multi-language support for accurate tokenization",
        "Word-level tokenization for standard NLP tasks",
        "Sentence-level tokenization for text segmentation",
        "Aggressive tokenization for advanced preprocessing",
        "Detailed token statistics and analytics",
        "Character count and word count analysis",
        "Unique token identification",
        "Average token length calculation"
      ]}
      examples={[
        {
          title: "Text Analysis",
          description: "Analyze blog posts, articles, or documents for content structure and word usage patterns."
        },
        {
          title: "NLP Preprocessing", 
          description: "Prepare text data for machine learning models by converting raw text into structured tokens."
        },
        {
          title: "Content Research",
          description: "Study vocabulary usage and text complexity in different types of content."
        }
      ]}
    />
  );
}
