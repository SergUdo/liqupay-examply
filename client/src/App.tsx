import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Payment from "@/pages/payment";
import Success from "@/pages/success";
import Error from "@/pages/error";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Payment} />
      <Route path="/success" component={Success} />
      <Route path="/error" component={Error} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
