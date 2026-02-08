"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import { faqs, siteConfig } from "@/lib/data";

export const metadata = {
  title: "FAQs | AYF Tree Service",
  description: "Find answers to frequently asked questions about our tree services, pricing, insurance, and more.",
};

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-200">
              Find answers to common questions about our tree services. 
              Can't find what you're looking for? Contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden hover:border-green-300 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-green-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-16 bg-green-50 rounded-2xl p-8 border border-green-100">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h2>
              <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                Our team is here to help. Reach out to us by phone or email, 
                and we'll get back to you as soon as possible.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center justify-center space-x-2 bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Us: {siteConfig.phone}</span>
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center space-x-2 border-2 border-green-700 text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Send Message</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore More
            </h2>
            <p className="text-lg text-gray-600">
              Learn more about our services and company
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/services/"
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center group"
            >
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                Our Services
              </h3>
              <p className="text-gray-600">
                View our complete range of tree care services
              </p>
            </Link>

            <Link
              href="/about/"
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center group"
            >
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                About Us
              </h3>
              <p className="text-gray-600">
                Learn about our company and team
              </p>
            </Link>

            <Link
              href="/gallery/"
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center group"
            >
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                Project Gallery
              </h3>
              <p className="text-gray-600">
                See examples of our completed work
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
