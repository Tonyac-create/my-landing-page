"use client";

import { Particles } from "@/components/ui/particles";
import { AuroraText } from '@/components/ui/aurora-text'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import React from 'react'
import Button from "./Button";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <section className='py-8'>
      <div className="relative flex h-[850px] md:h-[650px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl px-28">
          Transformez votre site web en un produit numérique <AuroraText>performant</AuroraText>
        </h1>
        <span className="pointer-events-none z-10 whitespace-pre-wrap leading-none px-28">
          {/* <h1 className="text-6xl font-bold">Transformez votre site web en un produit numérique <AuroraText> performant</AuroraText>.</h1> */}
          <h2 className="text-3xl mt-6">Spécialiste en optimisation de sites web, j'aide à attirer plus de
            clients en mettant l'accent sur le référencement,
            la fonctionnalité et le design. Découvrez des solutions numériques
            sur mesure pour améliorer votre présence en ligne.</h2>
        </span>
        <ShimmerButton className="shadow-2xl mt-10 hover:scale-110" onClick={() => alert("Clic sur Primary!")}>
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            {/* <Button variant="primary" onClick={() => alert("Clic sur Primary!")}> */}
              Contactez moi
            {/* </Button> */}
          </span>
        </ShimmerButton>
        <Particles
          className="absolute inset-0 z-0"
          quantity={100}
          ease={80}
          color={color}
          refresh
        />
      </div>
    </section>
  )
}

