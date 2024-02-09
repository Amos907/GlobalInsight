"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { Autocomplete } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const TopNav = () => {
  return (
    <>
      <nav className="fixed top-0 z-[1000] left-0 right-0 p-2 bg-secondary w-screen lg:px-40">
        <section className="">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/">
                <div className="flex items-center space-x-2">
                  <figure className="md:hidden relative cursor-pointer">
                    <Image
                      className="rounded-lg"
                      src="/images/logos/logo.png"
                      style={{ objectFit: "cover" }}
                      width={150}
                      height={150}
                      alt=""
                    />
                  </figure>

                  <figure className="hidden md:block relative cursor-pointer">
                    <Image
                      className="rounded-lg"
                      src="/images/logos/logo.png"
                      style={{ objectFit: "cover" }}
                      height={170}
                      width={170}
                      alt=""
                    />
                  </figure>
                </div>
              </Link>
            </div>

            <div className="hidden rounded-lg bg-white md:flex justify-between w-96 h-10 my-auto">
              <div className="flex-grow justify-center pl-4">
                <Autocomplete
                  variant="unstyled"
                  radius={0}
                  placeholder="Search Contry"
                  data={["Merchant 1"]}
                />
              </div>

              <div className="rounded-r-lg bg-blue cursor-pointer pt-1">
                <IconSearch size="2em" className="p-1" />
              </div>
            </div>

            <div className="flex items-center">
              <div className="md:hidden rounded-r-lg cursor-pointer">
                <IconSearch size="2em" className="p-1 mr-2" />
              </div>
            </div>
          </div>
        </section>
      </nav>
      <div className="mt-16"></div>
    </>
  );
};

export default TopNav;
