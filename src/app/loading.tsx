export default function GlobalLoading() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 md:px-6 xl:px-8">
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#CBD5E1] border-t-[#38BDF8]" />
      </div>
    </div>
  );
}
