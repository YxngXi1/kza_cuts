import Image from "next/image";
import Link from 'next/link';

import { Hero } from "@/components"

export default function Payment() {
  return (
    <main>
      <div className="flex ">
        <div className="w-1/2">
          <img src='/haircut1.jpeg' alt="image of a haircut" className="block ml-auto mr-auto" width="500px"/>
        </div>
        <div className="w-1/2">
          <h1 className="font-bold text-8xl text-right mr-40">kza_cuts</h1>
          <p className="mr-40 text-right mt-28 text-6xl">text goes here</p>
          <Link href="/payment">
            <button className="mt-14 block ml-auto generic_button mr-40">Get a Cut!</button>
          </Link>
        </div>
      </div>
    </main>
  );
}