"use client";
import useSWR from "swr";
import Loader from "../loading";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Recipes() {
  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/recipes",
    fetcher
  );

  if (isLoading) {
    return <Loader />;
  }

  const recipes = data?.recipes;

  return (
    <div className="flex items-center justify-center py-10 px-10 flex-col gap-8">
      <h1 className="text-3xl md:text-4xl tracking-wider md:tracking-widest uppercase font-extralight ">
        Recipes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes && recipes.length > 0
          ? recipes.map((each_Recipe) => (
              <Link
                key={each_Recipe.id}
                href={`/recipes/${each_Recipe.id}`}
                className="hover:scale-105 transition-all duration-500 ease-in-out"
              >
                <Card>
                  <CardContent className="overflow-hidden cursor-pointer p-4 shadow-md">
                    <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                      <Image
                        src={each_Recipe.image}
                        alt="Landscape picture"
                        className="w-full h-full object-cover object-center rounded-lg"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="mt-4 flex  flex-col gap-3">
                      <h1 className="text-lg font-semibold text-center">
                        {each_Recipe.name}
                      </h1>
                      <div className="flex justify-between items-center">
                        <p className="text-gray-700">
                          Rating :
                          <span className="">⭐{each_Recipe.rating}</span>
                        </p>
                        <p className="text-gray-700">{each_Recipe.cuisine}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
}
