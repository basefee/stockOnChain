import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/service";
import TeamSection from "@/components/team";

// pages/about.js
export default function About() {
    return (
      <div className="bg-black text-white min-h-screen px-6 lg:px-32 font-serif tracking-wide">
        <div className="flex justify-center">
            <Navbar />
        </div>
        <div className="text-center pt-24">
          <div className="w-2 h-2 bg-white mx-auto mb-6 rounded-full" />
          <h1 className="text-5xl md:text-7xl leading-tight font-light">
            REVOLUTIONIZING <br />
            REAL-WORLD ASSET <br />
            TRADING ON-CHAIN
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-sm md:text-base">
            at <span className="uppercase tracking-wider text-white font-semibold">onTrade</span>, we&apos;re pioneering a new era of decentralized finance by enabling
            directly backed trading of tokenized real-world stocks on-chain — no synthetic abstractions, no opacity.
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 text-center">
          <div className="space-y-3">
            <h2 className="text-2xl font-medium">🔒 True Ownership</h2>
            <p className="text-gray-400 text-sm">
              Tokenized assets are backed 1:1 with real stocks, ensuring trustless on-chain representation.
            </p>
          </div>
  
          <div className="space-y-3">
            <h2 className="text-2xl font-medium">📈 Seamless Execution</h2>
            <p className="text-gray-400 text-sm">
              Using <span className="text-white font-medium">Gelato Functions</span> to perform off-chain trades, while maintaining on-chain transparency.
            </p>
          </div>
  
          <div className="space-y-3">
            <h2 className="text-2xl font-medium">📊 Real-time Pricing</h2>
            <p className="text-gray-400 text-sm">
              Powered by <span className="text-white font-medium">Redstone Oracles</span>, our stock feeds stay current and accurate — every second.
            </p>
          </div>
        </div>

        <div className="border-t mt-20 border-gray-600">
            <ServicesSection />
        </div>
  
        <div>
            <TeamSection />
        </div>

        <div className="mt-32 text-center border-t border-gray-700 pt-10 pb-10">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} onTrade. Empowering DeFi with real-world value.
          </p>
        </div>
      </div>
    );
  }
  