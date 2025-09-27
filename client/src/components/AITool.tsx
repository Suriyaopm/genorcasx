import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Play, Copy, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AIToolProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  inputs: Array<{
    name: string;
    type: 'text' | 'textarea' | 'number' | 'file';
    placeholder: string;
    required?: boolean;
  }>;
  category: string;
}

export default function AITool({ title, description, icon, inputs, category }: AIToolProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [inputValues, setInputValues] = useState<Record<string, string>>({});
  const [result, setResult] = useState<string>('');
  const { toast } = useToast();

  const handleInputChange = (name: string, value: string) => {
    setInputValues(prev => ({ ...prev, [name]: value }));
  };

  const handleRunTool = async () => {
    console.log(`Running ${title} with inputs:`, inputValues);
    setIsLoading(true);
    
    // TODO: Replace with actual API calls
    setTimeout(() => {
      setResult(`Mock result for ${title}:\n\n${JSON.stringify(inputValues, null, 2)}\n\nThis is a sample output demonstrating the tool functionality.`);
      setIsLoading(false);
      toast({
        title: "Tool executed successfully",
        description: `${title} has finished processing your request.`,
      });
    }, 2000);
  };

  const handleCopyResult = () => {
    navigator.clipboard.writeText(result);
    toast({
      title: "Copied to clipboard",
      description: "Result has been copied to your clipboard.",
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

  const isFormValid = inputs.filter(input => input.required).every(input => 
    inputValues[input.name] && inputValues[input.name].trim() !== ''
  );

  return (
    <Card className="h-full bg-glass-primary dark:bg-glass-dark-primary backdrop-blur-lg border-glass-border dark:border-glass-dark-border">
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              {icon}
            </div>
            <div>
              <CardTitle className="font-display" data-testid={`text-tool-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
                {title}
              </CardTitle>
              <Badge variant="outline" className="mt-1 text-xs">
                {category}
              </Badge>
            </div>
          </div>
        </div>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Input Fields */}
        <div className="space-y-4">
          {inputs.map((input) => (
            <div key={input.name} className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                {input.name.charAt(0).toUpperCase() + input.name.slice(1)}
                {input.required && <span className="text-destructive ml-1">*</span>}
              </label>
              {input.type === 'textarea' ? (
                <Textarea
                  placeholder={input.placeholder}
                  value={inputValues[input.name] || ''}
                  onChange={(e) => handleInputChange(input.name, e.target.value)}
                  className="bg-background/50 border-glass-border dark:border-glass-dark-border"
                  data-testid={`input-${input.name.toLowerCase().replace(/\s+/g, '-')}`}
                />
              ) : (
                <Input
                  type={input.type}
                  placeholder={input.placeholder}
                  value={inputValues[input.name] || ''}
                  onChange={(e) => handleInputChange(input.name, e.target.value)}
                  className="bg-background/50 border-glass-border dark:border-glass-dark-border"
                  data-testid={`input-${input.name.toLowerCase().replace(/\s+/g, '-')}`}
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
          data-testid={`button-run-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Play className="mr-2 h-4 w-4" />
              Run {title}
            </>
          )}
        </Button>

        {/* Results */}
        {result && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-foreground">Result</label>
              <div className="flex space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopyResult}
                  data-testid={`button-copy-result-${title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <Copy className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleDownloadResult}
                  data-testid={`button-download-result-${title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Textarea
              value={result}
              readOnly
              className="bg-background/50 border-glass-border dark:border-glass-dark-border font-mono text-sm min-h-[200px]"
              data-testid={`output-result-${title.toLowerCase().replace(/\s+/g, '-')}`}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}