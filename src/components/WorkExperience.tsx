import { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

export const WorkExperience = () => {
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
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-black">
      <div className="max-w-7xl mx-auto">


        {/* Horizontal Timeline */}
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
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
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