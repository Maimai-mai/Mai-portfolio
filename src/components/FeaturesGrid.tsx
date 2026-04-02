import { Zap, Palette, BarChart3, Shield } from 'lucide-react';

export const FeaturesGrid = () => {
  const features = [
    {
      icon: Zap,
      title: "几天，而非数月",
      description: "从概念到上线，重新定义速度。"
    },
    {
      icon: Palette,
      title: "精心打造",
      description: "每一个细节都经过深思熟虑。每一个元素都经过精心打磨。"
    },
    {
      icon: BarChart3,
      title: "为转化而生",
      description: "布局基于数据。决策基于性能。"
    },
    {
      icon: Shield,
      title: "默认安全",
      description: "企业级保护作为标准配置。"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
            为什么选择我们
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white">
            差异就是一切。
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="liquid-glass rounded-2xl p-8 flex flex-col items-start group">
              <div className="liquid-glass-strong rounded-full w-12 h-12 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-heading italic text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/60 font-body font-light text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
