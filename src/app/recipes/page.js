"use client";
import useSWR from "swr";
import Loader from "../loading";

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
  console.log(recipes);
  return (
    <div>
      <h1>Recipes</h1>
    </div>
  );
}
