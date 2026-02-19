/*
  Lead Capture Form Component
  - Email input with validation
  - Submits to tRPC leads.capture endpoint
  - Redirects to /download on success
*/

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { useLocation } from "wouter";

export function LeadCaptureForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [, setLocation] = useLocation();

  const captureLead = trpc.leads.capture.useMutation({
    onSuccess: () => {
      setLocation("/download");
    },
    onError: (err) => {
      setError(err.message || "Something went wrong. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic email validation
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    captureLead.mutate({ email });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
      <div className="space-y-2">
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
        {captureLead.isPending ? "Sending..." : "Get Free Guide"}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}
