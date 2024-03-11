import Image from "next/image";
import Link from 'next/link';

import { Hero } from "@/components"
import { Poppins } from "next/font/google"

export default function Payment() {
  return (
    <main>
        <h2 className="text-center text-6xl">Thanks for getting a cut!</h2>
        <h3 className="text-center text-4xl mt-10">How would you like to pay?</h3>
        <div className="flex justify-center space-between bottom-0 absolute outline">
          <div className="ml-auto mr-auto outline">
            <p>Cash (in-person)</p>
          </div>
          <div className="ml-auto mr-auto outline">
            <p>Online</p>
          </div>
        </div>
    </main>
  );
}