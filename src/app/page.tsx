import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Добро пожаловать!</h1>
        <p className="text-xl text-gray-600">
          Перейдите в{" "}
          <Link href="/catalog" className="text-blue-500 hover:underline">
            каталог
          </Link>{" "}
          для просмотра товаров
        </p>
      </div>
    </div>
  );
}
