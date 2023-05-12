import React from "react";
import hero from "../Asset/08cc6e104723621.5f698671656dc.png";

export default function Heroimage() {
  return (
    <div className=" bg-slate-300 px-[250px] py-[50px]">
      <img src={hero} alt="img" className=" rounded-2xl w-full" />
    </div>
  );
}
