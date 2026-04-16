import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="border-b bg-background">
      <div className="mx-auto flex min-h-15 flex-col gap-5 px-4 py-3 text-sm text-foreground md:flex-row md:items-center md:justify-around">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Ионин кондиционер 82
        </Link>

        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
          <Button asChild>
            <Link href="/catalog">Оставить заявку</Link>
          </Button>

          <Button asChild variant="ghost">
            <a href="tel:+79788390272">+7 (978) 839-02-72</a>
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
    </header>
  );
}
