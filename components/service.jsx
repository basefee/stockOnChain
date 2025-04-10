export default function ServicesSection() {
    const services = [
      {
        title: "Tokenized Stock Trading",
        icon: "📈",
        description: "Buy and sell real-world stocks as ERC-20 tokens directly on-chain.",
      },
      {
        title: "Off-Chain Execution",
        icon: "🤖",
        description: "Trades executed via Gelato Functions for seamless blockchain automation.",
      },
      {
        title: "Real-Time Oracles",
        icon: "⏱️",
        description: "Price feeds powered by Redstone for accurate and live stock pricing.",
      },
      {
        title: "Secure Asset Backing",
        icon: "🔒",
        description: "Each token is 1:1 backed with verified real-world stock holdings.",
      },
    ];
  
    return (
      <section className="bg-black py-24 px-4 sm:px-8 lg:px-20">
        <div className="text-center mb-16">
          <p className="text-gray-400 uppercase tracking-wide text-sm">What We Offer</p>
          <h2 className="text-4xl text-white font-light tracking-wide">Our Core Services</h2>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          {services.map((service, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-4 group">
              <div className="bg-blue-600/20 text-blue-400 text-4xl w-24 h-24 flex items-center justify-center rounded-full border-2 border-blue-500 transition duration-300 group-hover:scale-105 group-hover:bg-blue-600/40">
                {service.icon}
              </div>
              <h3 className="text-white text-lg font-medium">{service.title}</h3>
              <p className="text-gray-400 text-sm px-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  