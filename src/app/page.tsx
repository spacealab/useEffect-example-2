'use client';

import MyTable from "../components/MyTable"
import { useState } from "react";

export default function Home(){

  const [counter, setCounter] = useState<number>(1);


  return (
    <main
      className="flex min-h-screen flex-col items-center p-24"
    >
      <MyTable caption={"product 1 list"}/>
      <button className="p-3 mt-5 border rounded text-green-800" onClick={ () => setCounter(pervState => pervState + 1)}>inc counter</button>
    </main>
  )
}