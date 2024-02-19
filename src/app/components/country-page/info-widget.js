import React from "react";
import Image from "next/image";

export const InfoWidget = ({ title, value }) => {
  return (
    <div className="flex space-x-2 items-center justify-center my-2">
      <p className="text-gray-700">{title}:-</p>
      <p className="text-xl font-bold font-sans text-primary capitalize">
        {value}
      </p>
    </div>
  );
};

export const CustomInfoWidget = ({ title, value }) => {
  return (
    <div className="flex space-x-2 items-center justify-center my-2">
      <p className="text-gray-700">{title}:-</p>
      <div className="relative h-24 w-24">
        <figure>
          <Image
            className="rounded border-none"
            src={value}
            fill
            sizes="100vw"
            alt=""
          />
        </figure>
      </div>
    </div>
  );
};
