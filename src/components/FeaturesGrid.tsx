import { Zap, Palette, BarChart3, Shield } from 'lucide-react';

export const FeaturesGrid = () => {
  const features = [
    {
      icon: Zap,
      title: "极致细节打磨",
      description: "多品类视觉设计，细节把控品质。"
    },
    {
      icon: Palette,
      title: "全链路落地",
      description: "5 年多领域经验，全流程落地交付"
    },
    {
      icon: BarChart3,
      title: "数据驱动设计",
      description: "数据支撑决策，设计兼顾转化与体验。"
    },
    {
      icon: Shield,
      title: "高效交付",
      description: "熟悉多终端适配，高效响应迭代需求。"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
            为什么选择我
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
