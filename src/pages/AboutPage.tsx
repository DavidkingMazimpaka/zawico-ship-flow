import { Button } from "@/components/UI/button";
import MainLayout from "@/components/Layout/MainLayout";

const AboutPage = () => {
  const values = [
    {
      title: "Reliability",
      description:
        "We deliver on our promises, ensuring consistent and dependable service across all shipping routes.",
      icon: "🎯",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Transparency",
      description:
        "Our clients have full visibility into shipping processes, costs, and timelines.",
      icon: "🔍",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      title: "Customer Focus",
      description:
        "We put our customers first, tailoring solutions to meet their unique logistics needs.",
      icon: "❤️",
      gradient: "from-rose-500 to-pink-600",
    },
    {
      title: "Innovation",
      description:
        "We continuously improve our services through technology and creative solutions.",
      icon: "💡",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      title: "Sustainability",
      description:
        "We're committed to reducing the environmental impact of global shipping.",
      icon: "🌱",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "Global Expertise",
      description:
        "Our local knowledge in global markets ensures smooth operations worldwide.",
      icon: "🌍",
      gradient: "from-purple-500 to-violet-600",
    },
  ];

  return (
    <MainLayout>
      <section className="bg-brand-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-blue-600">
                About Za.w.i.co.Ltd
              </h1>
              <p className="text-base md:text-lg text-neutral-700 mb-4 md:mb-6">
                Za.w.i.co.Ltd is a global logistics and shipping company dedicated to connecting businesses and individuals worldwide through reliable, efficient, and innovative shipping solutions.
              </p>
              <p className="text-base md:text-lg text-neutral-700 mb-4 md:mb-6">
                Since our founding in 2022, we've grown from a small local courier service to an international logistics provider with operations in over 5 countries, built on the principles of reliability, transparency, and customer focus.
              </p>
              <Button
                variant="default"
                size="default"
                className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </div>
            <div className="relative bg-neutral-50 rounded-lg overflow-hidden aspect-square md:aspect-[4/3] flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0"></div>
              <img
                src="/04.jpg"
                alt="Za.w.i.co.Ltd Company Overview"
                className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm shadow-lg transform -translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                  Za.w.i.co.Ltd
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/mission.jpg" alt="Mission Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-10 left-1/2 w-80 h-80 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-8 shadow-lg">
              <span className="text-3xl">🚀</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                To simplify global logistics by providing accessible, reliable, and sustainable shipping solutions that enable businesses of all sizes to connect with markets worldwide.
              </p>
              <div className="mt-8 flex justify-center">
                <div className="flex items-center space-x-2 text-indigo-600">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className={`relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl filter drop-shadow-sm">{value.icon}</span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 group-hover:text-gray-900 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed group-hover:text-gray-700 transition-colors">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-10 text-gray-800">
            Global Reach In Action
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-12">
            See our logistics team in motion — delivering excellence across land, sea, and air. These snapshots show how Za.w.i.co.Ltd is making global logistics simple.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="/gallery1.jpg" alt="Truck Fleet" className="rounded-xl shadow-md object-cover w-full h-48" />
            <img src="/gallery2.jpg" alt="Port Operations" className="rounded-xl shadow-md object-cover w-full h-48" />
            <img src="/gallery3.jpg" alt="Warehouse Workflow" className="rounded-xl shadow-md object-cover w-full h-48" />
            <img src="/gallery4.jpg" alt="Air Cargo" className="rounded-xl shadow-md object-cover w-full h-48" />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;
