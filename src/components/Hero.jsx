import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative" id="product">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-24">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <Sparkles size={14} className="text-cyan-300" />
              <span>Indonesia's Premier Trading Terminal</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Trade smarter with IDXTerminal
            </h1>
            <p className="mt-4 text-white/80 max-w-xl">
              Real-time IDX market data, advanced analysis, and a community of traders — all in one playful, modern terminal.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-md bg-white text-gray-900 px-5 py-3 text-sm font-medium hover:bg-white/90">
                <Rocket size={18} /> Get Started
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10">
                Explore Features
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-[360px] sm:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-gray-950/20 to-transparent pointer-events-none" />
              <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
