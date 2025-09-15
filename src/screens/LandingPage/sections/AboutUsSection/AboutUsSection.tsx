import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { AnimatedSection } from "../../../../components/AnimatedSection";

const missionVisionData = [
  {
    icon: "/mission.svg",
    title: "Our Mission",
    description:
      "To drive Nepal's industrial and economic development by investing in diverse sectors, fostering innovation, and maintaining a steadfast commitment to quality, sustainability, and community welfare.",
  },
  {
    icon: "/vision.svg",
    title: "Our Vision",
    description:
      "To be Nepal's leading industrial conglomerate, recognized for pioneering advancements, delivering excellence across sectors, and contributing significantly to the nation's progress.",
  },
];

const statisticsData = [
  {
    title: "INDUSTRY EXPERIENCE",
    value: "40+",
    description: "years of expertise",
    position: "top-0 left-[656px]",
  },
  {
    title: "JOBS CREATED",
    value: "1,000+",
    description: "opportunities generated",
    position: "top-[378px] left-[656px]",
  },
  {
    title: "PROJECTS COMPLETED",
    value: "120+",
    description: "successful projects",
    position: "top-0 left-[984px]",
  },
];

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-2 px-20 py-[100px] relative overflow-hidden">
      <div className="flex flex-col items-start gap-[100px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
          <AnimatedSection animation="fade-in-left">
            <Badge
              variant="outline"
              className="inline-flex flex-col items-start gap-2 px-4 py-2 relative flex-[0_0_auto] rounded-[32px] border border-solid border-[#ff0000] hover:bg-red-50 transition-all duration-300 hover:scale-105 animate-pulse-glow"
            >
              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                <div className="relative w-1.5 h-1.5 bg-colorbrand-brand-primary rounded-[3px] animate-pulse" />
                <div className="relative w-fit mt-[-1.00px] font-cap-c3-medium-16-130 font-[number:var(--cap-c3-medium-16-130-font-weight)] text-colortext-text-primary text-[length:var(--cap-c3-medium-16-130-font-size)] tracking-[var(--cap-c3-medium-16-130-letter-spacing)] leading-[var(--cap-c3-medium-16-130-line-height)] whitespace-nowrap [font-style:var(--cap-c3-medium-16-130-font-style)]">
                  WHO WE ARE
                </div>
              </div>
            </Badge>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-right" delay={200}>
            <div className="flex flex-col w-[850px] items-start gap-10 relative">
              <h2 className="relative self-stretch mt-[-1.00px] font-heading-h2-bold-40-130 font-[number:var(--heading-h2-bold-40-130-font-weight)] text-colortext-text-primary text-[length:var(--heading-h2-bold-40-130-font-size)] tracking-[var(--heading-h2-bold-40-130-letter-spacing)] leading-[var(--heading-h2-bold-40-130-line-height)] [font-style:var(--heading-h2-bold-40-130-font-style)] hover:text-red-600 transition-colors duration-300">
                One of Nepal&apos;s Most Diversified Industrial Powerhouses
                Championing Growth, Innovation, and Nation-Building
              </h2>

              <div className="flex items-start justify-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
                {missionVisionData.map((item, index) => (
                  <AnimatedSection
                    key={index}
                    animation="fade-in-up"
                    delay={400 + index * 200}
                    className="flex-1 grow"
                  >
                    <div className="flex flex-col items-start gap-[15px] relative group hover:bg-gray-50 p-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                      <div className="flex items-center justify-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                        <img
                          className="relative w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                          alt={item.title}
                          src="mission.svg"
                        />
                        <h3 className="relative flex-1 mt-[-1.00px] font-cap-c1-medium-24-130 font-[number:var(--cap-c1-medium-24-130-font-weight)] text-colortext-text-primary text-[length:var(--cap-c1-medium-24-130-font-size)] tracking-[var(--cap-c1-medium-24-130-letter-spacing)] leading-[var(--cap-c1-medium-24-130-line-height)] [font-style:var(--cap-c1-medium-24-130-font-style)] group-hover:text-red-600 transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                      <p className="relative self-stretch font-para-p2-regular-18-130 font-[number:var(--para-p2-regular-18-130-font-weight)] text-colortext-text-tertiary text-[length:var(--para-p2-regular-18-130-font-size)] tracking-[var(--para-p2-regular-18-130-letter-spacing)] leading-[var(--para-p2-regular-18-130-line-height)] [font-style:var(--para-p2-regular-18-130-font-style)] group-hover:text-gray-600 transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="relative self-stretch w-full h-[725px]">
          <AnimatedSection animation="fade-in-left" className="animate-float">
            <div className="absolute w-[624px] h-[725px] top-0 left-0 bg-[#f4f4f4] rounded-[32px] overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group">
              <img
                className="absolute w-[624px] h-[725px] top-0 left-0 object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Factory worker"
                src="\fac.jpg"
              />
            </div>
          </AnimatedSection>

          {statisticsData.map((stat, index) => (
            <AnimatedSection
              key={index}
              animation="bounce-in"
              delay={600 + index * 150}
            >
              <Card
                className={`flex flex-col w-[296px] h-[346px] items-start justify-between p-[30px] absolute ${stat.position} bg-[#f4f4f4] rounded-[32px] overflow-hidden backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer`}
              >
                <CardContent className="p-0 w-full">
                  <div className="flex items-center justify-center gap-2 pt-0 pb-4 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#bfccd8] group-hover:border-red-300 transition-colors duration-300">
                    <h4 className="relative flex-1 mt-[-1.00px] font-heading-h6-bold-14-130 font-[number:var(--heading-h6-bold-14-130-font-weight)] text-colortext-text-primary text-[length:var(--heading-h6-bold-14-130-font-size)] tracking-[var(--heading-h6-bold-14-130-letter-spacing)] leading-[var(--heading-h6-bold-14-130-line-height)] [font-style:var(--heading-h6-bold-14-130-font-style)] group-hover:text-red-600 transition-colors duration-300">
                      {stat.title}
                    </h4>
                  </div>
                  <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto] mt-4">
                    <div className="relative self-stretch mt-[-1.00px] font-heading-h1-bold-64-130 font-[number:var(--heading-h1-bold-64-130-font-weight)] text-colorbrand-brand-primary text-[length:var(--heading-h1-bold-64-130-font-size)] tracking-[var(--heading-h1-bold-64-130-letter-spacing)] leading-[var(--heading-h1-bold-64-130-line-height)] [font-style:var(--heading-h1-bold-64-130-font-style)] group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <p className="relative w-fit [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-colortext-text-tertiary text-base tracking-[0] leading-[20.8px] whitespace-nowrap group-hover:text-gray-600 transition-colors duration-300">
                      {stat.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}

          <AnimatedSection animation="scale-in" delay={900}>
            <div className="absolute w-[296px] h-[346px] top-[378px] left-[984px] bg-[#f4f4f4] rounded-[32px] overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer">
              <img
                className="absolute w-[296px] h-[346px] top-0 left-0 object-cover group-hover:scale-110 transition-transform duration-500"
                alt="Rice"
                src="\rice-1.png"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};