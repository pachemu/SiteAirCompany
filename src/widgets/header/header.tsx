import Link from "next/link";

import { Button } from "@/components/ui/button";
import { EMAIL, PHONE_E164, PHONE_HUMAN } from "@/shared/config/contacts";

export function Header() {
  return (
    <header className="border-b border-[#CBD5E1] bg-[#F8FAFC]/95 backdrop-blur">
      <div className="mx-auto flex min-h-15 flex-col gap-5 px-4 py-3 text-sm text-foreground md:flex-row md:items-center md:justify-around">
        <Link href="/" className="text-lg font-semibold tracking-tight text-[#0F172A]">
          Кондиционеры в Крыму
        </Link>

        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
          <Button asChild>
            <Link href="/catalog">Оставить заявку</Link>
          </Button>

          <Button asChild variant="ghost">
            <a href={`tel:${PHONE_E164}`}>{PHONE_HUMAN}</a>
          </Button>

          <Button
            asChild
            variant="link"
            className="h-auto justify-start p-0 text-[#38BDF8] md:justify-end"
          >
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
