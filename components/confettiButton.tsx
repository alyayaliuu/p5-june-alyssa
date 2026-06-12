"use client";

import { Button } from "@heroui/button";
import confetti from "canvas-confetti";

export default function ConfettiButton() {
  const fireConfetti = () => {
    const duration = 6 * 1000;
    const end = Date.now() + duration;

    const colors = ["#ffffff", "#459bcc", "#a5e0f2", "#e0ca77"];

    (function frame() {
      confetti({
        particleCount: 6,
        angle: 60,
        spread: 70,
        origin: { x: 0 },
        colors,
      });

      confetti({
        particleCount: 6,
        angle: 120,
        spread: 70,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <Button
      color="default"
      radius="full"
      variant="shadow"
      onPress={fireConfetti}
    >
      🦭
    </Button>
  );
}
