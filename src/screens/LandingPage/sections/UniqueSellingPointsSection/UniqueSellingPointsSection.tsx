import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const UniqueSellingPointsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-2 pt-[130px] pb-20 px-20 relative bg-colorbrand-brand-bg">
      <div className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="relative w-[650px] mt-[-1.00px] font-heading-h2-bold-40-130 font-[number:var(--heading-h2-bold-40-130-font-weight)] text-colortext-text-white text-[length:var(--heading-h2-bold-40-130-font-size)] text-center tracking-[var(--heading-h2-bold-40-130-letter-spacing)] leading-[var(--heading-h2-bold-40-130-line-height)] [font-style:var(--heading-h2-bold-40-130-font-style)]">
          Let&apos;s Create Sustainable Industrial Solutions Together
        </h2>

        <Button className="inline-flex items-center justify-center gap-2 px-6 py-4 relative flex-[0_0_auto] bg-colorbrand-brand-primary rounded-[32px] h-auto hover:bg-colorbrand-brand-primary/90">
          <span className="relative w-fit mt-[-1.00px] font-para-p3-regular-16-130 font-[number:var(--para-p3-regular-16-130-font-weight)] text-colortext-text-white text-[length:var(--para-p3-regular-16-130-font-size)] tracking-[var(--para-p3-regular-16-130-letter-spacing)] leading-[var(--para-p3-regular-16-130-line-height)] whitespace-nowrap [font-style:var(--para-p3-regular-16-130-font-style)]">
            Schedule Your booking
          </span>

          <ArrowRightIcon className="relative w-4 h-4" />
        </Button>
      </div>

      <div className="absolute w-full h-[50px] top-0 left-0 bg-colorwhite-base-white rounded-[0px_0px_99px_99px]" />
    </section>
  );
};
