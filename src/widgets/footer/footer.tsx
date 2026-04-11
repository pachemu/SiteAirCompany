import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex min-h-20 max-w-7xl flex-col gap-6 px-4 py-6 md:flex-row md:items-center md:justify-between">
        <div className="text-lg font-semibold">
          Logo Ionin Conditioner Crimea
        </div>

        <nav className="flex items-center gap-2">
          <Button asChild variant="ghost">
            <Link href="/catalog">Каталог</Link>
          </Button>
        </nav>

        <div className="flex flex-col gap-2 text-sm text-muted-foreground md:items-end">
          <p>Респ. Крым, г. Симферополь, ул. Бахчисарайская 9</p>

          <Button
            asChild
            variant="link"
            className="h-auto justify-start p-0 md:justify-end"
          >
            <a href="tel:+79788397202">+7 (978) 839-72-02</a>
          </Button>

          <Button
            asChild
            variant="link"
            className="h-auto justify-start p-0 md:justify-end"
          >
            <a href="mailto:alexeyivanych182@mail.ru">
              alexeyivanych182@mail.ru
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
