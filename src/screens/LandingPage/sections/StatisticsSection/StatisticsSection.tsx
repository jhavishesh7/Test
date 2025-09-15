import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export const StatisticsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-2 px-20 py-[100px] relative">
      <div className="flex flex-col items-center gap-[100px] relative self-stretch w-full flex-[0_0_auto]">
        <header className="w-[650px] items-center justify-center flex-[0_0_auto] flex flex-col gap-4 relative">
          <Badge
            variant="outline"
            className="inline-flex flex-col items-start gap-2 px-4 py-2 relative flex-[0_0_auto] rounded-[32px] border border-solid border-[#ff0000]"
          >
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <div className="relative w-1.5 h-1.5 bg-colorbrand-brand-primary rounded-[3px]" />
              <span className="relative w-fit mt-[-1.00px] font-cap-c3-medium-16-130 font-[number:var(--cap-c3-medium-16-130-font-weight)] text-colortext-text-primary text-[length:var(--cap-c3-medium-16-130-font-size)] tracking-[var(--cap-c3-medium-16-130-letter-spacing)] leading-[var(--cap-c3-medium-16-130-line-height)] whitespace-nowrap [font-style:var(--cap-c3-medium-16-130-font-style)]">
                TESTIMONIALS
              </span>
            </div>
          </Badge>

          <h2 className="relative self-stretch font-heading-h2-bold-40-130 font-[number:var(--heading-h2-bold-40-130-font-weight)] text-colortext-text-primary text-[length:var(--heading-h2-bold-40-130-font-size)] text-center tracking-[var(--heading-h2-bold-40-130-letter-spacing)] leading-[var(--heading-h2-bold-40-130-line-height)] [font-style:var(--heading-h2-bold-40-130-font-style)]">
            What Our Partners Say
          </h2>

          <p className="relative self-stretch [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-colortext-text-tertiary text-base text-center tracking-[0] leading-[20.8px]">
            Real voices from clients and collaborators who trust in our quality,
            commitment, and long-standing legacy.
          </p>
        </header>

        <div className="inline-flex items-center justify-center gap-[120px] relative flex-[0_0_auto]">
          <Button
            variant="secondary"
            size="icon"
            className="inline-flex items-center gap-2 p-4 relative flex-[0_0_auto] bg-[#f4f4f4] rounded-[32px] h-auto"
          >
            <ChevronLeftIcon className="relative w-5 h-5" />
          </Button>

          <article className="flex flex-col w-[750px] items-center gap-12 relative">
            <blockquote className="relative self-stretch mt-[-1.00px] font-heading-h3-bold-24-130 font-[number:var(--heading-h3-bold-24-130-font-weight)] text-colortext-text-primary text-[length:var(--heading-h3-bold-24-130-font-size)] text-center tracking-[var(--heading-h3-bold-24-130-letter-spacing)] leading-[var(--heading-h3-bold-24-130-line-height)] [font-style:var(--heading-h3-bold-24-130-font-style)]">
              Everest Group has been a reliable manufacturing partner for over a
              decade. Their consistency in quality and ability to meet tight
              deadlines is unmatched.
            </blockquote>

            <div className="flex flex-col w-72 items-center gap-3 relative flex-[0_0_auto]">
              <div className="flex flex-col w-[127px] items-center justify-center gap-0.5 relative flex-[0_0_auto]">
                <h3 className="relative self-stretch mt-[-1.00px] font-heading-h4-bold-20-130 font-[number:var(--heading-h4-bold-20-130-font-weight)] text-colortext-text-primary text-[length:var(--heading-h4-bold-20-130-font-size)] text-center tracking-[var(--heading-h4-bold-20-130-letter-spacing)] leading-[var(--heading-h4-bold-20-130-line-height)] [font-style:var(--heading-h4-bold-20-130-font-style)]">
                  Ravi Shrestha
                </h3>

                <img
                  className="w-[100px] relative h-px object-cover"
                  alt="Line"
                  src="data:image/svg+xml,%3Csvg width='100' height='1' viewBox='0 0 100 1' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0.5' x2='100' y2='0.5' stroke='%23ff0000'/%3E%3C/svg%3E"
                />
              </div>

              <p className="relative self-stretch [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-colortext-text-tertiary text-base text-center tracking-[0] leading-[20.8px]">
                Procurement Head, Global Paper Traders
              </p>
            </div>
          </article>

          <Button
            variant="secondary"
            size="icon"
            className="inline-flex items-center gap-2 p-4 relative flex-[0_0_auto] bg-[#f4f4f4] rounded-[32px] h-auto"
          >
            <ChevronRightIcon className="relative w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
