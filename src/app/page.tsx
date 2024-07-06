"use client";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const handleClick = (buttonName: string) => {
    console.log(`${buttonName} clicked`);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">
        Welcome to the Next.js starter
      </h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mb-2"
        onClick={() => handleClick("Button 1")}
      >
        Button 1
      </button>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
        onClick={() => handleClick("Button 2")}
      >
        Button 2
      </button>
    </div>
  );
};

export default Home;
