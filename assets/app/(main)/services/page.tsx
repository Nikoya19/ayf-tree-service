import Link from "next/link";
import { CheckCircle, Phone, ArrowRight, Images } from "lucide-react";
import { siteConfig, services } from "@/lib/data";

export const metadata = {
  title: "Tree Services | AYF Tree Service",
  description: "Professional tree removal, trimming, stump grinding, and storm cleanup services. Expert care for all your tree service needs.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Tree Services
            </h1>
            <p className="text-xl text-gray-200">
              Comprehensive tree care solutions delivered by certified professionals. 
              From routine maintenance to emergency removals, we handle it all.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}>
                  {/* Image Gallery */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="space-y-4">
                      {/* Main Image */}
                      <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      </div>

                      {/* Gallery Thumbnails */}
                      <div className="grid grid-cols-3 gap-4">
                        {service.gallery.map((img, idx) => (
                          <div key={idx} className="relative h-24 rounded-lg overflow-hidden">
                            <img
                              src={img}
                              alt={`${service.title} work ${idx + 1}`}
                              className="w-full h-full object-cover hover:scale-110 transition-transform"
                            />
                          </div>
                        ))}
                      </div>

                      <Link
                        href="/gallery/"
                        className="inline-flex items-center space-x-2 text-green-700 font-semibold hover:text-green-800 transition-colors"
                      >
                        <Images className="h-5 w-5" />
                        <span>View More in Gallery</span>
                      </Link>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      <span>Service {index + 1}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.fullDescription}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="inline-flex items-center justify-center space-x-2 bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
                      >
                        <Phone className="h-5 w-5" />
                        <span>Call for Quote</span>
                      </a>
                      <Link
                        href="/contact/"
                        className="inline-flex items-center justify-center space-x-2 border-2 border-green-700 text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                      >
                        <span>Request Online</span>
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {index < services.length - 1 && (
                  <hr className="mt-24 border-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="text-4xl mb-4">🌲</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tree Health Assessment</h3>
              <p className="text-gray-600">
                Not sure if your tree needs removal? We provide expert assessments to determine the best course of action.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly Disposal</h3>
              <p className="text-gray-600">
                We recycle wood debris and offer mulch products. Responsible disposal is part of our commitment.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Permit Assistance</h3>
              <p className="text-gray-600">
                We handle all necessary permits and ensure compliance with local regulations for tree removal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Every property is unique. Contact us for a personalized assessment and quote.
          </p>
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center space-x-2 bg-white text-green-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span>Get Free Estimate</span>
          </a>
        </div>
      </section>
    </div>
  );
}
