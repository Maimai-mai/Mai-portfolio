import { HlsVideo } from './HlsVideo';

export const Stats = () => {
  const stats = [
    { value: "25+", label: "已上线小程序、H5" },
    { value: "10+", label: "已上线网站、B端后台" },
    { value: "90%", label: "客户满意度" },
    { value: "12天", label: "UI平均交付时间" }
  ];

  return (
    <section className="relative w-full py-32 px-6 md:px-16 lg:px-24 bg-black overflow-hidden flex items-center justify-center">
      {/* Background HLS Video */}
      <div className="absolute inset-0 z-0">
        <HlsVideo 
          src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
          autoPlay
          loop
          muted
          style={{ filter: 'saturate(0)' }}
          className="w-full h-full object-cover opacity-30"
        />
        {/* Fades */}
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl">
        <div className="liquid-glass rounded-3xl p-12 md:p-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white mb-2">
                  {stat.value}
                </span>
                <span className="text-white/60 font-body font-light text-sm uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
