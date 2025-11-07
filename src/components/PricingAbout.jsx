import React from 'react';

const plans = [
  {
    name: 'Free',
    price: '$0/month',
    features: [
      'Basic market data',
      'Limited technical indicators',
      'Community access',
      'Basic charting tools',
    ],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$29/month',
    features: [
      'All Free features',
      'Advanced technical analysis',
      'Real-time market alerts',
      'TradingView integration',
      'Priority support',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom/month',
    features: [
      'All Pro features',
      'Custom API access',
      'Dedicated account manager',
      'White-label solutions',
      'Advanced security features',
    ],
    highlight: false,
  },
];

const PricingCard = ({ plan }) => {
  return (
    <div className={`rounded-2xl border ${plan.highlight ? 'border-cyan-400/40 bg-cyan-400/10' : 'border-white/10 bg-white/[0.03]'} p-6 flex flex-col`}> 
      <div className="flex items-baseline justify-between">
        <h3 className="text-xl font-semibold">{plan.name}</h3>
        <span className="text-sm text-white/70">{plan.price}</span>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button className={`mt-6 w-full rounded-md px-4 py-2 text-sm font-medium ${plan.highlight ? 'bg-white text-gray-900' : 'bg-white/10 text-white hover:bg-white/20'} transition`}>
        {plan.highlight ? 'Start Pro' : 'Choose Plan'}
      </button>
    </div>
  );
};

const PricingAbout = () => {
  return (
    <section id="pricing" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Choose Your Plan</h2>
          <p className="mt-2 text-white/70">Simple, transparent pricing for every trader.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <PricingCard key={p.name} plan={p} />
          ))}
        </div>

        <div id="about" className="mt-20 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold">About IDXTerminal</h3>
            <p className="mt-3 text-white/70">Professional trading platform for the Indonesian stock market.</p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold">Our Mission</h4>
              <p className="mt-2 text-white/70">IDXTerminal is dedicated to democratizing access to the Indonesian stock market by providing professional-grade trading tools and market insights to investors of all levels.</p>
            </div>
            <div>
              <h4 className="font-semibold">Our Vision</h4>
              <p className="mt-2 text-white/70">We envision a future where every investor has equal access to market data and analysis tools, enabling them to make informed investment decisions in the Indonesian capital market.</p>
            </div>
            <div>
              <h4 className="font-semibold">Why Us</h4>
              <ul className="mt-2 space-y-2 text-white/70 text-sm">
                <li>Real-time Data</li>
                <li>Advanced Analysis</li>
                <li>Community Driven</li>
              </ul>
            </div>
          </div>
        </div>

        <footer className="mt-16 border-t border-white/10 pt-8 text-sm text-white/60 grid sm:grid-cols-3 gap-4">
          <div>
            <div className="font-semibold text-white">IDXTerminal</div>
            <p className="mt-2">© 2024 IDXTerminal. All rights reserved.</p>
          </div>
          <div className="space-y-1">
            <div className="font-medium text-white/80">Product</div>
            <a className="block hover:text-white" href="#product">Product</a>
            <a className="block hover:text-white" href="#features">Features</a>
            <a className="block hover:text-white" href="#pricing">Pricing</a>
            <a className="block hover:text-white" href="#about">About</a>
          </div>
          <div className="space-y-1">
            <div className="font-medium text-white/80">Legal</div>
            <a className="block hover:text-white" href="#">Privacy Policy</a>
            <a className="block hover:text-white" href="#">Terms of Service</a>
            <a className="block hover:text-white" href="#">Contact Us</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default PricingAbout;
