"use client";
import {
  BorderBeam,
  ShinyButton
} from "@/components";
import {
  cn
} from "@/lib/utils";
import Image from "next/image";

export default function Button({
  children,
  className,
  onClick,
  icon,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  icon?: string;
}) {
  return (
    <ShinyButton onClick={onClick} className="cursor-pointer px-0 py-0 bg-none rounded-2xl">
      <button
        className={cn(
          "relative py-2 px-8 shadow-xl rounded-2xl text-white font-inter g3 flex items-center gap-3 transition-all duration-300 shadow-background/[0.6]",
          className
        )}
        >
        <BorderBeam duration={8} size={80} />
        <BorderBeam delay={20} duration={8} size={80} />
        {icon && <Image src={icon} alt="" width={30} height={30} />}
        <div className="absolute inset-6 rounded-2xl bg-red-400" />
        <p className="uppercase font-medium">
          {children}
        </p>
      </button>
    </ShinyButton>
  );
}