import { CheckCircle, Award, Users, Calendar } from "lucide-react";
import { siteConfig, aboutImages } from "@/lib/data";

export const metadata = {
  title: "About Us | AYF Tree Service",
  description: "Learn about AYF Tree Service. Over 15 years of experience serving our community with licensed and insured tree care experts.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About AYF Tree Service
            </h1>
            <p className="text-xl text-gray-200">
              Dedicated to providing exceptional tree care services with integrity, 
              professionalism, and respect for our environment.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutImages.main}
                alt="AYF Tree Service team"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2008, {siteConfig.name} began with a simple mission: 
                  to provide safe, professional tree care services that prioritize 
                  customer satisfaction and environmental responsibility.
                </p>
                <p>
                  What started as a small family operation has grown into a trusted 
                  name in tree services, serving thousands of residential and 
                  commercial clients throughout the region.
                </p>
                <p>
                  Our team of certified arborists and skilled technicians brings 
                  decades of combined experience to every job, ensuring your trees 
                  receive the expert care they deserve.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700">5k+</div>
                  <div className="text-sm text-gray-600">Trees Serviced</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700">98%</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🛡️",
                title: "Safety First",
                description: "We prioritize the safety of our team, your property, and your family on every job."
              },
              {
                icon: "🌿",
                title: "Environmental Care",
                description: "Responsible practices that protect and preserve our natural environment."
              },
              {
                icon: "🤝",
                title: "Integrity",
                description: "Honest pricing, clear communication, and standing behind our work."
              },
              {
                icon: "⭐",
                title: "Excellence",
                description: "Commitment to the highest standards of workmanship and customer service."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Licensed & Certified
              </h2>
              <p className="text-gray-600 mb-8">
                We maintain all required licenses and certifications to provide 
                professional tree care services. Our credentials include:
              </p>

              <ul className="space-y-4">
                {[
                  "ISA Certified Arborists on Staff",
                  "Fully Licensed & Insured",
                  "OSHA Safety Certified",
                  "TCIA Accredited Company",
                  "Licensed Pesticide Applicators",
                  "Workers' Compensation Coverage"
                ].map((cert, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <Award className="h-12 w-12 text-green-700 mx-auto mb-3" />
                <div className="font-bold text-gray-900">ISA Certified</div>
                <div className="text-sm text-gray-600">Arborists</div>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <Users className="h-12 w-12 text-green-700 mx-auto mb-3" />
                <div className="font-bold text-gray-900">TCIA</div>
                <div className="text-sm text-gray-600">Accredited</div>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <Calendar className="h-12 w-12 text-green-700 mx-auto mb-3" />
                <div className="font-bold text-gray-900">15+ Years</div>
                <div className="text-sm text-gray-600">Experience</div>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <CheckCircle className="h-12 w-12 text-green-700 mx-auto mb-3" />
                <div className="font-bold text-gray-900">Fully</div>
                <div className="text-sm text-gray-600">Insured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Skilled professionals dedicated to exceptional tree care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {aboutImages.team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="relative h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-green-700 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Equipment
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We invest in the best tools and machinery to ensure safe, efficient work
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {aboutImages.equipment.map((img, index) => (
              <div key={index} className="relative h-64 rounded-xl overflow-hidden shadow-md">
                <img
                  src={img}
                  alt={`Equipment ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
