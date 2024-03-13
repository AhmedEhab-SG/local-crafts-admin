"use client";

import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      className="h-[70vh]
            flex
            flex-col
            justify-center
            items-center"
    >
      <PuffLoader size={200} color="#3C50E0" />
      <h3 className="text-3xl mt-4">Fetching...</h3>
    </div>
  );
};

export default Loader;
