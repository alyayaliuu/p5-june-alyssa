"use client";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { addToast } from "@heroui/toast";
import { Image } from "@heroui/image";
import { title } from "@/components/primitives";
import ConfettiButton from "@/components/confettiButton";

export default function BlogPage() {
  const Post = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => {
    return (
      <Card>
        <CardHeader className="flex justify-between">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="text-sm text-default-500">
          </div>
        </CardHeader>
        <CardBody>
          <p className="text-default-600">{description}</p>
        </CardBody>
      </Card>
      
    );
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
    <div className="inline-block max-w-xl text-center justify-center">
      <h1 className={title({color:"blue"})}>gallery</h1>
    <div>
      <div className="mt-20 flex flex-col gap-6">
        <Post
          description="The California sea lion is a coastal eared seal native to western North America. Its natural habitat ranges from southeast Alaska to central Mexico, including the Gulf of California. (*https://en.wikipedia.org/wiki/California_sea_lion) California sea lions are highly gregarious, intelligent, and famously playful animals. They are very communicative, often heard barking like dogs in their large social groups. "
          title="california sea lion"
        />
        <div className="flex">
        <Image 
          src="https://www.marinemammalcenter.org/storage/app/uploads/public/ca3/9c1/608/thumb__1600_0_0_0_crop.jpg"
          width={300}
        />
        <Image 
          src="https://www.neaq.org/wp-content/uploads/2023/05/California-Sea-Lion-2-1260x678-1.jpg"
          width={370}
        />
        </div>
        <Post
          description="The Galápagos sea lion is a species of sea lion that lives and breeds on the Galápagos Islands and, in smaller numbers, on Isla de la Plata. They are the smallest sea lion species. (*https://en.wikipedia.org/wiki/Gal%C3%A1pagos_sea_lion) Galápagos sea lions are famously playful, highly sociable, and intensely curious. Unlike most wild animals, they are largely fearless of humans, often approaching snorkelers to do aquatic acrobatics or lounging near beachgoers."
          title="galápagos sea lion"
        />
        <div className="flex">
        <Image 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGRiuxBgGCskjpIGsEkxagA3sJlcxvTNvgLsUZun0NboYZkogYcEmFpM&s=10"
          width={293}
        />
        <Image 
          src="https://www.peaksandpenguins.com/wp-content/uploads/2024/07/DSC_0615.jpg"
          width={290}
        />
        </div>
        <Post
          description="The harp seal, also known as the saddleback seal or Greenland seal, is a species of earless seal, or true seal, native to the northernmost Atlantic Ocean and Arctic Ocean.  (*https://en.wikipedia.org/wiki/Harp_seal) Harp seals are curious, vocal, and highly gregarious mammals. While solitary in the open ocean, they gather in massive, noisy colonies on Arctic and North Atlantic pack ice during mating and molting seasons."
          title="harp seal"
        />
        <div className="flex">
        <Image 
          src="https://cdn.shopify.com/s/files/1/0996/1022/files/8_fcef39e2-ffcf-4e99-8c6d-c8cb5b6ab42f.jpg?v=1737648048&width=2048"
          width={345}
        />
        <Image 
          src="https://www.dfo-mpo.gc.ca/species-especes/images/profiles-profils/~mammals/harp-seal/harp-seal-pup.jpg"
          width={290}
        />
        </div>
        <Post
          description="The harbor seal, also known as the common seal, is a true seal found along temperate and Arctic marine coastlines of the Northern Hemisphere. The most widely distributed species of pinniped, they are found in coastal waters of the northern Atlantic and Pacific oceans, Baltic and North seas. (*https://en.wikipedia.org/wiki/Harbor_seal) Harbor seals are famously solitary, quiet, and highly intelligent animals. Despite gathering in groups on land for safety, they prefer their personal space. They are naturally cautious and alert, but underwater, they transform into curious, playful, and expressive creatures that love to investigate their surroundings."
          title="harbor seal"
        />
        <div className="flex">
        <Image 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc1vWHIk1WCOYErKpQN7zAjsXLqfDCQgM4PUzSoeuDSitwzaqtKmXWuAU&s=10"
          width={330}
        />
        <Image 
          src="https://marinesanctuary.org/wp-content/uploads/2020/10/MBNMS-HarborSealMomAndPup-FitzgeraldMarineReserve-ClariceSoleil-scaled.jpg"
          width={330}
        />
        </div>
      </div>
    </div>
    </div>
    <div className="my-10 inline-block max-w-xl text-center justify-center">
        <ConfettiButton/>
        </div>
        
    </section>
  );
}
