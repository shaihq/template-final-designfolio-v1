import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Template</h1>
          <p className="text-muted-foreground">Select a template to get started with your portfolio</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Link to="/minimal">
            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Minimal
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                </CardTitle>
                <CardDescription>Clean and minimalist design</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/811e1aed-257a-4113-b174-22ade0f7dfc8.png" 
                    alt="Minimal template preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/portfolio">
            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Depth
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                </CardTitle>
                <CardDescription>Modern design with 3D animations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/84412779-0539-4904-9377-f71b15d378f7.png" 
                    alt="Depth template preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;