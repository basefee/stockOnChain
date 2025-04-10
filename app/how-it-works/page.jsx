'use client'
import IntegrationFlow from '@/components/integraiton';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import { useEffect } from 'react';

const steps = [
  {
    title: '1. Tokenize Real Stocks',
    description:
      'When a user buys AAPL, we mint a directly backed ERC20 token representing Apple shares.',
  },
  {
    title: '2. Gelato Executes Off-Chain',
    description:
      'Gelato Functions automatically trigger stock purchases using Alpaca API based on on-chain events.',
  },
  {
    title: '3. Price Feeds from Redstone',
    description:
      'Redstone provides decentralized real-time stock pricing to calculate token mint amounts.',
  },
  {
    title: '4. Trade and Own',
    description:
      'Users can hold, transfer, or trade their tokenized stocks — fully backed and verifiable.',
  },
];

const FlowComponent = () => (
  <div className="relative py-16 px-4 sm:px-8 lg:px-16">
    <h2 className="text-3xl font-bold text-white text-center mb-10">🔁 Platform Flow</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 transition transform hover:shadow-xl hover:-translate-y-2 hover:border-cyan-400 hover:bg-gray-700"
          >
            <h3 className="text-xl text-cyan-400 font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
          </div>
      ))}
    </div>
  </div>
);

const Header = () => (
  <header className="bg-gray-900 p-6 text-center border-b border-gray-700 py-[50px]">
    <h1 className="text-4xl font-bold text-white">📘 How onTrade Works</h1>
    <p className="text-gray-400 mt-2">From tokenizing real stocks to off-chain execution — all on-chain visible.</p>
  </header>
);

const InfoBox = ({ title, text }) => (
  <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 w-full max-w-md hover:scale-105 transition my-12">
    <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
    <p className="text-gray-300 text-sm">{text}</p>
  </div>
);

const KeyConcepts = () => (
  <section className="flex flex-col md:flex-row gap-6 justify-center items-center py-12">
    <InfoBox title="ERC20 Tokenization" text="Each real-world stock (e.g., AAPL) is represented by a unique ERC20 token." />
    <InfoBox title="Gelato Functions" text="Automated, off-chain logic that listens and responds to on-chain events." />
    <InfoBox title="Redstone Oracles" text="Reliable pricing data to drive secure and accurate minting of tokens." />
  </section>
);

export default function HowItWorks() {
  useEffect(() => {
    document.body.classList.add('bg-black');
  }, []);

  return (
    <div className="min-h-screen text-white">
      <div className='flex justify-center'>
      <Navbar />
      </div>
      <div>
        <IntegrationFlow />
      </div>
      <Head>
        <title>How It Works - onTrade</title>
      </Head>
      <Header />
      <KeyConcepts />
      <FlowComponent />
      <footer className="text-center text-gray-500 text-sm py-8">© 2025 onTrade. All rights reserved.</footer>
    </div>
  );
}
