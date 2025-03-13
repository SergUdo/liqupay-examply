import { useEffect } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

export default function Success() {
  const [, navigate] = useLocation();
  const reference = new URLSearchParams(window.location.search).get("reference");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["/api/payment/verify", reference],
    enabled: !!reference,
  });

  useEffect(() => {
    if (isError) {
      navigate("/error");
    }
  }, [isError, navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center flex flex-col items-center gap-4">
            <CheckCircle className="w-16 h-16 text-green-500" />
            <span className="text-2xl font-bold">Payment Successful!</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {isLoading ? (
            <p className="text-center text-muted-foreground">
              Verifying payment...
            </p>
          ) : (
            <>
              <div className="text-center text-muted-foreground">
                <p>Transaction Reference: {reference}</p>
                <p className="mt-2">Status: {data?.status}</p>
              </div>
              <Button
                className="w-full"
                onClick={() => navigate("/")}
              >
                Make Another Payment
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
