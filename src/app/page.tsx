import { getData } from "../../api";
import { products } from "../../drizzle/schema";

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        HELLO MY DR
      </main>
    </div>
  );
}
