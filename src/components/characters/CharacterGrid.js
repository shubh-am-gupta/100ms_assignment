import React from "react";
import CharacterItem from "./CharacterItem";
import Loader from "../ui/Loader";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Loader />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
  );
};

export default CharacterGrid;
