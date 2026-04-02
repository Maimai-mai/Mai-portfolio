export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO Luminary",
      quote: "A complete rebuild in five days. The AI understood our brand better than most agencies we've worked with. Truly revolutionary."
    },
    {
      name: "Marcus Webb",
      role: "Head of Growth Arcline",
      quote: "Conversions up 4x since the launch. The real-time optimization is a game changer. We haven't touched the site since it went live."
    },
    {
      name: "Elena Voss",
      role: "Brand Director Helix",
      quote: "They didn't just design our site; they designed our future. The aesthetic is exactly what we wanted—premium, minimal, and fast."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
            客户评价
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white">
            不要只听我们说。
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="liquid-glass rounded-2xl p-8 flex flex-col">
              <p className="text-white/80 font-body font-light text-lg italic mb-8 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="mt-auto">
                <div className="text-white font-body font-medium text-sm mb-1">
                  {t.name}
                </div>
                <div className="text-white/50 font-body font-light text-xs uppercase tracking-wider">
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
