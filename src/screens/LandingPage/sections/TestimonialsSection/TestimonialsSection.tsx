import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[1060px] bg-[#f4f4f4]">
      <div className="relative h-[1060px] bg-[url(https://empirenepal.com/public/images/2038228916supervisors.jpeg)] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />

        <div className="flex flex-col w-[650px] items-start absolute top-[520px] left-20 z-10">
          <h1 className="relative self-stretch mt-[-1.00px] font-heading-h1-bold-64-130 font-[number:var(--heading-h1-bold-64-130-font-weight)] text-colortext-text-white text-[length:var(--heading-h1-bold-64-130-font-size)] tracking-[var(--heading-h1-bold-64-130-letter-spacing)] leading-[var(--heading-h1-bold-64-130-line-height)] [font-style:var(--heading-h1-bold-64-130-font-style)]">
            Moving Nepal&apos;s Industrial Backbone Forward
          </h1>

          <p className="relative self-stretch font-para-p2-regular-18-130 font-[number:var(--para-p2-regular-18-130-font-weight)] text-coloroutline-secondary-border text-[length:var(--para-p2-regular-18-130-font-size)] tracking-[var(--para-p2-regular-18-130-letter-spacing)] leading-[var(--para-p2-regular-18-130-line-height)] [font-style:var(--para-p2-regular-18-130-font-style)]">
            Each project is an opportunity to transform—backed by decades of
            expertise, a diverse portfolio, and a deep-rooted commitment to
            building a stronger tomorrow.
          </p>
        </div>

        <div className="flex flex-col items-start justify-center absolute top-[690px] left-[1308px] gap-3 z-10">
          <Button
            variant="secondary"
            size="icon"
            className="h-auto p-4 bg-colorwhite-base-white rounded-[32px] hover:bg-gray-100"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </Button>

          <Button
            variant="secondary"
            size="icon"
            className="h-auto p-4 bg-colorwhite-base-white rounded-[32px] hover:bg-gray-100"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </Button>
        </div>

        <div className="absolute w-full h-[50px] top-[1010px] left-0 bg-colorwhite-base-white rounded-[99px_99px_0px_0px]" />
      </div>
    </section>
  );
};
