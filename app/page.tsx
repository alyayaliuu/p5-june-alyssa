"use client";

import { useState } from "react";

import { title } from "@/components/primitives";
import ConfettiButton from "@/components/confettiButton";

export default function Home() {
  const [spinning, setSpinning] = useState(false);

  const spinButton = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 1500);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>sea...&nbsp;</span>
        <span className={title({ color: "blue" })}>elephant?&nbsp;</span>
        <br />
      </div>
      <div className="my-10 flex gap-3">
        <ConfettiButton />
      </div>
    </section>
  );
}
