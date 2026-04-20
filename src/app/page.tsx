import { Benefits, CategoryGrid, ContactCTA, Hero } from "@/widgets/home";

export default async function Home() {
  return (
    <main className="flex flex-1 bg-slate-100">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-12 xl:px-8">
        <div className="space-y-10">
          <Hero />
          <CategoryGrid />
          <Benefits />
          <ContactCTA />
        </div>
      </div>
    </main>
  );
}
