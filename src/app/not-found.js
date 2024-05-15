import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center flex-col gap-2">
      <h1 className="text-3xl md:text-4xl font-[400] uppercase md:tracking-widest">
        Page Not Found
      </h1>
      <Link
        href={"/"}
        className="flex items-center justify-center gap-2 font-semibold hover:underline "
      >
        Go To Home{" "}
        <span className="animate-bounce transition-all duration-300 ease-in-out text-xl">
          🏠
        </span>
        Page
      </Link>
    </div>
  );
}
