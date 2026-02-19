/*
  Design Philosophy: NSA Briefing Room
  - Cold, precise, no emotion
  - Charcoal #111, white #fff, electric blue #0066ff (CTA only)
  - Inter font: headings 48px, body 16px
  - No animations, no hover effects, no curves
  - Pure grid layout with whitespace
*/

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function Success() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Success Hero */}
      <section className="container py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-8">
            <CheckCircle2 className="w-20 h-20 text-[#0066ff]" strokeWidth={1.5} />
          </div>
          
          <h1 className="text-[48px] font-semibold leading-tight tracking-tight">
            Payment Confirmed
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Welcome to Agent Air. Your business is now being optimized for AI Agent discovery.
          </p>
        </div>
      </section>

      {/* Next Steps */}
      <section className="container pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="border border-border p-12 space-y-12">
            <div>
              <h2 className="text-[36px] font-semibold mb-8">What Happens Next</h2>
              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="flex items-start gap-4">
                    <span className="text-[#0066ff] font-semibold text-lg">01</span>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Verification Email</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Check your inbox for a verification email from hello@agentair.io within the next 15 minutes. Click the link to confirm your business details.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-4">
                    <span className="text-[#0066ff] font-semibold text-lg">02</span>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Business Profile Setup</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Our team will contact you within 24 hours to gather your business information: services offered, service areas, contact details, and operating hours.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-4">
                    <span className="text-[#0066ff] font-semibold text-lg">03</span>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Optimization Begins</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Within 48 hours, your structured data will be indexed. Real-time propagation to ChatGPT, Gemini, Siri, and other AI platforms begins immediately.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-4">
                    <span className="text-[#0066ff] font-semibold text-lg">04</span>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Full Activation</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Complete propagation across all AI platforms occurs within 7-10 business days. You'll receive a confirmation email when your business is fully optimized.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <h3 className="text-2xl font-semibold mb-4">Important Information</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-foreground">•</span>
                  <span>You have permanent access to update your business profile at any time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground">•</span>
                  <span>Changes propagate instantly across all AI platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground">•</span>
                  <span>No additional fees for updates or maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground">•</span>
                  <span>30-day money-back guarantee if not satisfied</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container pb-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-[36px] font-semibold">Questions?</h2>
            <p className="text-xl text-muted-foreground">
              Contact us at hello@agentair.io for immediate assistance.
            </p>
          </div>
          
          <div>
            <a href="mailto:hello@agentair.io">
              <Button 
                size="lg" 
                className="bg-[#0066ff] text-white px-12 py-6 text-lg font-semibold hover:bg-[#0066ff]"
                style={{ borderRadius: 0 }}
              >
                Email Support
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">© 2026 Agent Air. All rights reserved.</p>
            <p className="text-muted-foreground text-sm">hello@agentair.io</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
