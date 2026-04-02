import { ArrowUpRight } from 'lucide-react';
import { HlsVideo } from './HlsVideo';

export const Footer = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Background HLS Video */}
      <div className="absolute inset-0 z-0">
        <HlsVideo 
          src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-40"
        />
        {/* Fades */}
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-48 pb-12 px-6 md:px-16 lg:px-24 flex flex-col items-center">
        <div className="text-center max-w-4xl mb-24">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white mb-8 leading-[0.8]">
            您的下一个网站从这里开始。
          </h2>
          <p className="text-white/60 font-body font-light text-xl mb-12">
            预约免费策略咨询。了解AI驱动设计的强大功能。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="liquid-glass-strong rounded-full px-10 py-5 text-white font-body flex items-center gap-2 hover:bg-white/5 transition-all group text-lg">
              预约咨询
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button className="bg-white text-black rounded-full px-10 py-5 text-lg font-medium hover:bg-white/90 transition-colors font-body">
              查看价格
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="w-full max-w-7xl mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white/40 text-xs font-body">
            © 2026 工作室。保留所有权利。
          </div>
          <div className="flex items-center gap-8">
            {["隐私政策", "服务条款", "联系我们"].map((link) => (
              <a 
                key={link} 
                href="#" 
                className="text-white/40 text-xs font-body hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
