import React from "react";
import Image from "next/image";

const RequestError = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <figure className="h-80 ml-2 mt-1 w-60 relative cursor-pointer">
        <Image
          className="rounded-lg "
          src="/images/error.jpg"
          style={{ objectFit: "cover" }}
          fill
          sizes="100vw"
          alt=""
        />
      </figure>
    </div>
  );
};

export default RequestError;
