import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Play, Copy, Download, Loader2, Info, Zap, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import LoadingSpinner from '@/components/LoadingSpinner';

interface ToolInput {
  name: string;
  type: 'text' | 'textarea' | 'number' | 'file';
  placeholder: string;
  required?: boolean;
  description?: string;
}

interface SingleToolInterfaceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  inputs: ToolInput[];
  features: string[];
  examples: Array<{ title: string; description: string; }>;
}

export default function SingleToolInterface({ 
  title, 
  description, 
  icon, 
  category, 
  inputs, 
  features,
  examples
}: SingleToolInterfaceProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [inputValues, setInputValues] = useState<Record<string, string | File>>({});
  const [result, setResult] = useState<string>('');
  const [showExamples, setShowExamples] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (name: string, value: string | File) => {
    setInputValues(prev => ({ ...prev, [name]: value }));
  };

  const handleRunTool = async () => {
    console.log(`Running ${title} with inputs:`, inputValues);
    setIsLoading(true);
    
    try {
      let response;
      let endpoint = '';
      let formData;
      
      // Determine API endpoint and prepare data based on tool type
      switch (title) {
        case "Tokenization Tool":
          endpoint = '/api/tools/tokenize';
          response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              text: inputValues.text,
              language: inputValues.language || 'english',
              strategy: inputValues.strategy || 'word'
            })
          });
          break;
          
        case "Chunking Tool":
          endpoint = '/api/tools/chunk';
          response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              text: inputValues.text,
              chunk_size: parseInt(inputValues.chunk_size as string) || 1000,
              overlap: parseInt(inputValues.overlap as string) || 0
            })
          });
          break;
          
        case "AI Assistant":
          endpoint = '/api/tools/chat';
          response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              groq_api_key: inputValues.groq_api_key,
              message: inputValues.message,
              model: inputValues.model || 'llama-3.1-8b-instant'
            })
          });
          break;
          
        case "Embedding Tool":
          endpoint = '/api/tools/embed';
          response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              text: inputValues.text,
              model: inputValues.model || 'text-embedding-3-small',
              dimensions: inputValues.dimensions ? parseInt(inputValues.dimensions as string) : undefined
            })
          });
          break;
          
        case "Evaluation Tool":
          endpoint = '/api/tools/evaluate';
          response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              model_responses: inputValues.model_responses,
              ground_truth: inputValues.ground_truth,
              metrics: inputValues.metrics || 'basic'
            })
          });
          break;
          
        case "RAG Tool":
          endpoint = '/api/tools/rag';
          formData = new FormData();
          formData.append('groq_api_key', inputValues.groq_api_key as string);
          formData.append('query', inputValues.query as string);
          if (inputValues.openai_embed_key) {
            formData.append('openai_embed_key', inputValues.openai_embed_key as string);
          }
          if (inputValues.file && inputValues.file instanceof File) {
            formData.append('file', inputValues.file);
          }
          
          response = await fetch(endpoint, {
            method: 'POST',
            body: formData
          });
          break;
          
        default:
          throw new Error(`Unknown tool: ${title}`);
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.success) {
        const formattedResult = JSON.stringify(data.result, null, 2);
        setResult(formattedResult);
        
        toast({
          title: "Success!",
          description: `${title} completed successfully.`,
        });
      } else {
        throw new Error(data.error || 'Unknown error occurred');
      }
      
    } catch (error) {
      console.error('Tool execution error:', error);
      setResult(`Error: ${(error as Error).message}\n\nPlease check your inputs and try again.`);
      
      toast({
        title: "Error",
        description: (error as Error).message || 'Failed to execute tool',
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyResult = () => {
    navigator.clipboard.writeText(result);
    toast({
      title: "Copied!",
      description: "Result copied to clipboard.",
    });
  };

  const handleDownloadResult = () => {
    const blob = new Blob([result], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.toLowerCase().replace(/\s+/g, '-')}-result.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const isFormValid = inputs.filter(input => input.required).every(input => {
    const value = inputValues[input.name];
    if (input.type === 'file') {
      return value instanceof File;
    }
    return value && typeof value === 'string' && value.trim() !== '';
  });

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Header */}
      <section className="py-8 bg-gradient-to-br from-background via-muted/5 to-background border-b border-glass-border dark:border-glass-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <Link href="/tools">
              <Button variant="ghost" size="sm" className="hover:bg-glass-secondary">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Tools
              </Button>
            </Link>
            <div className="h-4 border-l border-glass-border dark:border-glass-dark-border" />
            <Badge variant="outline">{category}</Badge>
          </div>
          
          <div className="flex items-start space-x-6">
            <div className="p-4 rounded-2xl bg-primary/10 text-primary">
              {icon}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
                {title}
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                {description}
              </p>
              <div className="flex flex-wrap gap-2">
                {features.slice(0, 4).map((feature, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interface */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Tool Interface */}
            <div className="lg:col-span-2">
              <Card className="bg-glass-primary dark:bg-glass-dark-primary backdrop-blur-lg border-glass-border dark:border-glass-dark-border relative">
                {/* Loading Overlay */}
                {isLoading && (
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-lg flex items-center justify-center z-50">
                    <LoadingSpinner size="lg" text="Processing your request..." />
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-primary" />
                    Tool Interface
                  </CardTitle>
                  <CardDescription>
                    Configure your inputs and run the tool
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Input Fields */}
                  <div className="space-y-4">
                    {inputs.map((input) => (
                      <div key={input.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-foreground">
                            {input.name.charAt(0).toUpperCase() + input.name.slice(1).replace(/_/g, ' ')}
                            {input.required && <span className="text-destructive ml-1">*</span>}
                          </label>
                          {input.description && (
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Info className="h-3 w-3 mr-1" />
                              {input.description}
                            </div>
                          )}
                        </div>
                        {input.type === 'textarea' ? (
                          <Textarea
                            placeholder={input.placeholder}
                            value={inputValues[input.name] as string || ''}
                            onChange={(e) => handleInputChange(input.name, e.target.value)}
                            className="bg-background/50 border-glass-border dark:border-glass-dark-border min-h-[100px]"
                            rows={4}
                          />
                        ) : input.type === 'file' ? (
                          <Input
                            type="file"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                handleInputChange(input.name, file);
                              }
                            }}
                            className="bg-background/50 border-glass-border dark:border-glass-dark-border"
                            accept=".txt,.pdf,.doc,.docx,.md"
                          />
                        ) : (
                          <Input
                            type={input.type}
                            placeholder={input.placeholder}
                            value={inputValues[input.name] as string || ''}
                            onChange={(e) => handleInputChange(input.name, e.target.value)}
                            className="bg-background/50 border-glass-border dark:border-glass-dark-border"
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Run Button */}
                  <Button
                    onClick={handleRunTool}
                    disabled={!isFormValid || isLoading}
                    className="w-full"
                    size="lg"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 h-5 w-5" />
                        Run {title}
                      </>
                    )}
                  </Button>

                  {/* Results */}
                  {result && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-foreground">Results</label>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm" onClick={handleCopyResult}>
                            <Copy className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={handleDownloadResult}>
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <Textarea
                        value={result}
                        readOnly
                        className="bg-background/50 border-glass-border dark:border-glass-dark-border font-mono text-sm min-h-[300px]"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Features */}
              <Card className="bg-glass-primary dark:bg-glass-dark-primary backdrop-blur-lg border-glass-border dark:border-glass-dark-border">
                <CardHeader>
                  <CardTitle className="text-lg">Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Examples */}
              <Card className="bg-glass-primary dark:bg-glass-dark-primary backdrop-blur-lg border-glass-border dark:border-glass-dark-border">
                <CardHeader>
                  <CardTitle className="text-lg">Examples</CardTitle>
                  <CardDescription>Common use cases for this tool</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {examples.map((example, index) => (
                      <div key={index} className="p-3 rounded-lg bg-background/50 border border-glass-border dark:border-glass-dark-border">
                        <h4 className="text-sm font-semibold text-foreground mb-1">{example.title}</h4>
                        <p className="text-xs text-muted-foreground">{example.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
