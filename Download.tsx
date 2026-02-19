/*
  Lead Magnet Download Page
  - Confirms email capture
  - Provides PDF download link
  - Includes next-step CTA to main service
*/

import { Button } from "@/components/ui/button";
import { CheckCircle2, Download } from "lucide-react";

const PDF_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663091875761/IaJXSjLsUDzSvWKG.pdf";

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-32">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Success Icon */}
          <div className="flex justify-center">
            <CheckCircle2 className="w-20 h-20 text-[#0066ff]" />
          </div>

          {/* Heading */}
          <h1 className="text-[48px] font-semibold leading-tight tracking-tight">
            Check Your Email
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed">
            We've sent you the guide "Is Your Business Invisible to AI?" along with
            exclusive tips for improving your AI visibility.
          </p>

          {/* Download Button */}
          <div className="pt-4">
            <a href={PDF_URL} download="ai-visibility-guide.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-[#0066ff] text-white px-12 py-6 text-lg font-semibold hover:bg-[#0066ff]"
                style={{ borderRadius: 0 }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Guide Now
              </Button>
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-12"></div>

          {/* Next Step CTA */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">
              Ready to Get AI-Optimized?
            </h2>
            
            <p className="text-muted-foreground leading-relaxed">
              Stop being invisible. Get optimized across ChatGPT, Gemini, Siri, Alexa, Grok,
              and Copilot for a one-time fee of $997.
            </p>

            <a href="/" className="inline-block">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg font-semibold"
                style={{ borderRadius: 0 }}
              >
                Secure Your Spot
              </Button>
            </a>
          </div>

          {/* Support */}
          <div className="pt-12">
            <p className="text-sm text-muted-foreground">
              Questions? Email us at{" "}
              <a href="mailto:hello@agentair.io" className="text-[#0066ff] hover:underline">
                hello@agentair.io
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
