"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { faker } from "@faker-js/faker";

import TopNav from "@/app/components/layout/top-nav";

const Country = ({ params }) => {
  const consume_data = process.env.NEXT_PUBLIC_FAKER_DATA_HEAVY === "true";

  console.log(params.country_id);
  return (
    <main className="lg:mx-40">
      <TopNav />

      <div className="py-2">
        <div className="relative h-48 md:w-96 lg:h-56 mx-2 md:mx-auto">
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
        <div className="flex space-x-2 items-center justify-center my-2">
          <p className="text-gray-700">Country Name:-</p>
          <p className="text-xl font-bold font-sans text-primary capitalize">
            {faker.lorem.word(8)}
          </p>
        </div>

        <div className="flex space-x-2 items-center justify-center my-2">
          <p className="text-gray-700">Capital:-</p>
          <p className="text-xl font-bold font-sans text-primary capitalize">
            {faker.lorem.word(8)}
          </p>
        </div>

        <div className="flex space-x-2 items-center justify-center my-2">
          <p className="text-gray-700">Population:-</p>
          <p className="text-xl font-bold font-sans text-primary capitalize">
            {faker.lorem.word(8)}
          </p>
        </div>

        <div className="flex space-x-2 items-center justify-center my-2">
          <p className="text-gray-700">Continent:-</p>
          <p className="text-xl font-bold font-sans text-primary capitalize">
            {faker.lorem.word(8)}
          </p>
        </div>

        <div className="flex space-x-2 items-center justify-center my-2">
          <p className="text-gray-700">Region:-</p>
          <p className="text-xl font-bold font-sans text-primary capitalize">
            {faker.lorem.word(8)}
          </p>
        </div>

        <div className="flex space-x-2 items-center justify-center my-2">
          <p className="text-gray-700">Sub-Region:-</p>
          <p className="text-xl font-bold font-sans text-primary capitalize">
            {faker.lorem.word(8)}
          </p>
        </div>

        <div className="flex space-x-2 items-center justify-center my-2">
          <p className="text-gray-700">Country Name:-</p>
          <p className="text-xl font-bold font-sans text-primary capitalize">
            {faker.lorem.word(8)}
          </p>
        </div>

        <div className="flex space-x-2 items-center justify-center my-2">
          <p className="text-gray-700">Country Name:-</p>
          <p className="text-xl font-bold font-sans text-primary capitalize">
            {faker.lorem.word(8)}
          </p>
        </div>

        <div className="flex space-x-2 items-center justify-center my-2">
          <p className="text-gray-700">Coat of Arms:-</p>
          <div className="relative h-24 w-24">
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
        </div>

        <div className="flex space-x-2 items-center justify-center my-2">
          <p className="text-gray-700">Languages:-</p>
          <p className="text-xl font-bold font-sans text-primary capitalize">
            {faker.lorem.word(8)}
          </p>
        </div>
      </div>

      <div className="my-2">
        <div>
          <h1 className="text-gray-700 p-3 text-xl font-bold capitalize">
            Related Countries
          </h1>
          <div className="no-scrollbar flex overflow-x-scroll">
            {faker.datatype.array(10).map((item) => (
              <div className="" key={item}>
                <figure className="h-40 ml-2 mt-1 w-40 relative cursor-pointer">
                  <Link href={`/country/${faker.number.int(1000)}`}>
                    <Image
                      className="rounded-lg "
                      src={faker.image.nature(512, 512, consume_data)}
                      style={{ objectFit: "cover" }}
                      fill
                      sizes="100vw"
                      alt=""
                    />
                  </Link>
                </figure>

                <div className="text-center">
                  <p className="text-sm font-sans font-semibold capitalize">
                    {faker.lorem.word(7)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Country;
