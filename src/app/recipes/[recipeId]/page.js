"use client";

import Loader from "@/app/loading";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function RecipeDetails({ params }) {
  const { recipeId } = params;

  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/recipes/${recipeId}`,
    fetcher
  );

  if (isLoading) {
    return <Loader />;
  }

  const recipeDetail = data;

  return (
    <div className="flex flex-col p-10 gap-6 items-center justify-center">
      <h1 className="mb-10 text-center text-3xl md:text-4xl font-light uppercase md:tracking-widest tracking-wider">
        Recipe Details
      </h1>
      <div className="flex flex-col md:flex-row gap-6 border border-slate-200 shadow-lg p-3 rounded-lg">
        <div className="shadow-sm flex items-center justify-center">
          <Image
            src={recipeDetail?.image}
            alt={recipeDetail?.name}
            width={500}
            height={500}
            className="rounded-lg object-center object-cover"
          />
        </div>
        <div className="flex flex-col gap-8 w-full">
          <h1 className="text-center text-2xl font-semibold tracking-wider">
            {recipeDetail?.name}
          </h1>
          <div className="flex items-center justify-around">
            <p className="text-lg text-slate-500 font-semibold">
              Cuisine : {recipeDetail?.cuisine}
            </p>
            <p className="text-lg text-slate-500 font-semibold">
              Rating : ⭐{recipeDetail?.rating}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-center text-xl font-semibold uppercase">
              Ingredients
            </h1>
            <ul className="flex flex-wrap gap-3 items-center justify-center">
              {recipeDetail?.ingredients.map((ingredient, i) => (
                <li key={i} className="bg-blue-700 text-white p-2 rounded-xl">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-center text-xl font-semibold uppercase">
              Instructions
            </h1>
            <ul className="flex flex-wrap gap-3 items-center justify-center">
              {recipeDetail?.instructions.map((instruction, i) => (
                <li key={i} className="">
                  {instruction}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Link href={"/recipes"} className="text-slate-600 font-semibold">
        ⬅ Back to <span className="text-xl">🍲</span>
        Recipes
      </Link>
    </div>
  );
}
