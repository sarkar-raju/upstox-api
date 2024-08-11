import GetToken from "@/components/GetToken";
import Signin from "@/components/Signin";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between mt-4">
      <h1 className="text-3xl font-bold text-gray-300">Market feed from upstox API.</h1>
      <div className="flex">
        <p className="bg-orange-600 px-5 py-1 rounded-full">Actions:</p>
        <ul className="flex ml-2 px-5 py-1 rounded-full gap-3 bg-gray-800">
          <li>
            <Signin />
          </li>
          <li>
            <GetToken />
          </li>
        </ul>
      </div>
    </main>
  );
}
