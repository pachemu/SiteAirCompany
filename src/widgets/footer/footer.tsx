import Link from "next/link";

import { Button } from "@/components/ui/button";
import { EMAIL, PHONE_E164, PHONE_HUMAN } from "@/shared/config/contacts";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex min-h-20 flex-col gap-6 px-4 py-6 md:flex-row md:items-center md:justify-around">
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
            <a href={`tel:${PHONE_E164}`}>{PHONE_HUMAN}</a>
          </Button>

          <Button
            asChild
            variant="link"
            className="h-auto justify-start p-0 md:justify-end"
          >
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
