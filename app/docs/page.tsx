import ConfettiButton from "@/components/confettiButton";
import { title } from "@/components/primitives";

export default function DocsPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <h1 className={title({ color: "blue" })}>huh?</h1>

        <div className="my-20">
          <span className="text-2xl mr-6">sea lion</span>
          <span className="text-xs">
            Intelligent, playful, vocal marine mammal belonging to the
            &quot;eared seal&quot; family.
          </span>
          <img
            alt="seal lion"
            className="inline-block max-w-xl justify-center"
            src="https://res.cloudinary.com/mysticmade/image/upload/f_auto/q_auto/v1660143055/Animal%20Page%20Images/Sakari_4903?_a=BAAAV6DQ"
            width={300}
          />
        </div>

        <div className="my-20">
          <span className="text-2xl mr-6">seal</span>
          <span className="text-xs">
            Curious, clumsy, quiet marine animal belonging to the &quot;true
            seal&quot; family.
          </span>
          <img
            alt="seal"
            className="inline-block max-w-xl justify-center"
            src="https://ptes.org/wp-content/uploads/2014/06/iStock_000023111644Large-e1403785447529.jpg"
            width={300}
          />
        </div>

        <div className="inline-block max-w-xl text-center justify-center">
          <ConfettiButton />
        </div>
      </div>
    </section>
  );
}
