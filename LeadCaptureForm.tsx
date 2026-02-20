/*
  Lead Capture Form Component - Optimized for AI Audit
  - Email and URL inputs with validation
  - Submits to tRPC leads.capture endpoint
  - Redirects to /audit-success on success
*/

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { useLocation } from "wouter";

export function LeadCaptureForm() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [error, setError] = useState("");
  const [, setLocation] = useLocation();

  const captureLead = trpc.leads.capture.useMutation({
    onSuccess: () => {
      setLocation("/audit-success");  // Change to your success page or alert
    },
    onError: (err) => {
      setError(err.message || "Something went wrong. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }
    if (!website) {
      setError("Please enter your business website URL");
      return;
    }

    captureLead.mutate({ email, website });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
      <div className="space-y-2">
        <Input
          type="url"
          placeholder="Business Website URL (e.g., rileysplumbing.com)"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          disabled={captureLead.isPending}
          className="h-14 px-6 text-lg bg-background border-border text-foreground"
          style={{ borderRadius: 0 }}
          required
        />
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={captureLead.isPending}
          className="h-14 px-6 text-lg bg-background border-border text-foreground"
          style={{ borderRadius: 0 }}
          required
        />
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={captureLead.isPending}
        className="w-full bg-[#0066ff] text-white px-12 py-6 text-lg font-semibold hover:bg-[#0066ff]"
        style={{ borderRadius: 0 }}
      >
        {captureLead.isPending ? "Auditing..." : "Run Free AI Audit"}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}
