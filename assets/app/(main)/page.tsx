import Link from "next/link";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { siteConfig, services, whyChooseUs, heroImages } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImages.main}
            alt="Professional tree service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="animate-pulse">●</span>
              <span>24/7 Emergency Service Available</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-shadow">
              Professional Tree Care You Can Trust
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
              Expert tree removal, trimming, and emergency storm cleanup. Licensed, insured, and ready to help protect your property.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center space-x-2 bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors shadow-lg"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now: {siteConfig.phone}</span>
              </a>
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                <span>Get Free Estimate</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-white">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Free Estimates</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Same Day Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Storm Section */}
      <section className="bg-red-50 border-y border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="bg-red-100 p-3 rounded-full">
                <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Storm Damage Emergency?</h2>
                <p className="text-gray-600">We respond immediately to fallen trees and storm damage</p>
              </div>
            </div>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>Emergency Hotline: {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Tree Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive tree care solutions for residential and commercial properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/#${service.id}`}
                className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.shortDescription}
                  </p>
                  <span className="inline-flex items-center text-green-700 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services/"
              className="inline-flex items-center space-x-2 bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
            >
              <span>View All Services</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AYF Tree Service
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by homeowners and businesses for professional tree care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">
                    {item.icon === "Shield" && "🛡️"}
                    {item.icon === "Clock" && "⏰"}
                    {item.icon === "Users" && "👥"}
                    {item.icon === "ClipboardCheck" && "📋"}
                    {item.icon === "Settings" && "⚙️"}
                    {item.icon === "Sparkles" && "✨"}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                See Our Work in Action
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Watch our professional team handle complex tree removals, precision trimming, 
                and emergency storm damage cleanup. See why homeowners trust AYF Tree Service.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-gray-700">Professional equipment and techniques</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-gray-700">Safe, efficient tree removal</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-gray-700">Complete cleanup and restoration</span>
                </li>
              </ul>
              <Link
                href="/videos/"
                className="inline-flex items-center space-x-2 bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
              >
                <span>View All Videos</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
              <Link href="/videos/" className="block absolute inset-0 group">
                <img
                  src="https://img.youtube.com/vi/VIDEO_ID_HERE/maxresdefault.jpg"
                  alt="AYF Tree Service Video"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="h-8 w-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 5.84a.5.5 0 01.77-.42l8.57 5.16a.5.5 0 010 .84l-8.57 5.16a.5.5 0 01-.77-.42V5.84z" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*{/* CTA Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a free, no-obligation estimate on your tree service needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center justify-center space-x-2 bg-white text-green-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>Call {siteConfig.phone}</span>
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-900 transition-colors"
            >
              <span>Request Estimate</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
