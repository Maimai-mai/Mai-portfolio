interface PartnersProps {
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
}

export const Partners = ({ onSelectCategory, selectedCategory }: PartnersProps) => {
  const partners = ["UI设计", "平面设计", "AIGC", "电商设计", "插画"];

  return (
    <section className="w-full py-12 flex flex-col items-center bg-black">
      <div className="liquid-glass rounded-full px-4 py-1.5 text-xs font-medium text-white/60 font-body mb-8">
        全品类设计分类
      </div>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 px-6">
        {partners.map((partner) => (
          <span 
            key={partner} 
            className={`text-2xl md:text-3xl font-heading italic transition-colors cursor-pointer ${selectedCategory === partner ? 'text-white' : 'text-white/40 hover:text-white'}`}
            onClick={() => onSelectCategory(partner)}
          >
            {partner}
          </span>
        ))}
      </div>
    </section>
  );
};
