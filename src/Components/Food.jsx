import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Food() {
  const [data, setData] = useState();
  useEffect(() => {
    const call = async () => {
      await axios
        .get(
          "https://api.spoonacular.com/food/search?apiKey=64c7b68bae3d4fbb9a57b4bd47b5fbb4"
        )
        .then((res) => {
          // console.log(res);
          setData(res.data.searchResults[0]?.results);
        });
    };
    call();
  }, []);

  // console.log(data);
  return (
    <>
      {console.log(data)}

      {/* {data.map((e, i) => {
        <div> hyhy</div>;
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg cards m-4"
          key={i}
        >
          <img
            className="w-full"
            src={`${e.image}`}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{e.name}</div>
            <p className="text-gray-700 text-base ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>;
      })} */}
    </>
  );
}

export default Food;
