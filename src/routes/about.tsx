import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { Placeholder } from "@/components/Placeholder";

export const Route = createFileRoute("/about")({
  head: () => seo({ title: "About", description: "The story behind Qinghe Atelier, a fictional studio of handmade everyday objects.", path: "/about" }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="font-display text-5xl">About the atelier</h1>
      <Placeholder label="Studio photo" className="mt-10 aspect-[16/9] rounded-2xl" />
      <div className="mt-10 space-y-5 text-muted-foreground">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>
        <p>Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.</p>
      </div>
    </div>
  );
}
