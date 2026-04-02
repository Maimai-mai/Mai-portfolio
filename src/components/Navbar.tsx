import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Navbar = () => {
  const navLinks = ["首页", "自我介绍", "案例展示", "个人优势", "Slogen"];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img 
            src="https://picsum.photos/seed/studio-logo/48/48" 
            alt="Logo" 
            className="w-12 h-12 rounded-full"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Nav Links Pill */}
        <div className="liquid-glass rounded-full px-2 py-1.5 flex items-center gap-1 md:gap-4">
          <div className="hidden md:flex items-center gap-6 px-6">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors font-body"
              >
                {link}
              </a>
            ))}
          </div>
          <button className="bg-white text-black rounded-full px-5 py-2 text-sm font-medium flex items-center gap-2 hover:bg-white/90 transition-colors font-body">
            开始感受
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        
        {/* Spacer for balance */}
        <div className="w-12 hidden md:block" />
      </div>
    </nav>
  );
};
