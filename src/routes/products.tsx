import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { Placeholder } from "@/components/Placeholder";

export const Route = createFileRoute("/products")({
  head: () => seo({ title: "Products", description: "Browse placeholder handmade products from Qinghe Atelier, a fictional studio.", path: "/products" }),
  component: Products,
});

const items = ["Product One", "Product Two", "Product Three", "Product Four", "Product Five", "Product Six"];

function Products() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="font-display text-5xl">Products</h1>
      <p className="mt-4 text-muted-foreground">Sample items for display only — nothing here is for sale.</p>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((name) => (
          <article key={name}>
            <Placeholder label={name} className="aspect-square rounded-xl" />
            <h2 className="mt-4 font-display text-2xl">{name}</h2>
            <p className="text-sm text-muted-foreground">Placeholder description. Lorem ipsum dolor sit amet.</p>
          </article>
        ))}
      </div>
    </div>
  );
}
