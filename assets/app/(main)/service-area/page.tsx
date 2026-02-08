import { MapPin, Phone, Navigation } from "lucide-react";
import { siteConfig, serviceAreas } from "@/lib/data";

export const metadata = {
  title: "Service Areas | AYF Tree Service",
  description: "We provide professional tree services throughout Springfield and surrounding areas. Find out if we service your location.",
};

export default function ServiceAreaPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Service Areas
            </h1>
            <p className="text-xl text-gray-200">
              Providing professional tree care services throughout the region. 
              If you don't see your area listed, contact us—we may still be able to help!
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Areas List */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Areas We Serve
              </h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {serviceAreas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-gray-50 rounded-lg p-4 border border-gray-100 hover:border-green-300 hover:bg-green-50 transition-colors"
                  >
                    <MapPin className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="font-medium text-gray-900">{area}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-green-50 rounded-xl p-8 border border-green-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Don't See Your Area?
                </h3>
                <p className="text-gray-600 mb-6">
                  We frequently travel beyond these areas for larger projects or emergency services. 
                  Contact us to discuss your specific location and needs.
                </p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center space-x-2 bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call to Check Availability</span>
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Coverage Radius */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Navigation className="h-6 w-6 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-900">Coverage Area</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  We typically serve a 30-mile radius from our headquarters in Springfield. 
                  Emergency services may be available beyond this range.
                </p>
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-700">30 Miles</div>
                  <div className="text-sm text-gray-600">Standard Service Radius</div>
                </div>
              </div>

              {/* Emergency Note */}
              <div className="bg-red-50 rounded-xl border border-red-100 p-6">
                <h3 className="text-lg font-bold text-red-900 mb-2">Emergency Services</h3>
                <p className="text-red-700 text-sm mb-4">
                  For storm damage and hazardous tree situations, we provide emergency 
                  services throughout the greater metro area.
                </p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-red-700 transition-colors w-full justify-center"
                >
                  <Phone className="h-4 w-4" />
                  <span>Emergency Hotline</span>
                </a>
              </div>

              {/* Service Hours */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Service Hours</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium text-gray-900">{siteConfig.hours.weekday}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium text-gray-900">{siteConfig.hours.saturday}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium text-red-600">{siteConfig.hours.sunday}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find Us
            </h2>
            <p className="text-lg text-gray-600">
              Our headquarters location and service coverage
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="aspect-video bg-gray-100 relative">
              {/* Google Maps Embed Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-100 to-green-50">
                <div className="text-center p-8">
                  <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium mb-2">Google Maps Embed</p>
                  <p className="text-sm text-gray-500 mb-4">
                    To add your map:
                  </p>
                  <ol className="text-left text-sm text-gray-600 space-y-2 max-w-md mx-auto">
                    <li>1. Go to Google Maps</li>
                    <li>2. Search your business address</li>
                    <li>3. Click "Share" → "Embed a map"</li>
                    <li>4. Copy the HTML iframe code</li>
                    <li>5. Paste it in this section</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{siteConfig.name}</h3>
                  <p className="text-gray-600">{siteConfig.address}</p>
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
                >
                  <Navigation className="h-5 w-5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
