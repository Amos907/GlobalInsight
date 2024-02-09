"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "@mantine/core";
import { useSearchParams } from "next/navigation";

import {
  fetchCountry,
  fetchSubRegionCountries,
} from "@/redux/features/countrySlice";

import TopNav from "@/app/components/layout/top-nav";

const Country = ({ params }) => {
  const dispatch = useDispatch();
  const { country, subRegionCountries, requestStatus } = useSelector(
    (state) => state.country
  );
  const searchParams = useSearchParams();

  const subRegion = searchParams.get("subregion");

  const country_name = params.name;

  useEffect(() => {
    if (country_name) {
      dispatch(fetchCountry({ country_name }));
    }

    if (subRegion) {
      dispatch(fetchSubRegionCountries({ subregion: subRegion }));
    }
  }, [dispatch, country_name, subRegion]);
  return (
    <main className="lg:mx-40">
      <TopNav />

      <div>
        {requestStatus.fetchCountryStatus === "success" ? (
          <div>
            {Object.keys(country[0]).length > 0 ? (
              <div>
                <div className="py-2">
                  <div className="relative h-48 md:w-96 lg:h-56 mx-2 md:mx-auto">
                    <figure>
                      <Image
                        className="rounded border-none"
                        src={country[0].flags.png}
                        fill
                        sizes="100vw"
                        alt=""
                      />
                    </figure>
                  </div>
                  <div className="flex space-x-2 items-center justify-center my-2">
                    <p className="text-gray-700">Country Name:-</p>
                    <p className="text-xl font-bold font-sans text-primary capitalize">
                      {country[0].name.common}
                    </p>
                  </div>

                  <div className="flex space-x-2 items-center justify-center my-2">
                    <p className="text-gray-700">Capital:-</p>
                    <p className="text-xl font-bold font-sans text-primary capitalize">
                      {country[0].capital[0]}
                    </p>
                  </div>

                  <div className="flex space-x-2 items-center justify-center my-2">
                    <p className="text-gray-700">Population:-</p>
                    <p className="text-xl font-bold font-sans text-primary capitalize">
                      {country[0].population}
                    </p>
                  </div>

                  <div className="flex space-x-2 items-center justify-center my-2">
                    <p className="text-gray-700">Continent:-</p>
                    <p className="text-xl font-bold font-sans text-primary capitalize">
                      {country[0].continents[0]}
                    </p>
                  </div>

                  <div className="flex space-x-2 items-center justify-center my-2">
                    <p className="text-gray-700">Region:-</p>
                    <p className="text-xl font-bold font-sans text-primary capitalize">
                      {country[0].region}
                    </p>
                  </div>

                  <div className="flex space-x-2 items-center justify-center my-2">
                    <p className="text-gray-700">Sub-Region:-</p>
                    <p className="text-xl font-bold font-sans text-primary capitalize">
                      {country[0].subregion}
                    </p>
                  </div>

                  <div className="flex space-x-2 items-center justify-center my-2">
                    <p className="text-gray-700">Coat of Arms:-</p>
                    <div className="relative h-24 w-24">
                      <figure>
                        <Image
                          className="rounded border-none"
                          src={country[0].coatOfArms.png}
                          fill
                          sizes="100vw"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>

                <div className="my-2">
                  <div>
                    <h1 className="text-gray-700 p-3 text-xl font-bold capitalize">
                      Related Countries
                    </h1>
                    <div className="">
                      {requestStatus.fetchSubRegionCountriesStatus ===
                      "success" ? (
                        <div>
                          {subRegionCountries.length > 0 ? (
                            <div className="no-scrollbar flex overflow-x-scroll">
                              {subRegionCountries.map((country) => (
                                <div className="" key={country}>
                                  <figure className="h-40 ml-2 mt-1 w-40 relative cursor-pointer">
                                    <Link
                                      href={`/country/${country.name.common}?subregion=${country.subregion}`}
                                    >
                                      <Image
                                        className="rounded-lg "
                                        src={country.flags.png}
                                        style={{ objectFit: "cover" }}
                                        fill
                                        sizes="100vw"
                                        alt=""
                                      />
                                    </Link>
                                  </figure>

                                  <div className="text-center py-2">
                                    <p className="text-sm font-sans font-semibold capitalize">
                                      {country.name.common}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                      ) : (
                        <>
                          <Loader />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <div className="flex">
            <Loader color="blue" />
          </div>
        )}
      </div>
    </main>
  );
};

export default Country;
