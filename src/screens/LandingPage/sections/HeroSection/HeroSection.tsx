import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { AnimatedSection } from "../../../../components/AnimatedSection";

const features = [
  {
    number: "1",
    title: "Diversified Expertise",
    description:
      "From cement and steel to energy and real estate, we lead across multiple sectors with a unified standard of excellence.",
  },
  {
    number: "2",
    title: "Local & Sustainable Operations",
    description:
      "We prioritize local impact by creating jobs, uplifting communities, and following sustainable business practices.",
  },
  {
    number: "3",
    title: "Reliable Manufacturing Infrastructure",
    description:
      "Our state-of-the-art plants and facilities deliver consistent, scalable output that meets global standards.",
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full px-20 py-[100px] overflow-hidden">
      <div className="flex items-center gap-[100px]">
        <div className="flex flex-col items-start gap-10 flex-1">
          <AnimatedSection animation="fade-in-left">
            <div className="flex flex-col items-start gap-4 w-full">
              <Badge
                variant="outline"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-[32px] border-[#ff0000] bg-transparent hover:bg-red-50 transition-all duration-300 hover:scale-105 animate-pulse-glow"
              >
                <div className="w-1.5 h-1.5 bg-colorbrand-brand-primary rounded-[3px] animate-pulse" />
                <span className="font-cap-c3-medium-16-130 font-[number:var(--cap-c3-medium-16-130-font-weight)] text-colortext-text-primary text-[length:var(--cap-c3-medium-16-130-font-size)] tracking-[var(--cap-c3-medium-16-130-letter-spacing)] leading-[var(--cap-c3-medium-16-130-line-height)] [font-style:var(--cap-c3-medium-16-130-font-style)]">
                  WHY CHOOSE EVEREST GROUP
                </span>
              </Badge>

              <h2 className="font-heading-h2-bold-40-130 font-[number:var(--heading-h2-bold-40-130-font-weight)] text-colortext-text-primary text-[length:var(--heading-h2-bold-40-130-font-size)] tracking-[var(--heading-h2-bold-40-130-letter-spacing)] leading-[var(--heading-h2-bold-40-130-line-height)] [font-style:var(--heading-h2-bold-40-130-font-style)] hover:text-red-600 transition-colors duration-300">
                What Sets Us Apart
              </h2>

              <p className="[font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-colortext-text-tertiary text-base tracking-[0] leading-[20.8px] hover:text-gray-600 transition-colors duration-300">
                It's not just about building products — it's about innovating,
                collaborating, and delivering solutions that make a lasting
                impact.
              </p>
            </div>
          </AnimatedSection>

          <div className="flex flex-col items-center gap-10 w-full">
            {features.map((feature, index) => (
              <AnimatedSection
                key={index}
                animation="fade-in-up"
                delay={index * 200}
                className="w-full"
              >
                <div className="flex flex-col items-start gap-[15px] w-full group hover:bg-gray-50 p-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <div className="flex items-center justify-center gap-3 w-full">
                    <div className="flex flex-col w-8 h-8 items-center justify-center gap-2 rounded-[99px] border border-solid border-[#ff0000] group-hover:bg-red-500 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                      <span className="font-cap-c2-medium-18-130 font-[number:var(--cap-c2-medium-18-130-font-weight)] text-colorbrand-brand-primary group-hover:text-white text-[length:var(--cap-c2-medium-18-130-font-size)] tracking-[var(--cap-c2-medium-18-130-letter-spacing)] leading-[var(--cap-c2-medium-18-130-line-height)] [font-style:var(--cap-c2-medium-18-130-font-style)] transition-colors duration-300">
                        {feature.number}
                      </span>
                    </div>

                    <h3 className="flex-1 font-cap-c1-medium-24-130 font-[number:var(--cap-c1-medium-24-130-font-weight)] text-colortext-text-primary text-[length:var(--cap-c1-medium-24-130-font-size)] tracking-[var(--cap-c1-medium-24-130-letter-spacing)] leading-[var(--cap-c1-medium-24-130-line-height)] [font-style:var(--cap-c1-medium-24-130-font-style)] group-hover:text-red-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="font-para-p2-regular-18-130 font-[number:var(--para-p2-regular-18-130-font-weight)] text-colortext-text-tertiary text-[length:var(--para-p2-regular-18-130-font-size)] tracking-[var(--para-p2-regular-18-130-letter-spacing)] leading-[var(--para-p2-regular-18-130-line-height)] [font-style:var(--para-p2-regular-18-130-font-style)] group-hover:text-gray-600 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection animation="fade-in-right" className="animate-float">
          <Card className="w-[624px] h-[725px] bg-[#f4f4f4] rounded-[32px] overflow-hidden border-0 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group">
            <CardContent className="p-0 w-full h-full">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Fac"
                src="\fac.jpg"
              />
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};
