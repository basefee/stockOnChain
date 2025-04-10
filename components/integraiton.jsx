import { motion } from "framer-motion";

export default function IntegrationFlow() {
  const integrationsTop = ["Gelato", "Redstone", "Alpaca", "Sepolia", "ETH", "MockUSDC"];
  const integrationsBottom = ["Next.js", "Tailwind", "Express", "Ethers.js", "Node.js", "TypeScript"];

  return (
    <section className="relative bg-gradient-to-b from-[#0d0f1c] to-[#0b0e19] py-24 px-4 sm:px-8 lg:px-20 overflow-hidden">
      <div className="text-center mb-24">
        <h2 className="text-4xl font-bold text-white mb-4">How onTrade Comes Together</h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm">
          All the moving parts that power real-world asset trading on-chain — seamlessly connected.
        </p>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        {/* Animated SVG lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
          {integrationsTop.map((_, i) => (
            <path
              key={i}
              d={`M500,300 Q500,200 ${200 + i * 130},100`}
              stroke="#3b82f6"
              strokeWidth="1"
              fill="none"
              className="animate-pulse"
              strokeOpacity="0.2"
            />
          ))}
          {integrationsBottom.map((_, i) => (
            <path
              key={i}
              d={`M500,300 Q500,400 ${200 + i * 130},500`}
              stroke="#3b82f6"
              strokeWidth="1"
              fill="none"
              className="animate-pulse"
              strokeOpacity="0.2"
            />
          ))}
        </svg>

        {/* Top Row */}
        <div className="flex flex-wrap justify-center gap-6 mb-20 relative z-10">
          {integrationsTop.map((name, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="bg-[#131822] text-blue-300 px-4 py-2 rounded-xl text-sm shadow-md hover:bg-blue-800/30 transition"
            >
              {name}
            </motion.div>
          ))}
        </div>

        {/* Center Circle */}
        <div className="relative z-20">
          <div className="absolute inset-0 animate-ping rounded-full bg-blue-400 opacity-20 w-32 h-32" />
          <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center text-white text-xl font-semibold shadow-2xl z-10">
            onTrade
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-wrap justify-center gap-6 mt-20 relative z-10">
          {integrationsBottom.map((name, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: idx * 0.05 }}
              className="bg-[#131822] text-blue-300 px-4 py-2 rounded-xl text-sm shadow-md hover:bg-blue-800/30 transition"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
