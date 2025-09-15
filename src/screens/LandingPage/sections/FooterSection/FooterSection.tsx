import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const companies = [
  {
    name: "Everest Paper Mills",
    description: "Manufacturing various grades of writing & printing paper.",
    image: "/male-working-with-welding-torch-1-6.png",
  },
  {
    name: "Everest Wires Industry",
    description:
      "Manufacturing super-enameled copper wires for industrial applications.",
    image: "/male-working-with-welding-torch-1-6.png",
  },
  {
    name: "Everest Sugar & Chemical Ind.",
    description:
      "Producing fine granulated white sugar with consistent quality.",
    image: "/male-working-with-welding-torch-1-6.png",
  },
  {
    name: "Annapurna Rice Mill",
    description: "Premier manufacturer of Basmati & Mansuli rice varieties.",
    image: "/male-working-with-welding-torch-1-6.png",
  },
  {
    name: "Everest Moulding & Sintering",
    description: "Producing PET preforms, PVC battery separators, and more.",
    image: "/male-working-with-welding-torch-1-6.png",
  },
  {
    name: "Everest Non-Ferrous Metals",
    description: "Manufacturing solder wire, sticks, and lead oxide (PbO).",
    image: "/male-working-with-welding-torch-1-6.png",
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#f4f4f4] px-20 py-[100px]">
      <div className="flex flex-col gap-[100px]">
        <header className="flex items-end justify-between gap-10">
          <div className="flex flex-col gap-4 flex-1">
            <Badge
              variant="outline"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-[32px] border-[#ff0000] w-fit"
            >
              <div className="w-1.5 h-1.5 bg-colorbrand-brand-primary rounded-[3px]" />
              <span className="font-cap-c3-medium-16-130 font-[number:var(--cap-c3-medium-16-130-font-weight)] text-colortext-text-primary text-[length:var(--cap-c3-medium-16-130-font-size)] tracking-[var(--cap-c3-medium-16-130-letter-spacing)] leading-[var(--cap-c3-medium-16-130-line-height)] [font-style:var(--cap-c3-medium-16-130-font-style)]">
                OUR COMPANIES
              </span>
            </Badge>

            <h2 className="font-heading-h2-bold-40-130 font-[number:var(--heading-h2-bold-40-130-font-weight)] text-colortext-text-primary text-[length:var(--heading-h2-bold-40-130-font-size)] tracking-[var(--heading-h2-bold-40-130-letter-spacing)] leading-[var(--heading-h2-bold-40-130-line-height)] [font-style:var(--heading-h2-bold-40-130-font-style)]">
              Diverse Industries, One Trusted Name
            </h2>

            <p className="[font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-colortext-text-tertiary text-base tracking-[0] leading-[20.8px]">
              Driven by innovation, grounded in decades of experience.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="secondary"
              size="icon"
              className="h-auto p-4 bg-colorwhite-base-white rounded-[32px]"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </Button>

            <Button
              variant="secondary"
              size="icon"
              className="h-auto p-4 bg-colorwhite-base-white rounded-[32px]"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </Button>
          </div>
        </header>

        <div className="flex gap-6 overflow-x-auto">
          {companies.map((company, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-[385px] bg-white rounded-[32px] border-0"
            >
              <CardContent className="p-4 flex flex-col gap-6">
                <img
                  className="w-full h-[235px] rounded-3xl object-cover"
                  alt="Male working with"
                  src="https://empirenepal.com/public/images/2038228916supervisors.jpeg"
                />

                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-heading-h3-bold-24-130 font-[number:var(--heading-h3-bold-24-130-font-weight)] text-colortext-text-primary text-[length:var(--heading-h3-bold-24-130-font-size)] tracking-[var(--heading-h3-bold-24-130-letter-spacing)] leading-[var(--heading-h3-bold-24-130-line-height)] [font-style:var(--heading-h3-bold-24-130-font-style)]">
                      {company.name}
                    </h3>

                    <p className="[font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-colortext-text-tertiary text-base tracking-[0] leading-[20.8px]">
                      {company.description}
                    </p>
                  </div>

                  <Button
                    variant="ghost"
                    className="h-auto justify-start gap-2 px-0 py-1 text-colorbrand-brand-primary hover:bg-transparent"
                  >
                    <span className="[font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-base tracking-[0] leading-[20.8px]">
                      Explore More
                    </span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
