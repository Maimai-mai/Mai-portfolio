import { ArrowUpRight, X } from 'lucide-react';
import { HlsVideo } from './HlsVideo';
import { useState } from 'react';

export const HowItWorks = () => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);
  
  const experiences = [
    {
      id: 1,
      period: '2024.08-2025.10',
      title: '高级UI/UX设计师',
      company: '城晟燃气有限公司',
      description: '负责公司产品的UI/UX设计，包括用户研究、原型设计、视觉设计等。与产品团队紧密合作，确保设计方案符合用户需求和业务目标。',
      achievements: [
        '小程序：到家（清洗、安装、维修）服务类小程序0到1界面设计、迭代改版；banner、跳转页、icon设计；',
        'C端、B端网站：燃气领域网站改版、清洗到家官网0到1设计、智慧城市燃气管理平台页面改版；',
        '与开发对接：协助产品共同完成交互界面的落地、审查、上线工作；'
      ]
    },
    {
      id: 2,
      period: '2021.04-2024.03',
      title: 'UI设计师',
      company: '般若互动科技有限公司',
      description: '参与公司多个项目的UI设计工作，包括网站、移动应用等。与开发团队协作，确保设计方案的实现质量。',
      achievements: [
        '网页设计：针对不同终端，负责响应式设计，包括医院、政府、企业等门户网站，后台管理平台设计； ',
        '小程序、h5设计：审查优化产品功能架构，负责制作原型图、高保真绘制。含房地产类、社群活动类小程序',
        '工作成果：在职期间，独立完成8个门户网站设计、小程序项目10+，h5设计34+，'
      ]
    },
    {
      id: 3,
      period: '2020.07-2020.11',
      title: '初级UI设计师',
      company: '箭火网络技本股份有限公司',
      description: '参与各种设计项目，包括品牌设计、平面设计、网页设计等。学习并应用设计原则和工具，提升设计技能。',
      achievements: [
        '设计优化：负责APP、商城类小程序部分UI设计（包括交互界面高低保真图、banner、icon设计）',
        '平面设计：负责宣传招标MG视频制作、公司平面业务（LOGO、VI手册、宣传册、电商详情图）',
        '后期跟进：跟进UI及网页迭代优化、对接开发部门、视觉还原度判断等工作，高度实现产品效果。'
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
          全链路设计师，主导过25+小程序、门户网站、B端后台、H5的0到1的设计。了解基础HTML、CSS框架。同时大力将AIGC技术融入工作流
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
