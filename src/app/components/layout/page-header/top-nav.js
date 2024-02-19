import React from "react";

import Link from "next/link";
import Image from "next/image";

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
                      priority={true}
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
                      priority={true}
                      alt=""
                    />
                  </figure>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </nav>
      <div className="mt-16"></div>
    </>
  );
};

export default TopNav;
