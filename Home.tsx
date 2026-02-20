/*
  Design Philosophy: NSA Briefing Room
  - Cold, precise, no emotion
  - Charcoal #111, white #fff, electric blue #0066ff (CTA only)
  - Inter font: headings 48px, body 16px
  - No animations, no hover effects, no curves
  - Pure grid layout with whitespace
  - Focus: AI Agents (ChatGPT, Gemini, Siri) finding businesses first
*/

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { useState } from "react";
import { Link } from "wouter";

export default function Home() {
  const [leadCost, setLeadCost] = useState(200);
  const [leadsPerMonth, setLeadsPerMonth] = useState(10);
  
  const monthlyWaste = leadCost * leadsPerMonth;
  const growthCost = 1297;
  const leadsNeededToBreakEven = Math.ceil(growthCost / leadCost);
  const monthlySavings = monthlyWaste - growthCost;
  const yearSavings = monthlySavings * 12;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Urgency Bar */}
      <div className="bg-[#0066ff] text-white py-3 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider">
          NEW: Siri now powered by Gemini. Is your business ready?
        </p>
      </div>
      
      {/* Hero Section */}
      <section className="container py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-[48px] font-semibold leading-tight tracking-tight">
            If Siri and Gemini don't recommend you, you don't exist.
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Apple and Google have officially partnered. Siri now runs on Gemini AI. This means the phone in every customer's pocket is now a "Reasoning Engine" that decides who to hire. If your business isn't optimized for Answer Engine Optimization (AEO), you are officially invisible to 90% of the market.
          </p>
          
          <div className="pt-8">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-[#0066ff] text-white px-12 py-6 text-lg font-semibold hover:bg-[#0066ff]"
                style={{ borderRadius: 0 }}
              >
                Get Your Free AI Trust Audit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AEO & GEO Definition Section */}
      <section className="container py-24 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-muted-foreground uppercase tracking-wider text-sm mb-4">Understanding</p>
            <h2 className="text-[36px] font-semibold">What Are AEO and GEO?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-border p-8 space-y-4">
              <h3 className="text-2xl font-semibold">AEO</h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Answer Engine Optimization</p>
              <p className="text-muted-foreground leading-relaxed">
                Traditional SEO optimizes for "Blue Links" in search results. AEO optimizes for AI systems like ChatGPT, Gemini, and Siri that provide direct answers instead of lists. When someone asks their phone "Who's the best plumber near me?", AEO ensures your business is the answer, not just one of ten links.
              </p>
            </div>
            
            <div className="border border-border p-8 space-y-4">
              <h3 className="text-2xl font-semibold">GEO</h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Generative Engine Optimization</p>
              <p className="text-muted-foreground leading-relaxed">
                GEO takes AEO further by optimizing how AI models generate and synthesize information about your business. It ensures that when AI systems create summaries, comparisons, or recommendations, your business appears with accurate, authoritative information that positions you as the local expert.
              </p>
            </div>
          </div>
          
          <div className="mt-12 border border-border p-8 text-center space-y-4">
            <p className="text-xl text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">The Bottom Line:</span> SEO gets you on the list. AEO and GEO make you the answer.
            </p>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="container py-24 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-muted-foreground uppercase tracking-wider text-sm mb-4">Calculate</p>
            <h2 className="text-[36px] font-semibold">Your ROI</h2>
            <p className="text-muted-foreground mt-4">See how the Growth tier ($1,297/mo) provides immediate ROI at just 10 leads per month, saving you over $700/mo.</p>
          </div>
          
          <div className="border border-border p-12 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-semibold uppercase tracking-wider">Cost Per Lead</label>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">$</span>
                  <Input 
                    type="number" 
                    value={leadCost}
                    onChange={(e) => setLeadCost(Number(e.target.value))}
                    className="text-2xl font-semibold border-0 border-b border-border focus-visible:ring-0 focus-visible:border-[#0066ff] px-0"
                    style={{ borderRadius: 0 }}
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-semibold uppercase tracking-wider">Leads Per Month</label>
                <Input 
                  type="number" 
                  value={leadsPerMonth}
                  onChange={(e) => setLeadsPerMonth(Number(e.target.value))}
                  className="text-2xl font-semibold border-0 border-b border-border focus-visible:ring-0 focus-visible:border-[#0066ff] px-0"
                  style={{ borderRadius: 0 }}
                />
              </div>
            </div>
            
            <div className="border-t border-border pt-8 space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">You're spending per month on leads:</span>
                <span className="text-3xl font-semibold">${monthlyWaste.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Growth tier breaks even at:</span>
                <span className="text-3xl font-semibold text-[#0066ff]">
                  {leadsNeededToBreakEven} {leadsNeededToBreakEven === 1 ? 'lead' : 'leads'}/month
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Your monthly savings:</span>
                <span className="text-3xl font-semibold text-[#0066ff]">
                  ${monthlySavings > 0 ? monthlySavings.toLocaleString() : 0}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">First year savings:</span>
                <span className="text-3xl font-semibold text-[#0066ff]">
                  ${yearSavings > 0 ? yearSavings.toLocaleString() : 0}
                </span>
              </div>
            </div>
            
            <div className="pt-8 text-center">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-[#0066ff] text-white px-12 py-6 text-lg font-semibold hover:bg-[#0066ff]"
                  style={{ borderRadius: 0 }}
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-24 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Structured Data Engine</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your business information formatted in machine-readable schema. ChatGPT, Gemini, Siri, Alexa, Grok, and Copilot parse and understand your services instantly.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Hybrid Vector-Graph Search</h2>
              <p className="text-muted-foreground leading-relaxed">
                Semantic understanding combined with relationship mapping. Voice queries from any AI Agent route directly to your business profile.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Instant Voice Indexing</h2>
              <p className="text-muted-foreground leading-relaxed">
                Real-time updates propagate across all AI platforms. Changes go live immediately across ChatGPT, Gemini, Siri, Alexa, Grok, Copilot, and emerging AI Agents.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Verified Listings Only</h2>
              <p className="text-muted-foreground leading-relaxed">
                Business verification ensures data integrity. AI Agents prioritize verified sources when making recommendations to users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversational Knowledge Hub Section */}
      <section className="container py-24 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-muted-foreground uppercase tracking-wider text-sm mb-4">Featured Service</p>
            <h2 className="text-[36px] font-semibold">Conversational Knowledge Hub (AI-Q&A)</h2>
            <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto leading-relaxed">
              Standard websites wait for users to find info. Our Hubs ensure AI agents (Siri, Gemini, ChatGPT) pull your business as the primary answer. We build a structured database of intent-based queries specific to your industry, ensuring you are the first name cited in voice and AI search.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Technical Features */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Intent-Based Targeting</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Optimized for "Who is the best...", "How much does it cost...", and "Near me" searches.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Q&A Schema Injection</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deep-coded structured data that makes your content "Machine-Readable."
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Authority Ranking</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Positions your business as the verified local expert in the Silicon Valley Knowledge Graph.
                </p>
              </div>
            </div>
            
            {/* AI Result Preview */}
            <div className="border-2 border-[#0066ff] p-8 space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#0066ff] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#0066ff]">AI Response Preview</p>
                  <p className="text-xs text-muted-foreground">What customers see</p>
                </div>
              </div>
              
              <div className="bg-muted/30 p-6 space-y-3">
                <p className="text-sm text-muted-foreground font-mono">User Query: "Who is the best plumber in San Jose?"</p>
                <div className="border-l-2 border-[#0066ff] pl-4">
                  <p className="leading-relaxed">
                    According to AgentAir verified data, <span className="font-semibold text-[#0066ff]">[Your Business Name]</span> is the top-rated specialist for this service in San Jose.
                  </p>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground italic">
                * Sample output. Actual AI responses vary by platform and query context.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Entity Graphing Section */}
      <section className="container py-24 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-muted-foreground uppercase tracking-wider text-sm mb-4">Featured Service</p>
            <h2 className="text-[36px] font-semibold">Unified Entity Graphing (Digital Trust & Authority)</h2>
            <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto leading-relaxed">
              AI models don't just read your website; they verify your reputation across the entire web. We consolidate your scattered digital footprint into a single, high-authority "Digital Fingerprint" that AI agents trust implicitly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Authority Loop Visual */}
            <div className="border-2 border-[#0066ff] p-8">
              <div className="text-center mb-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#0066ff] mb-2">The AgentAir Authority Loop</p>
                <p className="text-xs text-muted-foreground">Cross-Platform Verification System</p>
              </div>
              
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Center Website Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-[#0066ff] flex items-center justify-center z-10">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                  <line x1="100" y1="100" x2="100" y2="20" stroke="#0066ff" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="100" y1="100" x2="180" y2="100" stroke="#0066ff" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="100" y1="100" x2="100" y2="180" stroke="#0066ff" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="100" y1="100" x2="20" y2="100" stroke="#0066ff" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
                
                {/* Top - Google Maps */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-background border-2 border-[#0066ff] flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#0066ff]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <p className="absolute top-20 left-1/2 -translate-x-1/2 text-xs font-semibold whitespace-nowrap">Google Maps</p>
                
                {/* Right - Yelp */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-16 h-16 rounded-full bg-background border-2 border-[#0066ff] flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#0066ff]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  </svg>
                </div>
                <p className="absolute top-1/2 right-20 -translate-y-1/2 text-xs font-semibold whitespace-nowrap">Yelp</p>
                
                {/* Bottom - Industry Licenses */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-background border-2 border-[#0066ff] flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#0066ff]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                  </svg>
                </div>
                <p className="absolute bottom-20 left-1/2 -translate-x-1/2 text-xs font-semibold whitespace-nowrap">Licenses</p>
                
                {/* Left - Social Profiles */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-16 h-16 rounded-full bg-background border-2 border-[#0066ff] flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#0066ff]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
                <p className="absolute top-1/2 left-20 -translate-y-1/2 text-xs font-semibold whitespace-nowrap">Social</p>
              </div>
              
              <p className="text-center text-xs text-muted-foreground mt-8 italic">
                All platforms synchronized into one unified digital identity
              </p>
            </div>
            
            {/* Technical Features */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Cross-Platform Synchronization</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use sameAs schema properties to link your website to your Yelp, Facebook, Houzz, and professional licenses.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Knowledge Graph Integration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We anchor your business within the local Silicon Valley Knowledge Graph, making you a "Verified Entity."
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Reputation Shield</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Consolidates your 5-star reviews from multiple platforms into a single data point that boosts your AI recommendation score.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container py-24 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-muted-foreground uppercase tracking-wider text-sm mb-4">Testimonials</p>
            <h2 className="text-[36px] font-semibold">What Clients Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-border p-8 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                "Within 14-21 days of Agent Air optimization, ChatGPT started recommending our HVAC services to users in our area. We've tracked 12 qualified leads directly from AI voice searches in the first month."
              </p>
              <div className="space-y-1">
                <p className="font-semibold text-foreground">Marcus Chen</p>
                <p className="text-sm text-muted-foreground">Owner, Summit HVAC Solutions</p>
              </div>
            </div>
            
            <div className="border border-border p-8 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                "I was skeptical about AI optimization, but the results are undeniable. Siri and Alexa now surface our law firm when people ask for estate planning attorneys. Our consultation bookings increased 40% in 60 days."
              </p>
              <div className="space-y-1">
                <p className="font-semibold text-foreground">Sarah Rodriguez</p>
                <p className="text-sm text-muted-foreground">Partner, Rodriguez & Associates Law</p>
              </div>
            </div>
            
            <div className="border border-border p-8 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                "Before Agent Air, we didn't exist in AI search results. Now when someone asks Gemini or ChatGPT for a plumber in our city, we're in the top 3 recommendations. ROI paid for itself in 3 weeks."
              </p>
              <div className="space-y-1">
                <p className="font-semibold text-foreground">David Park</p>
                <p className="text-sm text-muted-foreground">CEO, Park Plumbing & Heating</p>
              </div>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-24 pt-16 border-t border-border">
            <div className="text-center mb-12">
              <p className="text-muted-foreground uppercase tracking-wider text-sm">Recognized By</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center opacity-60">
              <div className="text-center space-y-2">
                <div className="text-4xl">🔒</div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">SSL Secured</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="text-4xl">✓</div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Verified Business</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="text-4xl">⚡</div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">AI Certified</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="text-4xl">🎯</div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Results Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container py-32 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-muted-foreground uppercase tracking-wider text-sm mb-4">Pricing</p>
            <h2 className="text-[48px] font-semibold">Choose Your Path to AI Visibility</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Foundation Tier */}
            <div className="border border-border p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Foundation</h3>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">Stay in the conversation</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-[48px] font-semibold">$499</p>
                <p className="text-muted-foreground">/month</p>
              </div>
              
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#0066ff] mt-1">✓</span>
                  <span>Core AEO Schema Setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0066ff] mt-1">✓</span>
                  <span>Monthly AI Visibility Health Check</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0066ff] mt-1">✓</span>
                  <span>Basic GEO-fencing</span>
                </li>
              </ul>
              
              <a href="https://buy.stripe.com/dRmeV5dPf70UfJz6Y8eUU04" target="_blank" rel="noopener noreferrer" className="block">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full text-lg font-semibold"
                  style={{ borderRadius: 0 }}
                >
                  Get Started
                </Button>
              </a>
            </div>
            
            {/* Growth Tier - Recommended */}
            <div className="border-2 border-[#0066ff] p-8 space-y-6 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0066ff] text-white px-6 py-1 text-sm font-semibold uppercase tracking-wider">
                Recommended
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Growth</h3>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">Own your neighborhood</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-[48px] font-semibold">$1,297</p>
                <p className="text-muted-foreground">/month</p>
              </div>
              
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#0066ff] mt-1">✓</span>
                  <span className="font-semibold text-foreground">Everything in Foundation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0066ff] mt-1">✓</span>
                  <span>Monthly Content 'AEO Injections'</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0066ff] mt-1">✓</span>
                  <span>Competitor Displacement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0066ff] mt-1">✓</span>
                  <span>Model-Drift Protection</span>
                </li>
              </ul>
              
              <a href="https://buy.stripe.com/6oU7sD7qRad6gND82ceUU05" target="_blank" rel="noopener noreferrer" className="block">
                <Button 
                  size="lg" 
                  className="w-full bg-[#0066ff] text-white text-lg font-semibold hover:bg-[#0066ff]"
                  style={{ borderRadius: 0 }}
                >
                  Get Started
                </Button>
              </a>
            </div>
            
            {/* Dominance Tier */}
            <div className="border border-border p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Dominance</h3>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">Total market authority</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-[48px] font-semibold">$2,997</p>
                <p className="text-muted-foreground">/month</p>
              </div>
              
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#0066ff] mt-1">✓</span>
                  <span className="font-semibold text-foreground">Everything in Growth</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0066ff] mt-1">✓</span>
                  <span>Custom AI Knowledge Base</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0066ff] mt-1">✓</span>
                  <span>Weekly Optimization Sprints</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0066ff] mt-1">✓</span>
                  <span>Priority 24/7 Agent Support</span>
                </li>
              </ul>
              
              <a href="https://buy.stripe.com/aFa5kvbH73OI1SJ96geUU06" target="_blank" rel="noopener noreferrer" className="block">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full text-lg font-semibold"
                  style={{ borderRadius: 0 }}
                >
                  Get Started
                </Button>
              </a>
            </div>
          </div>
          
          {/* Feature Comparison Table */}
          <div className="mt-24 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-muted-foreground uppercase tracking-wider text-sm mb-4">Detailed Comparison</p>
              <h3 className="text-[36px] font-semibold">What's Included in Each Tier</h3>
            </div>
            
            <div className="border border-border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-6 font-semibold text-lg">Feature</th>
                    <th className="text-center p-6 font-semibold text-lg border-l border-border">Foundation<br/><span className="text-sm font-normal text-muted-foreground">$499/mo</span></th>
                    <th className="text-center p-6 font-semibold text-lg border-l border-r border-border bg-[#0066ff]/5">
                      Growth<br/>
                      <span className="text-sm font-normal text-muted-foreground">$1,297/mo</span><br/>
                      <span className="text-xs font-semibold text-[#0066ff] uppercase tracking-wider">Most Popular</span>
                    </th>
                    <th className="text-center p-6 font-semibold text-lg">Dominance<br/><span className="text-sm font-normal text-muted-foreground">$2,997/mo</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-6 font-medium">AEO Core Identity</td>
                    <td className="text-center p-6 border-l border-border">
                      <span className="text-[#0066ff] text-2xl">✓</span>
                    </td>
                    <td className="text-center p-6 border-l border-r border-border bg-[#0066ff]/5">
                      <span className="text-[#0066ff] text-2xl">✓</span>
                    </td>
                    <td className="text-center p-6">
                      <span className="text-[#0066ff] text-2xl">✓</span>
                    </td>
                  </tr>
                  
                  <tr className="border-b border-border">
                    <td className="p-6 font-medium">AI Map Visibility</td>
                    <td className="text-center p-6 border-l border-border">
                      <span className="text-muted-foreground">Basic</span>
                    </td>
                    <td className="text-center p-6 border-l border-r border-border bg-[#0066ff]/5">
                      <span className="text-foreground font-semibold">Enhanced</span>
                    </td>
                    <td className="text-center p-6">
                      <span className="text-foreground font-semibold">Premium</span>
                    </td>
                  </tr>
                  
                  <tr className="border-b border-border">
                    <td className="p-6 font-medium">GEO-Saturator</td>
                    <td className="text-center p-6 border-l border-border">
                      <span className="text-muted-foreground">1 Location</span>
                    </td>
                    <td className="text-center p-6 border-l border-r border-border bg-[#0066ff]/5">
                      <span className="text-foreground font-semibold">3 Locations</span>
                    </td>
                    <td className="text-center p-6">
                      <span className="text-foreground font-semibold">Unlimited</span>
                    </td>
                  </tr>
                  
                  <tr className="border-b border-border">
                    <td className="p-6 font-medium">'Pulse' Updates</td>
                    <td className="text-center p-6 border-l border-border">
                      <span className="text-muted-foreground">Monthly</span>
                    </td>
                    <td className="text-center p-6 border-l border-r border-border bg-[#0066ff]/5">
                      <span className="text-foreground font-semibold">Weekly</span>
                    </td>
                    <td className="text-center p-6">
                      <span className="text-foreground font-semibold">Daily</span>
                    </td>
                  </tr>
                  
                  <tr className="border-b border-border">
                    <td className="p-6 font-medium">Visual Refresh</td>
                    <td className="text-center p-6 border-l border-border">
                      <span className="text-muted-foreground">—</span>
                    </td>
                    <td className="text-center p-6 border-l border-r border-border bg-[#0066ff]/5">
                      <span className="text-[#0066ff] text-2xl">✓</span>
                    </td>
                    <td className="text-center p-6">
                      <span className="text-[#0066ff] text-2xl">✓</span>
                    </td>
                  </tr>
                  
                  <tr>
                    <td className="p-6 font-medium">Content Strategy</td>
                    <td className="text-center p-6 border-l border-border">
                      <span className="text-muted-foreground">—</span>
                    </td>
                    <td className="text-center p-6 border-l border-r border-border bg-[#0066ff]/5">
                      <span className="text-muted-foreground">Monthly</span>
                    </td>
                    <td className="text-center p-6">
                      <span className="text-foreground font-semibold">Weekly + Custom</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-24 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-muted-foreground uppercase tracking-wider text-sm mb-4">Frequently Asked Questions</p>
            <h2 className="text-[36px] font-semibold">Common Questions</h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-border px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline py-6">
                Can I cancel or change my plan at any time?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                Absolutely. We believe in earning your business every month. You can upgrade, downgrade, or cancel your subscription at any time with zero hidden fees.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline py-6">
                How soon will I see results in AI search?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                While deep indexing takes time, most businesses see their "AI Identity" updated across Siri and Gemini within 14 to 21 days of the initial graft.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline py-6">
                Do I need to change my current website?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                No. We work with your existing site. We simply "graft" our AEO code onto your current platform—whether it's WordPress, Squarespace, or Wix.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline py-6">
                Is this the same as SEO?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                SEO is for old-school "Blue Links." AEO (Answer Engine Optimization) is for the new world of "Direct Answers." We make sure the AI recommends YOU, not just a list of your competitors.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container py-24 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-muted-foreground uppercase tracking-wider text-sm mb-4">Our Mission</p>
            <h2 className="text-[36px] font-semibold">Ending Digital Invisibility</h2>
          </div>
          
          <div className="space-y-8">
            <p className="text-xl text-muted-foreground leading-relaxed">
              AgentAir wasn't born in a boardroom; it was built from the ground up by a self-taught AI Engineer who realized that most local businesses are being rendered invisible by the very technology meant to help them. After discovering that even high-end contractors are often blocked by critical indexing flaws, we dedicated ourselves to building the bridge to the digital future.
            </p>
            
            <div className="border border-border p-8 space-y-6 mt-12">
              <h3 className="text-2xl font-semibold">Why Us</h3>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-foreground">Real-World Audits</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We don't guess. We find the "Invisible Mode" tags and technical blocks that old-school SEO misses.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-foreground">Parse-First Philosophy</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe the future of search isn't about keywords; it's about being "Machine-Readable" and "AI-Ready."
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-foreground">Silicon Valley Roots</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Based in San Jose, we provide local businesses with the same AI optimization power used by tech giants.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-8 text-center">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-[#0066ff] text-white px-12 py-6 text-lg font-semibold hover:bg-[#0066ff]"
                  style={{ borderRadius: 0 }}
                >
                  Audit My Visibility
                </Button>
              </Link>
            </div>
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
