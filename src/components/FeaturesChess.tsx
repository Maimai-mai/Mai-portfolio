import { ArrowUpRight, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useState, useEffect } from 'react';

interface FeaturesChessProps {
  category: string;
}

export const FeaturesChess = ({ category }: FeaturesChessProps) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  
  // 为每个分类定义案例数据
  const categoryItems = {
    "UI设计": [
      {
        title: "数字藏品，线上交易平台。",
        description: "促进NFT数字资产的流通和交易，区别于传统数字资产的不同，也是区块链技术的重要应用之一。",
        image: "https://raw.githubusercontent.com/Maimai-mai/portfolio/refs/heads/main/case.one%201.png",
        detailImage: "https://raw.githubusercontent.com/Maimai-mai/portfolio/refs/heads/main/case.one%201-detail.png"
      },
      {
        title: "房地产商，经营小程序。",
        description: "意在为已购房业主提供全方位、个性化的住房体验，提升居住品质，构建和谐社区。",
        image: "https://raw.githubusercontent.com/Maimai-mai/portfolio/refs/heads/main/case.one%202.png",
        detailImage: "https://raw.githubusercontent.com/Maimai-mai/portfolio/refs/heads/main/case.one%203-detail.png"
      },
      {
        title: "同济医院，多端设计。",
        description: "医院资料收集库网站是专为医疗机构设计的综合信息管理平台。整合、可靠、易访，提升信息管理能力。",
        image: "https://raw.githubusercontent.com/Maimai-mai/portfolio/refs/heads/main/case.one%203%20.png",
        detailImage: "https://raw.githubusercontent.com/Maimai-mai/portfolio/refs/heads/main/case.one%202-detail.png"
      }
    ],
    "平面设计": [
      {
        title: "品牌标志设计",
        description: "为客户创建独特的品牌标志，传达品牌价值观和视觉识别系统。",
        image: "https://raw.githubusercontent.com/Maimai-mai/portfolio/refs/heads/main/case.two%20%E5%B9%B3%E9%9D%A2%E8%AE%BE%E8%AE%A1.png",
        detailImage: "https://raw.githubusercontent.com/Maimai-mai/portfolio/refs/heads/main/case.two%20%E5%B9%B3%E9%9D%A2%E8%AE%BE%E8%AE%A1%20-detail.png"
      }
    ],
    "AIGC": [
      {
        title: "AI生成艺术",
        description: "使用人工智能技术生成独特的艺术作品，探索艺术与科技的融合。",
        image: "https://raw.githubusercontent.com/Maimai-mai/portfolio/refs/heads/main/case.three%20AIGC.png",
        detailImage: "https://raw.githubusercontent.com/Maimai-mai/portfolio/refs/heads/main/case.three%20AIGC-detail.png"
      },
    ],
    "电商设计": [
      {
        title: "电商网站设计",
        description: "设计用户友好的电商网站，提升用户体验和转化率。",
        image: "https://raw.githubusercontent.com/Maimai-mai/portfolio/refs/heads/main/case.four%20%E7%94%B5%E5%95%86.png",
        detailImage: "https://raw.githubusercontent.com/Maimai-mai/portfolio/refs/heads/main/case.four%20%E7%94%B5%E5%95%86detail.png"
      },
    ],
    "插画": [
      {
        title: "商业插画",
        description: "为商业项目创作专业的插画，增强品牌视觉效果。",
        image: "https://raw.githubusercontent.com/Maimai-mai/portfolio/refs/heads/main/case.five%20%E6%8F%92%E7%94%BB.png",
        detailImage: "https://raw.githubusercontent.com/Maimai-mai/portfolio/refs/heads/main/case.five%20%E6%8F%92%E7%94%BB-detail.png"
      },
    ]
  };
  
  // 获取当前分类的案例数据
  const items = categoryItems[category as keyof typeof categoryItems] || categoryItems["UI设计"];
  
  // 预加载详情页图片
  useEffect(() => {
    const preloadImages = async () => {
      const images = items.map(item => item.detailImage);
      
      for (const src of images) {
        try {
          const img = new Image();
          img.src = src;
          // 可以添加一个小的延迟，避免一次性加载所有图片导致页面卡顿
          await new Promise(resolve => setTimeout(resolve, 100));
        } catch (error) {
          console.error('Error preloading image:', error);
        }
      }
    };
    
    // 当分类变化时重新预加载图片
    preloadImages();
  }, [category, items]);
  
  const openModal = (index: number) => {
    setSelectedItem(index);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-black relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
      >
        <source src="https://raw.githubusercontent.com/Maimai-mai/portfolio/main/feature-video2.mp4" type="video/mp4" />
      </video>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
            {category}案例
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white">
            专业{category}。零复杂度。
          </h2>
        </div>

        {/* Dynamic Rows */}
        {items.map((item, index) => (
          <div 
            key={index} 
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32 cursor-pointer hover:scale-[1.02] transition-transform duration-300 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            onClick={() => openModal(index)}
          >
            {index % 2 === 0 ? (
              <>
                <div className="flex flex-col items-start">
                  <h3 className="text-3xl md:text-4xl font-heading italic text-white mb-6">
                    {item.title}
                  </h3>
                  <p className="text-white/60 font-body font-light text-lg mb-8">
                    {item.description}
                  </p>
                  <button className="liquid-glass-strong rounded-full px-6 py-3 text-white font-body flex items-center gap-2 hover:bg-white/5 transition-all">
                    了解更多
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="liquid-glass rounded-2xl overflow-hidden aspect-video">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-80"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="liquid-glass rounded-2xl overflow-hidden aspect-video lg:order-2">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-80"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col items-start lg:order-1">
                  <h3 className="text-3xl md:text-4xl font-heading italic text-white mb-6">
                    {item.title}
                  </h3>
                  <p className="text-white/60 font-body font-light text-lg mb-8">
                    {item.description}
                  </p>
                  <button className="liquid-glass-strong rounded-full px-6 py-3 text-white font-body flex items-center gap-2 hover:bg-white/5 transition-all">
                    了解更多
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </>
            )}
          </div>
        ))}

        {/* Modal */}
        {selectedItem !== null && items[selectedItem] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeModal}></div>
            <div className="relative bg-black border border-white/20 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto animate-slide-in">
              <button 
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 z-10"
                onClick={closeModal}
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <div className="p-8">
                <h3 className="text-3xl md:text-4xl font-heading italic text-white mb-6">
                  {items[selectedItem].title}
                </h3>
                <p className="text-white/60 font-body font-light text-lg mb-8">
                  {items[selectedItem].description}
                </p>
                <div className="space-y-4">
                  {/* Video - Only show for 数字藏品 case */}
                  {items[selectedItem].title === "数字藏品，线上交易平台。" && (
                    <div className="liquid-glass rounded-2xl overflow-hidden bg-white/5">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto object-cover"
                      >
                        <source src="https://raw.githubusercontent.com/Maimai-mai/portfolio/main/case.one%201-video.mp4" type="video/mp4" />
                      </video>
                    </div>
                  )}
                  {/* Image */}
                  <div className="liquid-glass rounded-2xl overflow-hidden bg-white/5">
                    <img 
                      src={items[selectedItem].detailImage} 
                      alt={items[selectedItem].title} 
                      className="w-full h-auto object-cover transition-opacity duration-500"
                      loading="eager"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
