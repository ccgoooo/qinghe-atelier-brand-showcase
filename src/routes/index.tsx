import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { Placeholder } from "@/components/Placeholder";

export const Route = createFileRoute("/")({
  head: () => seo({ title: "Handmade goods, quietly made", description: "Qinghe Atelier is a fictional small studio making simple handmade objects for everyday life.", path: "/" }),
  component: Home,
});

function Home() {
  return (
    <div>
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">A small studio</p>
          <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl">Quiet objects for slow days.</h1>
          <p className="mt-6 max-w-md text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.</p>
          <div className="mt-8 flex gap-3">
            <Link to="/products" className="rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:opacity-90">View products</Link>
            <Link to="/about" className="rounded-full border border-border px-6 py-3 text-sm hover:bg-muted">Our story</Link>
          </div>
        </div>
        <Placeholder label="Hero image" className="aspect-[4/5] rounded-2xl" />
      </section>
      <section className="border-t border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-3">
          {["Made by hand", "Small batches", "Natural materials"].map((t) => (
            <div key={t}>
              <h2 className="font-display text-2xl">{t}</h2>
              <p className="mt-2 text-sm text-muted-foreground">Placeholder text. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
