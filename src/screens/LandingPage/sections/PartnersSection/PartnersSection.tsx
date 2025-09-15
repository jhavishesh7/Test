import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const PartnersSection = (): JSX.Element => {
  const companiesData = [
    "Everest Paper Mills",
    "Everest Sugar & Chemical Industries Ltd.",
    "Everest Wires Industry",
    "Annapurna Rice Mill",
    "Everest Moulding & Sintering",
    "Everest Non-Ferrous Metals",
  ];

  const sisterConcernsData = [
    "Om Impex Trade Link",
    "Saraff Transport Service",
  ];

  const aboutData = [
    "About Everest Group",
    "Leadership",
    "R & D",
    "Import / Export",
    "Contact Us",
  ];

  return (
    <footer className="flex flex-col w-full items-start gap-2 pt-[100px] pb-6 px-20 bg-white">
      <div className="flex flex-col items-center gap-10 w-full">
        <div className="flex w-full max-w-[1280px] items-start justify-between">
          <div className="inline-flex flex-col items-start gap-2">
            <img
              className="w-[191px] h-20 object-cover"
              alt="Everest Group Logo"
              src="public\image-1-1.png"
            />
            <p className="[font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-colortext-text-tertiary text-base tracking-[0] leading-[20.8px]">
              Driving Industrial Growth with Innovation and Safety
            </p>
          </div>

          <div className="inline-flex items-start gap-6">
            <div className="flex flex-col w-[302px] items-start gap-8">
              <h3 className="font-heading-h5-bold-16-130 font-[number:var(--heading-h5-bold-16-130-font-weight)] text-colortext-text-primary text-[length:var(--heading-h5-bold-16-130-font-size)] tracking-[var(--heading-h5-bold-16-130-letter-spacing)] leading-[var(--heading-h5-bold-16-130-line-height)] [font-style:var(--heading-h5-bold-16-130-font-style)]">
                Companies
              </h3>
              <nav className="flex flex-col items-start justify-center gap-2 w-full">
                {companiesData.map((company, index) => (
                  <div
                    key={`company-${index}`}
                    className="flex items-center gap-2 px-0 py-2 w-full"
                  >
                    <span className="flex-1 [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-colortext-text-tertiary text-base tracking-[0] leading-[20.8px]">
                      {company}
                    </span>
                  </div>
                ))}
              </nav>
            </div>

            <div className="flex flex-col w-[194px] items-start gap-8">
              <h3 className="font-heading-h5-bold-16-130 font-[number:var(--heading-h5-bold-16-130-font-weight)] text-colortext-text-primary text-[length:var(--heading-h5-bold-16-130-font-size)] tracking-[var(--heading-h5-bold-16-130-letter-spacing)] leading-[var(--heading-h5-bold-16-130-line-height)] [font-style:var(--heading-h5-bold-16-130-font-style)]">
                Sister Concerns
              </h3>
              <nav className="flex flex-col items-start gap-2 w-full">
                {sisterConcernsData.map((concern, index) => (
                  <div
                    key={`concern-${index}`}
                    className="flex items-center gap-2 px-0 py-2 w-full"
                  >
                    <span className="flex-1 [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-colortext-text-tertiary text-base tracking-[0] leading-[20.8px]">
                      {concern}
                    </span>
                  </div>
                ))}
              </nav>
            </div>

            <div className="flex flex-col w-[194px] items-start gap-8">
              <h3 className="font-heading-h5-bold-16-130 font-[number:var(--heading-h5-bold-16-130-font-weight)] text-colortext-text-primary text-[length:var(--heading-h5-bold-16-130-font-size)] tracking-[var(--heading-h5-bold-16-130-letter-spacing)] leading-[var(--heading-h5-bold-16-130-line-height)] [font-style:var(--heading-h5-bold-16-130-font-style)]">
                About
              </h3>
              <nav className="flex flex-col items-start gap-2 w-full">
                {aboutData.map((item, index) => (
                  <div
                    key={`about-${index}`}
                    className="flex items-center justify-center gap-2 px-0 py-2 w-full"
                  >
                    <span className="flex-1 [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-colortext-text-tertiary text-base tracking-[0] leading-[20.8px]">
                      {item}
                    </span>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <Separator className="w-[1259px] h-px" />

        <div className="flex h-[38px] items-center justify-between w-full">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="[font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-colortext-text-tertiary text-base tracking-[0] leading-[20.8px] whitespace-nowrap">
              Copyright © 2025 Everest Group | Powered By Pagoda
            </span>
            <img
              className="w-[30px] h-[38px] object-cover"
              alt="Pagoda Labs Logo"
              src="\image-16.png"
            />
            <span className="[font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-colortext-text-tertiary text-base tracking-[0] leading-[20.8px] whitespace-nowrap">
              Labs
            </span>
          </div>

          <div className="inline-flex items-center gap-4">
            <div className="inline-flex items-center justify-center gap-2 px-0 py-2">
              <span className="[font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-colortext-text-tertiary text-base tracking-[0] leading-[20.8px] whitespace-nowrap">
                Terms & Conditions
              </span>
            </div>
            <div className="inline-flex items-center justify-center gap-2 px-0 py-2">
              <span className="[font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-colortext-text-tertiary text-base tracking-[0] leading-[20.8px] whitespace-nowrap">
                Privacy Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
