"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed sm:top-6 top-2 inset-x-0 sm:max-w-2xl max-w-sm sm:mx-auto mx-1 z-50 ", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home">
            
          </MenuItem>
        </Link>
        {/* <Link href={"/courses"}> */}
          <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
               <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">
              Basic Music Theory
            </HoveredLink>
            <HoveredLink href="/courses">
              Advanced Composition
            </HoveredLink>
            <HoveredLink href="/courses">Songwriting</HoveredLink>
            <HoveredLink href="/courses">
              Music Production
            </HoveredLink>
               </div>
          </MenuItem>
        {/* </Link> */}
        {/* <Link href={"/about"}> */}
          <MenuItem setActive={setActive} active={active} item="About Us">
          <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
        {/* </Link> */}
        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us">
         
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
