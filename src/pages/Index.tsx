import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="template-ds-min-h-screen template-ds-bg-background template-ds-flex template-ds-items-center template-ds-justify-center template-ds-p-4">
      <div className="template-ds-max-w-4xl template-ds-w-full">
        <div className="template-ds-text-center template-ds-mb-12">
          <h1 className="template-ds-text-4xl template-ds-font-bold template-ds-mb-4">Choose Your Template</h1>
          <p className="template-ds-text-muted-foreground">Select a template to get started with your portfolio</p>
        </div>
        
        <div className="template-ds-grid md:template-ds-grid-cols-2 template-ds-gap-8">
          <Link to="/minimal">
            <Card className="template-ds-group hover:template-ds-shadow-lg template-ds-transition-all template-ds-duration-300 template-ds-cursor-pointer template-ds-border-2 hover:template-ds-border-primary">
              <CardHeader>
                <CardTitle className="template-ds-flex template-ds-items-center template-ds-justify-between">
                  Minimal
                  <ArrowRight className="template-ds-w-5 template-ds-h-5 template-ds-opacity-0 group-hover:template-ds-opacity-100 template-ds-transform group-hover:template-ds-translate-x-1 template-ds-transition-all" />
                </CardTitle>
                <CardDescription>Clean and minimalist design</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="template-ds-aspect-video template-ds-bg-muted template-ds-rounded-lg template-ds-overflow-hidden">
                  <img 
                    src="/lovable-uploads/811e1aed-257a-4113-b174-22ade0f7dfc8.png" 
                    alt="Minimal template preview"
                    className="template-ds-w-full template-ds-h-full template-ds-object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/portfolio">
            <Card className="template-ds-group hover:template-ds-shadow-lg template-ds-transition-all template-ds-duration-300 template-ds-cursor-pointer template-ds-border-2 hover:template-ds-border-primary">
              <CardHeader>
                <CardTitle className="template-ds-flex template-ds-items-center template-ds-justify-between">
                  Depth
                  <ArrowRight className="template-ds-w-5 template-ds-h-5 template-ds-opacity-0 group-hover:template-ds-opacity-100 template-ds-transform group-hover:template-ds-translate-x-1 template-ds-transition-all" />
                </CardTitle>
                <CardDescription>Modern design with 3D animations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="template-ds-aspect-video template-ds-bg-muted template-ds-rounded-lg template-ds-overflow-hidden">
                  <img 
                    src="/lovable-uploads/84412779-0539-4904-9377-f71b15d378f7.png" 
                    alt="Depth template preview"
                    className="template-ds-w-full template-ds-h-full template-ds-object-cover"
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