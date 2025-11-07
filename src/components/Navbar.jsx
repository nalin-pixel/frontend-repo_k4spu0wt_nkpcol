import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const links = [
    { label: 'Product', href: '#product' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-gray-950/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded bg-gradient-to-tr from-cyan-400 to-fuchsia-500" />
            <span className="font-semibold tracking-tight">IDXTerminal</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-white/80 hover:text-white transition">
                {l.label}
              </a>
            ))}
            <a href="#login" className="rounded-md bg-white text-gray-900 px-4 py-2 text-sm font-medium hover:bg-white/90 transition">
              Login
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="block rounded-md px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white">
                {l.label}
              </a>
            ))}
            <a href="#login" className="block rounded-md bg-white text-gray-900 px-3 py-2 text-sm font-medium">
              Login
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
