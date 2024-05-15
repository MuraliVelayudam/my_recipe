import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center flex-col gap-4">
      <h1 className="text-2xl md:text-4xl md:tracking-widest font-light">
        Welcome To Recipes App
      </h1>
      <Link
        href={"/recipes"}
        className="flex items-center gap-1 font-semibold bg-blue-700 text-white p-4 rounded-full hover:ring-2 hover:ring-offset-1 ring-blue-500 transition-all duration-300 ease-in-out"
      >
        Explore Recipes <span className="animate-pulse text-xl">➡</span>
      </Link>
    </div>
  );
}
