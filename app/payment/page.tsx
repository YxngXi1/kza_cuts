import Image from "next/image";
import Link from 'next/link';

import { Hero } from "@/components"

export default function Payment() {
  return (
    <main>
        <h2 className="text-center text-6xl">Thanks for getting a cut!</h2>
        <h3 className="text-center text-4xl mt-10">How would you like to pay?</h3>
        <div className="flex bottom-0 w-full absolute mb-36">
          <div className="ml-auto mr-auto items-center flex-col flex">
            <p className="text-4xl">Cash (in-person)</p>
            <Link href='/cash'>
                <button className="payment_button mt-8">Click!</button>
            </Link>
          </div>
          <div className="ml-auto mr-auto items-center flex-col flex">
            <p className="text-4xl">Online (paypal)</p>
            <Link href="/paypal">
                <button className="payment_button mt-8">Click!</button>
            </Link>
          </div>
        </div>
    </main>
  );
}