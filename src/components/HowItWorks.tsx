import { ArrowUpRight, X } from 'lucide-react';
import { HlsVideo } from './HlsVideo';
import { useState } from 'react';

export const HowItWorks = () => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);
  
  const experiences = [
    {
      id: 1,
      period: '2023 - 至今',
      title: '高级UI/UX设计师',
      company: '科技有限公司',
      description: '负责公司产品的UI/UX设计，包括用户研究、原型设计、视觉设计等。与产品团队紧密合作，确保设计方案符合用户需求和业务目标。',
      achievements: [
        '设计了公司核心产品的用户界面，提升了用户满意度30%',
        '建立了设计系统，提高了设计效率和一致性',
        '主导了多次用户研究，为产品决策提供数据支持'
      ]
    },
    {
      id: 2,
      period: '2021 - 2023',
      title: 'UI设计师',
      company: '互联网公司',
      description: '参与公司多个项目的UI设计工作，包括网站、移动应用等。与开发团队协作，确保设计方案的实现质量。',
      achievements: [
        '设计了公司官网，提高了转化率25%',
        '参与设计了移动应用，获得了App Store推荐',
        '优化了用户界面，减少了用户操作步骤'
      ]
    },
    {
      id: 3,
      period: '2019 - 2021',
      title: '初级设计师',
      company: '创意 agency',
      description: '参与各种设计项目，包括品牌设计、平面设计、网页设计等。学习并应用设计原则和工具，提升设计技能。',
      achievements: [
        '参与设计了多个品牌标识，获得客户好评',
        '协助完成了多个网站设计项目',
        '学习并掌握了各种设计工具和技术'
      ]
    }
  ];
  
  const openModal = (index: number) => {
    setSelectedExperience(index);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedExperience(null);
    document.body.style.overflow = 'auto';
  };
  return (
    <section className="relative min-h-[700px] w-full py-32 px-6 md:px-16 lg:px-24 bg-black overflow-hidden flex items-center justify-center group">
      {/* Background HLS Video */}
      <div className="absolute inset-0 z-0">
        <HlsVideo 
          src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-40"
        />
        {/* Fades */}
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-6">
          自我介绍
        </div>
        <div className="relative mb-6 flex items-center justify-center">
          <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] md:text-[clamp(2.25rem,4vw,3.25rem)] lg:text-[clamp(2.75rem,5vw,3.75rem)] font-heading italic text-white transition-all duration-300 group-hover:translate-x-16">
            Designer.
          </h2>
          <div className="relative mx-2 overflow-hidden w-0 group-hover:w-40 transition-all duration-500 ease-out flex items-center justify-center">
            <img 
              src="https://raw.githubusercontent.com/Maimai-mai/portfolio/cba67ab20d8e56a1b6474db00fba829717677b3b/me.JPG" 
              alt="Designer DAI" 
              className="w-40 h-40 object-cover rounded-full border-2 border-white/20 shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-bounce-twice" 
            />
          </div>
          <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] md:text-[clamp(2.25rem,4vw,3.25rem)] lg:text-[clamp(2.75rem,5vw,3.75rem)] font-heading italic text-white transition-all duration-300 group-hover:-translate-x-16">
            DAI
          </h2>
        </div>
        <p className="text-white/60 font-body font-light text-lg max-w-2xl mb-10">
          分享您的愿景。我们的AI处理其余的一切——线框图、设计、代码、上线。
          仅需几天，而非数月。
        </p>
        
        
        {/* Work Experience */}
        <div className="mt-20 w-full">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/20 transform -translate-y-1/2"></div>

            {/* Timeline Items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id}
                  className="liquid-glass rounded-2xl p-8 hover:scale-105 hover:translate-y-[-10px] transition-all duration-300 cursor-pointer"
                  onClick={() => openModal(index)}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex justify-center mb-6">
                    <div className="w-4 h-4 rounded-full bg-white border-4 border-black"></div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-start">
                    <span className="text-white/60 text-sm font-body mb-2">{exp.period}</span>
                    <h3 className="text-2xl font-heading italic text-white mb-2">{exp.title}</h3>
                    <p className="text-white/80 font-body mb-4">{exp.company}</p>
                    <p className="text-white/60 font-body font-light text-sm mb-6">{exp.description}</p>
                    <button className="flex items-center gap-2 text-white font-body text-sm hover:text-white/80 transition-colors">
                      查看详情
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal */}
        {selectedExperience !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeModal}></div>
            <div className="relative bg-black border border-white/20 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <button 
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 z-10"
                onClick={closeModal}
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-heading italic text-white mb-2">
                      {experiences[selectedExperience].title}
                    </h3>
                    <p className="text-white/80 font-body mb-2">
                      {experiences[selectedExperience].company}
                    </p>
                  </div>
                  <span className="text-white/60 text-sm font-body">
                    {experiences[selectedExperience].period}
                  </span>
                </div>
                <p className="text-white/60 font-body font-light text-lg mb-8">
                  {experiences[selectedExperience].description}
                </p>
                <h4 className="text-xl font-heading italic text-white mb-4">主要成就</h4>
                <ul className="space-y-3 mb-8">
                  {experiences[selectedExperience].achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 min-w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                      <span className="text-white/60 font-body">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
