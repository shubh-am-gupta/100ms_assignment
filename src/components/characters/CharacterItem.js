import React from "react";

const CharacterItem = ({ item }) => {
  // console.log(item.birthday);
  return (
    <div className="card">
      <div className="inner_card">
        <div className="front_part">
          <img src={item.img} alt="" />
        </div>
        <div className="back_part">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Date of Birth:</strong> {item.birthday}{" "}
            </li>
            <li>
              <strong>Occupation:</strong> {item.occupation}{" "}
            </li>
            <li>
              <strong>Status:</strong> {item.status}{" "}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}{" "}
            </li>
            <li>
              <strong>Character Name:</strong> {item.portrayed}{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
