export default function GlobalLoading() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-4xl items-center justify-center px-4 py-12">
      <div className="w-full space-y-3">
        <div className="h-7 w-56 animate-pulse rounded-xl bg-muted" />
        <div className="h-4 w-full animate-pulse rounded-xl bg-muted" />
        <div className="h-4 w-5/6 animate-pulse rounded-xl bg-muted" />
        <div className="h-4 w-2/3 animate-pulse rounded-xl bg-muted" />
      </div>
    </div>
  );
}

