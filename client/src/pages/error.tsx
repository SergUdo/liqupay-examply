import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { useLocation } from "wouter";

export default function Error() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center flex flex-col items-center gap-4">
            <AlertCircle className="w-16 h-16 text-destructive" />
            <span className="text-2xl font-bold">Payment Failed</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-muted-foreground">
            There was an error processing your payment. Please try again.
          </p>
          <Button
            className="w-full"
            onClick={() => navigate("/")}
          >
            Try Again
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
