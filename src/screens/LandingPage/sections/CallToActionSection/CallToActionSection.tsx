import { ChevronDownIcon } from "lucide-react";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

const navigationItems = [
  { label: "Home", hasDropdown: false, isActive: true },
  { label: "Companies", hasDropdown: true, isActive: false },
  { label: "Sister Concerns", hasDropdown: true, isActive: false },
  { label: "About", hasDropdown: true, isActive: false },
  { label: "Contact", hasDropdown: false, isActive: false },
];

export const CallToActionSection = (): JSX.Element => {
  return (
    <div className="absolute top-[32px] left-0 right-0 z-20 flex flex-col w-full items-start gap-2 px-20">
      <div className="flex flex-col items-start gap-2 px-8 py-2 relative self-stretch w-full flex-[0_0_auto] bg-white/95 backdrop-blur-sm rounded-[32px] border-b [border-bottom-style:solid] border-[#e0e6ea] shadow-lg">
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <img
            className="w-32 h-16 relative object-cover hover:scale-110 transition-transform duration-300"
            alt="Image"
            src="\image-1-1-removebg-preview.png"
          />

          <NavigationMenu>
            <NavigationMenuList className="flex items-center justify-center">
              {navigationItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink className="inline-flex items-center justify-center gap-2 p-5 relative flex-[0_0_auto] hover:bg-red-50 rounded-2xl transition-all duration-300 hover:scale-105 group">
                    <div
                      className={`relative w-fit mt-[-1.00px] font-cap-c3-medium-16-130 font-[number:var(--cap-c3-medium-16-130-font-weight)] ${item.isActive ? "text-colorbrand-brand-primary" : "text-colortext-text-primary"} text-[length:var(--cap-c3-medium-16-130-font-size)] tracking-[var(--cap-c3-medium-16-130-letter-spacing)] leading-[var(--cap-c3-medium-16-130-line-height)] whitespace-nowrap [font-style:var(--cap-c3-medium-16-130-font-style)]`}
                    >
                      {item.label}
                    </div>
                    {item.hasDropdown && (
                      <ChevronDownIcon className="relative w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300" />
                    )}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
};
