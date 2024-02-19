import React from "react";
import Image from "next/image";
import Link from "next/link";

const CountryInfoWidget = ({ name, flag, subregion }) => {
  return (
    <div className="bg-white rounded-md p-2 border">
      <div className="relative h-48 lg:h-56 mx-auto">
        <figure>
          <Image
            className="rounded border-none"
            src={flag}
            fill
            sizes="100vw"
            alt=""
          />
        </figure>
      </div>

      <div className="space-y-2 mt-2">
        <div className="max-h-20 text-center">
          <p className="text-sm font-sans font-semibold">{name}</p>
        </div>

        <div className="flex justify-center pb-2">
          <Link
            href={`/country/${name}?subregion=${subregion}`}
            className="pt-2"
          >
            <div className="bg-amber px-4 py-1 rounded-sm text-gray-700">
              View
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CountryInfoWidget;
