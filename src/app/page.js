"use client";

import React, { useEffect, useState } from "react";
import { Loader, Input } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllCountries } from "src/redux/features/countrySlice";
import MainWrapper from "./components/layout/containers/main-wrapper";
import RequestError from "./components/layout/request-error";
import CountryInfoWidget from "./components/home-page/country-info-widget";

export default function Home() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const { allCountries, requestStatus } = useSelector((state) => state.country);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  let filteredCountries = [];
  if (allCountries && allCountries.length > 0) {
    filteredCountries = allCountries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
  }

  useEffect(() => {
    if (requestStatus.fetchAllCountriesStatus === "idle") {
      dispatch(fetchAllCountries());
    }
  }, [dispatch, requestStatus.fetchAllCountriesStatus]);

  return (
    <MainWrapper>
      <div>
        <div className="flex justify-center pt-4">
          <div className="rounded-lg flex justify-between items-center w-96 h-10 my-auto space-y-4">
            <div className="flex-grow justify-center pl-4">
              <Input
                placeholder="Search Country"
                value={query}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="text-center space-y-4 py-4 font-bold px-4 md:flex justify-center">
          <div>
            <p className="text-xl font-sans text-primary">
              Discover the {"World's"} Wonders
            </p>
            <p className="text-gray-700 font-semibold md:px-20 max-w-4xl mx-auto">
              Dive into a treasure trove of information about countries across
              the globe. From bustling metropolises to serene landscapes,
              uncover fascinating facts, rich cultures, and diverse traditions.
              Start your journey of exploration today!
            </p>

            <p className="text-primary text-lg">
              Select a country and begin your journey!
            </p>
          </div>
        </div>

        {requestStatus.fetchAllCountriesStatus === "success" ? (
          <div>
            {allCountries.length > 0 ? (
              <div>
                {filteredCountries.length > 0 ? (
                  <div className="grid grid-cols-2 gap-2 mx-1 md:grid-cols-4">
                    {filteredCountries.map((country) => (
                      <CountryInfoWidget
                        key={country}
                        name={country.name.common}
                        flag={country.flags.png}
                        subregion={country.subregion}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2 mx-1 md:grid-cols-4">
                    {allCountries.map((country) => (
                      <CountryInfoWidget
                        key={country}
                        name={country.name.common}
                        flag={country.flags.png}
                        subregion={country.subregion}
                      />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <div>
            {requestStatus.fetchAllCountriesStatus === "failled" ? (
              <RequestError />
            ) : (
              <div className="flex justify-center items-center">
                <Loader color="blue" />
              </div>
            )}
          </div>
        )}
      </div>
    </MainWrapper>
  );
}
