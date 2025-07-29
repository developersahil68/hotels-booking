// eslint@typescript-eslint/no-explicit-any
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Cabins ",
};

const Page: NextPage = async () => {
  return (
    <div>
      <h1 className="">Cabins page</h1>;
    </div>
  );
};

export default Page;
