"use client"
import React, { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/footer/Footer'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// FAQ data organized by categories
const faqData = {
  general: [
    {
      question: "What is digital marketing, and why does my business need it?",
      answer: "Digital marketing is the use of online channels like social media, search engines, and email to promote your business. It helps you reach a larger audience, generate leads, and increase sales more effectively than traditional marketing.",
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer: "Results vary depending on the strategy used. SEO can take 3-6 months, while PPC and social media ads can deliver quicker results. Consistency and data-driven adjustments are key to success.",
    },
    {
      question: "Which digital marketing strategy is best for my business?",
      answer: "It depends on your industry, target audience, and budget. For local businesses, SEO and Google Ads work well, while eCommerce brands benefit from social media ads and influencer marketing.",
    },
    {
      question: "How does SEO help my business grow?",
      answer: "SEO (Search Engine Optimization) helps your website rank higher on Google, increasing organic traffic and visibility. This leads to more inquiries, leads, and sales.",
    },
    {
      question: "What's the difference between SEO and PPC?",
      answer: [
        "SEO (Search Engine Optimization) is organic and improves your website's ranking over time.",
        "PPC (Pay-Per-Click) is paid advertising that provides instant visibility but requires ongoing budget allocation."
      ]
    },
  ],
  socialMedia: [
    {
      question: "Which social media platform is best for my business?",
      answer: [
        "B2B: LinkedIn, Twitter",
        "B2C: Instagram, Facebook, TikTok",
        "E-commerce: Instagram, Facebook, Pinterest",
        "Local businesses: Facebook, Instagram, Google My Business"
      ]
    },
    {
      question: "How often should I post on social media?",
      answer: "Ideally, 3-5 times per week to stay relevant and engage your audience. The quality of content matters more than frequency.",
    },
    {
      question: "How can I grow my social media followers organically?",
      answer: [
        "Post valuable and engaging content consistently.",
        "Use trending hashtags and keywords.",
        "Interact with your audience (reply to comments & messages).",
        "Collaborate with influencers and industry experts."
      ]
    },
    {
      question: "Is social media advertising worth it?",
      answer: "Yes! Platforms like Facebook, Instagram, and TikTok offer targeted ads to reach the right audience, drive sales, and increase brand awareness.",
    },
  ],
  googleAds: [
    {
      question: "What is PPC, and how does it work?",
      answer: "PPC (Pay-Per-Click) is a digital advertising model where you pay only when someone clicks on your ad. It's commonly used on Google Ads and social media platforms.",
    },
    {
      question: "How much should I spend on Google Ads?",
      answer: "It depends on your industry, competition, and goals. A good starting budget for local businesses is $500–$1000/month, while larger campaigns may require more.",
    },
    {
      question: "Why are my ads not converting into sales?",
      answer: [
        "Poor targeting or audience selection.",
        "Weak ad copy or visuals.",
        "Unoptimized landing pages.",
        "No clear call-to-action (CTA)."
      ]
    },
  ],
  branding: [
    {
      question: "Do I need a website if I have social media pages?",
      answer: "Yes! A website adds credibility, improves SEO, and serves as a central hub for your brand. Social media is important, but a website helps convert visitors into customers.",
    },
    {
      question: "How can I improve my website's conversion rate?",
      answer: [
        "Use clear CTAs (Call-To-Actions).",
        "Optimize page speed and mobile responsiveness.",
        "Add trust signals (testimonials, reviews, security badges).",
        "Simplify the checkout or contact process."
      ]
    },
    {
      question: "How important is branding for a business?",
      answer: "Branding builds recognition, trust, and loyalty. A strong brand identity (logo, colors, messaging) helps your business stand out from competitors.",
    },
  ],
  emailmarketing: [
    {
      question: "Is email marketing still effective?",
      answer: "Absolutely! Email marketing has one of the highest ROIs. Personalized emails, newsletters, and promotions can nurture leads and increase customer retention.",
    },
    {
      question: "What kind of content should I create for my business?",
      answer: [
        "Educational blog posts & guides",
        "Video content (tutorials, testimonials, behind-the-scenes)",
        "Infographics & visual posts",
        "Customer success stories"
      ]
    },
  ],
  services: [
    {
      question: "Why should I hire Vertical Click instead of doing marketing myself?",
      answer: "Marketing requires expertise in strategy, tools, and execution. We handle everything—SEO, ads, social media, and branding—so you can focus on running your business.",
    },
    {
      question: "How much do your marketing services cost?",
      answer: "Our pricing depends on your needs. We offer custom packages for SEO, social media, PPC, and full-service digital marketing. Contact us for a free consultation.",
    },
    {
      question: "How do I get started with Vertical Click?",
      answer: "Simply contact us via our website, email, or phone. We'll schedule a free consultation to understand your goals and recommend a tailored marketing plan.",
    },
  ],
}

// Category labels for the buttons
const categories = [
  { id: "general", label: "General Marketing Questions" },
  { id: "socialMedia", label: "Social Media Marketing Questions" },
  { id: "googleAds", label: "Paid Advertising (PPC & Google Ads) Questions" },
  { id: "branding", label: "Website & Branding Questions" },
  { id: "emailmarketing", label: "Email & Content Marketing Questions" },
  { id: "services", label: "Marketing Agency & Service-Related Questions" },
]

function FAQPage() {
  const [activeCat, setActiveCat] = useState("general")

  // Helper function to render answer content
  const renderAnswer = (answer: string | string[]) => {
    if (Array.isArray(answer)) {
      return (
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          {answer.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )
    }
    return <p className="text-muted-foreground">{answer}</p>
  }

  return (
    <React.Fragment>
      <Header/>
      <main className="container mx-auto py-12 px-4 max-w-5xl">
        <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>

        {/* Category buttons */}
        <div className="flex  flex-wrap justify-start md:justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCat(category.id)}
              className={`
                px-3 py-2 rounded-md font-medium text-sm transition-colors
                ${activeCat === category.id 
                  ? "bg-purple-500 text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ accordions */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">
            {categories.find((c) => c.id === activeCat)?.label}
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {faqData[activeCat as keyof typeof faqData].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {renderAnswer(faq.answer)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
      <Footer/>
    </React.Fragment>
  )
}

export default FAQPage