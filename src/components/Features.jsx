import React from 'react';
import { LayoutDashboard, BellRing, Users, LineChart, Newspaper, Zap } from 'lucide-react';

const features = [
  {
    icon: Newspaper,
    title: 'Keep Up',
    desc: 'with the latest news'
  },
  {
    icon: LayoutDashboard,
    title: 'Customize',
    desc: 'your own stock dashboard'
  },
  {
    icon: Zap,
    title: 'Seamless',
    desc: 'Integration with other apps, like TradingView'
  },
  {
    icon: LineChart,
    title: 'Accurate',
    desc: 'real-time stock market data'
  },
  {
    icon: Users,
    title: 'Connect',
    desc: 'With other traders'
  },
  {
    icon: BellRing,
    title: 'Analyse',
    desc: 'with our cutting-edge AI and powertools'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Our Features</h2>
          <p className="mt-2 text-white/70">Everything you need to analyze the market and execute faster.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition p-6">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/10">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-white/70 text-sm">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
