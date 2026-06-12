"use client";

import { addToast } from "@heroui/toast";
import { Accordion, AccordionItem } from "@heroui/react";

import { title } from "@/components/primitives";
import ConfettiButton from "@/components/confettiButton";

export default function PricingPage() {
  const thisDoesNothingToast = () => {
    addToast({
      title: "Hey!",
      description:
        "This button does nothing. But you can make it do something!",
      color: "danger",
    });
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <h1 className={title({ color: "blue" })}>
          which?&nbsp;
          <br />
        </h1>

        <section className="my-20">
          <h2 className="text-center text-4xl font-bold">ears💭</h2>
          <Accordion>
            <AccordionItem key={1} title="sea lion">
              Have ears with external flaps
            </AccordionItem>
            <AccordionItem key={2} title="seal">
              Have ear holes with no external flaps
            </AccordionItem>
          </Accordion>
          <h2 className="text-center text-4xl font-bold">flippers💭</h2>
          <Accordion>
            <AccordionItem key={1} title="sea lion">
              Long, hairless, leathery flippers
            </AccordionItem>
            <AccordionItem key={2} title="seal">
              Short, hairy, webbed flippers
            </AccordionItem>
          </Accordion>
          <h2 className="text-center text-4xl font-bold">motion💭</h2>
          <Accordion>
            <AccordionItem key={1} title="sea lion">
              Can walk on land by rotating their hind flippers
            </AccordionItem>
            <AccordionItem key={2} title="seal">
              Scoots forward on land on their bellies
            </AccordionItem>
          </Accordion>
          <h2 className="text-center text-4xl font-bold">social💭</h2>
          <Accordion>
            <AccordionItem key={1} title="sea lion">
              Very noisy, communicating with loud, dog-like barks; congregates
              in large noisy herds
            </AccordionItem>
            <AccordionItem key={2} title="seal">
              Generally quiet, making soft grunts, growls, or hisses; more
              solitary
            </AccordionItem>
          </Accordion>
        </section>
      </div>
      <div className="inline-block max-w-xl text-center justify-center">
        <ConfettiButton />
      </div>
    </section>
  );
}
