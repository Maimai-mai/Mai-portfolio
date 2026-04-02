import { motion } from 'motion/react';
import { ArrowUpRight, Play } from 'lucide-react';
import { BlurText } from './BlurText';

export const Hero = () => {
  return (
    <section className="relative h-[1000px] w-full overflow-visible bg-black flex flex-col items-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero_bg.jpeg"
        className="absolute top-0 w-full h-full object-cover z-0 opacity-80"
      >
        <source src="https://github.com/Maimai-mai/portfolio/raw/refs/heads/main/Hero%20video.MP4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/0 z-0" />
      <div className="absolute bottom-0 left-0 right-0 z-[1] h-[300px] bg-gradient-to-t from-black to-transparent" />

      {/* Content */}
      <div className="relative z-10 pt-[150px] flex flex-col items-center text-center px-6 max-w-5xl">
        {/* Badge Pill */}
        <div className="liquid-glass rounded-full px-4 py-1.5 flex items-center gap-2 mb-8">
          <span className="bg-white text-black text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">新展示</span>
          <span className="text-xs font-medium text-white font-body">全品类设计Portfolio集合</span>
        </div>

        {/* Heading */}
        <BlurText 
          text="我的全新视觉流" 
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] tracking-[-4px] mb-8"
          delay={0.2}
        />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-white/60 font-body font-light text-lg md:text-xl max-w-2xl mb-12"
        >
          令人惊艳的设计。卓越的性能。由AI构建，专家优化。
          AI时代重新再定义的网页设计。
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <button className="liquid-glass-strong rounded-full px-8 py-4 text-white font-body flex items-center gap-2 hover:bg-white/5 transition-all group">
            开始感受
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <button className="text-white font-body flex items-center gap-2 hover:text-white/80 transition-colors">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
              <Play className="w-4 h-4 fill-current" />
            </div>
            观看视频
          </button>
        </motion.div>
      </div>

      {/* Partners bar placeholder at bottom of hero */}
      <div className="mt-auto w-full pb-8 pt-16">
        {/* This will be filled by the Partners component */}
      </div>
    </section>
  );
};
