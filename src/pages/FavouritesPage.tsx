import React from "react";
import { useAppSelector } from "../hooks/redux";

export function FavouritesPage() {
  const { favourites } = useAppSelector((state) => state.github);

  if (favourites.length === 0) return <p className="text-center">No items.</p>;

  return (
    <div className="flex justify-center pt-10 mx-auto h-full w-full">
    <ul className="list-none">
      {favourites.map((favour) => (
        <li key={favour}>
          <a href={favour} target='_blank'>{favour}</a>
        </li>
      ))}
    </ul>
    </div>
  );
}
