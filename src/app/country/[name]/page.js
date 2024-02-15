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

import MainWrapper from "@/app/components/main-wrapper";
import RequestError from "@/app/components/request-error";
import { InfoWidget, CustomInfoWidget } from "@/app/components/info-widget";
import HorizScrollContainer from "@/app/components/horiz-scroll-container";

const Country = ({ params }) => {
  const dispatch = useDispatch();
  const { country, subRegionCountries, requestStatus } = useSelector(
    (state) => state.country
  );
  const searchParams = useSearchParams();

  const subRegion = searchParams.get("subregion") || "Eastern Africa";

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
    <MainWrapper>
      <div>
        {requestStatus.fetchCountryStatus === "success" &&
        requestStatus.fetchSubRegionCountriesStatus === "success" ? (
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

                  <InfoWidget
                    title={"Country Name"}
                    value={country[0].name.common}
                  />
                  <InfoWidget title={"Capital"} value={country[0].capital[0]} />
                  <InfoWidget
                    title={"Population"}
                    value={country[0].population}
                  />
                  <InfoWidget
                    title={"Continent"}
                    value={country[0].continents[0]}
                  />
                  <InfoWidget title={"Region"} value={country[0].region} />
                  <InfoWidget
                    title={"Sub-Region"}
                    value={country[0].subregion}
                  />

                  <CustomInfoWidget
                    title={"Coat of Arms"}
                    value={country[0].coatOfArms.png}
                  />
                </div>

                <div className="my-2">
                  <div>
                    <h1 className="text-gray-700 p-3 text-xl font-bold capitalize">
                      Related Countries
                    </h1>
                    <div>
                      {subRegionCountries.length > 0 ? (
                        <HorizScrollContainer>
                          {subRegionCountries.map((country) => (
                            <div key={country}>
                              <Link
                                href={`/country/${country.name.common}?subregion=${country.subregion}`}
                              >
                                <figure className="h-40 ml-2 mt-1 w-40 relative cursor-pointer">
                                  <Image
                                    className="rounded-lg "
                                    src={country.flags.png}
                                    style={{ objectFit: "cover" }}
                                    fill
                                    sizes="100vw"
                                    alt=""
                                  />
                                </figure>
                              </Link>

                              <div className="text-center py-2">
                                <p className="text-sm font-sans font-semibold capitalize">
                                  {country.name.common}
                                </p>
                              </div>
                            </div>
                          ))}
                        </HorizScrollContainer>
                      ) : (
                        <></>
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
          <div>
            {requestStatus.fetchCountryStatus === "failled" ||
            requestStatus.fetchSubRegionCountriesStatus === "failled" ? (
              <RequestError />
            ) : (
              <div className="flex justify-center items-center pt-3">
                <Loader color="blue" />
              </div>
            )}
          </div>
        )}
      </div>
    </MainWrapper>
  );
};

export default Country;
