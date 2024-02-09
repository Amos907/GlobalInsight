"use client";

import Image from "next/image";
import TopNav from "./components/layout/top-nav";
import { faker } from "@faker-js/faker";
import Link from "next/link";

import { Autocomplete } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export default function Home() {
  const consume_data = process.env.NEXT_PUBLIC_FAKER_DATA_HEAVY === "true";
  return (
    <main className="lg:mx-40">
      <TopNav />

      {/* <div className="flex justify-center">
        <div className="rounded-lg flex justify-between items-center w-96 h-10 my-auto bg-white shadow-lg space-y-4">
          <div className="flex-grow justify-center pl-4">
            <Autocomplete
              variant="unstyled"
              radius={0}
              placeholder="Search Country"
              data={["Merchant 1"]}
            />
          </div>

          <div className="rounded-r-lg bg-blue cursor-pointer pt-1">
            <IconSearch size="2em" className="p-1" />
          </div>
        </div>
      </div> */}

      <div className="text-center space-y-4 py-4 font-bold px-4 md:flex justify-center">
        <div>
          <p className="text-xl font-sans text-primary">
            Discover the {"World's"} Wonders
          </p>
          <p className="text-gray-700 font-semibold md:px-20 max-w-4xl mx-auto">
            Dive into a treasure trove of information about countries across the
            globe. From bustling metropolises to serene landscapes, uncover
            fascinating facts, rich cultures, and diverse traditions. Start your
            journey of exploration today!
          </p>

          <p className="text-primary text-lg">
            Select a country and begin your journey!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mx-1 md:grid-cols-4">
        {faker.datatype.array(20).map((item) => (
          <div key={item} className="bg-white rounded-md p-2 border">
            <div className="relative h-48 lg:h-56 mx-auto">
              <figure>
                <Image
                  className="rounded border-none"
                  src={faker.image.nature(512, 512, consume_data)}
                  fill
                  sizes="100vw"
                  alt=""
                />
              </figure>
            </div>

            <div className="space-y-2 mt-2">
              <div className="max-h-20 text-center">
                <p className="text-sm font-sans font-semibold">
                  {faker.lorem.word(7)}
                </p>
              </div>

              <div className="flex justify-center pb-2">
                <Link
                  href={`/country/${faker.number.int(1000)}`}
                  className="pt-2"
                >
                  <div className="bg-amber px-4 py-1 rounded-sm text-gray-700">
                    View
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
