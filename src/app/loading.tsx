function CatalogSkeletonCard() {
  return (
    <div className="overflow-hidden rounded-3xl border bg-card/80 shadow-sm">
      <div className="h-48 animate-pulse bg-muted" />
      <div className="space-y-4 p-4">
        <div className="space-y-2">
          <div className="h-3 w-24 animate-pulse rounded bg-muted" />
          <div className="h-6 w-3/4 animate-pulse rounded bg-muted" />
          <div className="h-4 w-1/2 animate-pulse rounded bg-muted" />
        </div>
        <div className="grid gap-2">
          <div className="h-4 w-full animate-pulse rounded bg-muted" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="h-7 w-24 animate-pulse rounded-full bg-muted" />
          <div className="h-7 w-20 animate-pulse rounded-full bg-muted" />
          <div className="h-7 w-16 animate-pulse rounded-full bg-muted" />
        </div>
        <div className="h-6 w-32 animate-pulse rounded bg-muted" />
      </div>
    </div>
  );
}

export default function GlobalLoading() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 md:px-6 xl:px-8">
      <div className="rounded-[2rem] border bg-card/80 p-6 shadow-sm">
        <div className="space-y-4">
          <div className="h-5 w-44 animate-pulse rounded bg-muted" />
          <div className="h-10 w-80 max-w-full animate-pulse rounded bg-muted" />
          <div className="grid gap-4 xl:grid-cols-[minmax(0,2fr)_minmax(220px,1fr)_minmax(220px,1fr)]">
            <div className="h-12 animate-pulse rounded-2xl bg-muted" />
            <div className="h-12 animate-pulse rounded-2xl bg-muted" />
            <div className="h-12 animate-pulse rounded-2xl bg-muted" />
          </div>
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-9 w-32 animate-pulse rounded-full bg-muted"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {Array.from({ length: 10 }).map((_, index) => (
          <CatalogSkeletonCard key={index} />
        ))}
      </div>
    </div>
  );
}
