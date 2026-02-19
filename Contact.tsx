import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { trpc } from "@/lib/trpc";
import { useLocation } from "wouter";

export default function Contact() {
  const [, setLocation] = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const captureContact = trpc.leads.captureContact.useMutation({
    onSuccess: () => {
      setSubmitted(true);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await captureContact.mutateAsync({ name, email, website });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="container max-w-2xl">
          <div className="border border-border p-12 text-center space-y-6">
            <h1 className="text-[48px] font-semibold">Request Received</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Thank you for your interest in Agent Air. We'll analyze your business's AI visibility and contact you within 24-48 hours with your personalized audit results.
            </p>
            <Button
              size="lg"
              onClick={() => setLocation("/")}
              className="bg-[#0066ff] text-white px-12 py-6 text-lg font-semibold hover:bg-[#0066ff]"
              style={{ borderRadius: 0 }}
            >
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-24">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-muted-foreground uppercase tracking-wider text-sm mb-4">Free Audit</p>
            <h1 className="text-[48px] font-semibold leading-tight mb-6">
              Get Your Free AI Trust Audit
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We'll analyze your business's current AI visibility across Siri, Gemini, and ChatGPT, identify "Invisible Mode" blocks, and show you exactly what's preventing customers from finding you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="border border-border p-8 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">Business Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-background border-border text-foreground"
                style={{ borderRadius: 0 }}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background border-border text-foreground"
                style={{ borderRadius: 0 }}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="website" className="text-foreground">Website URL</Label>
              <Input
                id="website"
                type="url"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                required
                placeholder="https://yourbusiness.com"
                className="bg-background border-border text-foreground"
                style={{ borderRadius: 0 }}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={captureContact.isPending}
              className="w-full bg-[#0066ff] text-white text-lg font-semibold hover:bg-[#0066ff]"
              style={{ borderRadius: 0 }}
            >
              {captureContact.isPending ? "Submitting..." : "Request My Free Audit"}
            </Button>

            {captureContact.isError && (
              <p className="text-red-500 text-sm text-center">
                {captureContact.error.message}
              </p>
            )}
          </form>

          <p className="text-center text-muted-foreground text-sm mt-8">
            No credit card required. We'll send your personalized audit within 24-48 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
