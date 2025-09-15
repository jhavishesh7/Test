import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { AnimatedSection } from "../../../../components/AnimatedSection";

export const StatisticsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-2 px-20 py-[100px] relative overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-[100px] relative self-stretch w-full flex-[0_0_auto]">
        <AnimatedSection animation="fade-in-down">
          <header className="w-[650px] items-center justify-center flex-[0_0_auto] flex flex-col gap-4 relative mx-auto">
            <Badge
              variant="outline"
              className="inline-flex flex-col items-start gap-2 px-4 py-2 relative flex-[0_0_auto] rounded-[32px] border border-solid border-[#ff0000] hover:bg-red-50 transition-all duration-300 hover:scale-105 animate-pulse-glow"
            >
              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                <div className="relative w-1.5 h-1.5 bg-colorbrand-brand-primary rounded-[3px] animate-pulse" />
                <span className="relative w-fit mt-[-1.00px] font-cap-c3-medium-16-130 font-[number:var(--cap-c3-medium-16-130-font-weight)] text-colortext-text-primary text-[length:var(--cap-c3-medium-16-130-font-size)] tracking-[var(--cap-c3-medium-16-130-letter-spacing)] leading-[var(--cap-c3-medium-16-130-line-height)] whitespace-nowrap [font-style:var(--cap-c3-medium-16-130-font-style)]">
                  TESTIMONIALS
                </span>
              </div>
            </Badge>

            <h2 className="relative self-stretch font-heading-h2-bold-40-130 font-[number:var(--heading-h2-bold-40-130-font-weight)] text-colortext-text-primary text-[length:var(--heading-h2-bold-40-130-font-size)] text-center tracking-[var(--heading-h2-bold-40-130-letter-spacing)] leading-[var(--heading-h2-bold-40-130-line-height)] [font-style:var(--heading-h2-bold-40-130-font-style)] hover:text-red-600 transition-colors duration-300">
              What Our Partners Say
            </h2>

            <p className="relative self-stretch [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-colortext-text-tertiary text-base text-center tracking-[0] leading-[20.8px] hover:text-gray-600 transition-colors duration-300">
              Real voices from clients and collaborators who trust in our quality,
              commitment, and long-standing legacy.
            </p>
          </header>
        </AnimatedSection>

        <div className="inline-flex items-center justify-center gap-[120px] relative flex-[0_0_auto] mx-auto">
          <AnimatedSection animation="fade-in-left" delay={300}>
            <Button
              variant="secondary"
              size="icon"
              className="inline-flex items-center gap-2 p-4 relative flex-[0_0_auto] bg-[#f4f4f4] rounded-[32px] h-auto hover:bg-red-100 hover:scale-110 transition-all duration-300 hover:shadow-lg group"
            >
              <ChevronLeftIcon className="relative w-5 h-5 group-hover:text-red-600 transition-colors duration-300" />
            </Button>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" delay={400}>
            <article className="flex flex-col w-[750px] items-center justify-center gap-12 relative mx-auto group hover:scale-[1.02] transition-all duration-300">
              <blockquote className="relative self-stretch mt-[-1.00px] font-heading-h3-bold-24-130 font-[number:var(--heading-h3-bold-24-130-font-weight)] text-colortext-text-primary text-[length:var(--heading-h3-bold-24-130-font-size)] text-center tracking-[var(--heading-h3-bold-24-130-letter-spacing)] leading-[var(--heading-h3-bold-24-130-line-height)] [font-style:var(--heading-h3-bold-24-130-font-style)] group-hover:text-red-600 transition-colors duration-300">
                "Everest Group has been a reliable manufacturing partner for over a
                decade. Their consistency in quality and ability to meet tight
                deadlines is unmatched."
              </blockquote>

              <div className="flex flex-col w-72 items-center justify-center gap-3 relative flex-[0_0_auto] mx-auto">
                <div className="flex flex-col w-[127px] items-center justify-center gap-0.5 relative flex-[0_0_auto] mx-auto">
                  <h3 className="relative self-stretch mt-[-1.00px] font-heading-h4-bold-20-130 font-[number:var(--heading-h4-bold-20-130-font-weight)] text-colortext-text-primary text-[length:var(--heading-h4-bold-20-130-font-size)] text-center tracking-[var(--heading-h4-bold-20-130-letter-spacing)] leading-[var(--heading-h4-bold-20-130-line-height)] [font-style:var(--heading-h4-bold-20-130-font-style)] group-hover:text-red-600 transition-colors duration-300">
                    Ravi Shrestha
                  </h3>

                  <img
                    className="w-[100px] relative h-px object-cover group-hover:scale-110 transition-transform duration-300"
                    alt="Line"
                    src="data:image/svg+xml,%3Csvg width='100' height='1' viewBox='0 0 100 1' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0.5' x2='100' y2='0.5' stroke='%23ff0000'/%3E%3C/svg%3E"
                  />
                </div>

                <p className="relative self-stretch [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-colortext-text-tertiary text-base text-center tracking-[0] leading-[20.8px] group-hover:text-gray-600 transition-colors duration-300">
                  Procurement Head, Global Paper Traders
                </p>
              </div>
            </article>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-right" delay={300}>
            <Button
              variant="secondary"
              size="icon"
              className="inline-flex items-center gap-2 p-4 relative flex-[0_0_auto] bg-[#f4f4f4] rounded-[32px] h-auto hover:bg-red-100 hover:scale-110 transition-all duration-300 hover:shadow-lg group"
            >
              <ChevronRightIcon className="relative w-5 h-5 group-hover:text-red-600 transition-colors duration-300" />
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
